import { Modal } from '@/components/Modal';
import { useAppContext } from '@/context/ModalContext';
import { GroupPublicDTO } from '@/dto/groupDTO';
import { httpGet, httpPost } from '@/utils/axios';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

function useGroupData() {
    const { query, replace } = useRouter();

    const token = useMemo(
        () => decodeURI((query.token as string | undefined) ?? ''),
        [query]
    );

    const [loading, setLoading] = useState(true);
    const [group, setGroup] = useState<GroupPublicDTO>();
    const [error, setError] = useState('');

    useEffect(() => {
        if (!token) return;

        async function fetchGroup() {
            try {
                const { data } = await httpGet<GroupPublicDTO>(
                    `/group/${encodeURIComponent(token)}`
                );
                setGroup(data);
                setLoading(false);
            } catch (err) {
                setError(
                    (err as AxiosError).response?.status === 404
                        ? 'ไม่พบกลุ่มนี้ (404 Not Found)'
                        : `ไม่สามารถดึงข้อมูลของกลุ่มนี้ได้ (${
                              (err as AxiosError).response?.status
                          } ${(err as AxiosError).response?.data})`
                );
            }
        }

        fetchGroup();
    }, [token]);

    const joinGroup = useCallback(async () => {
        try {
            const { status } = await httpPost(
                `/group/${encodeURIComponent(token)}`,
                {}
            );

            if (status === 200) {
                replace('/profile');
            }
        } catch (err) {
            console.log({ err });
            setError(
                (err as AxiosError).response?.status === 403
                    ? 'สมาชิกในกลุ่มเต็มแล้ว หรือคุณเป็นหัวหน้ากลุ่มอยู่ (403 Forbidden)'
                    : `เกิดข้อผิดพลาดที่ไม่ทราบ (${
                          (err as AxiosError).response?.status
                      } ${(err as AxiosError).response?.data})`
            );
        }
    }, [replace, token]);

    return {
        token,
        group,
        error,
        loading,
        joinGroup,
    };
}

const JoinPage: NextPage = () => {
    const router = useRouter();
    const { openModal, modalToOpen, closeModal } = useAppContext();

    const { group, error, loading, joinGroup } = useGroupData();

    useEffect(() => {
        if (!loading && !error) {
            openModal('modal-join-group');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    useEffect(() => {
        if (error) {
            openModal('modal-join-error');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    function handleCloseModal(answer: 1 | 2 | undefined) {
        if (answer === 2) {
            joinGroup();
            closeModal();
        } else {
            router.push('/profile');
        }
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <Modal
                open={modalToOpen === 'modal-join-group'}
                onClose={handleCloseModal}
                answer1="ยกเลิก"
                answer2="ต้องการ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        คุณต้องการเข้ากลุ่มของ{' '}
                        <span className="text-orange">
                            {group?.leader.firstname} {group?.leader.lastname}
                        </span>{' '}
                        หรือไม่?
                    </h2>
                </div>
            </Modal>

            <Modal
                open={modalToOpen === 'modal-join-error'}
                onClose={() => {
                    closeModal();
                    router.push('/profile');
                }}
                answer1=""
                answer2="รับทราบ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        เกิดข้อผิดพลาดในการเข้าร่วมกลุ่ม
                    </h2>
                    <p className="pt-4">{error}</p>
                </div>
            </Modal>
        </div>
    );
};

export default JoinPage;
