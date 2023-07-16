import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { IShortUser } from '@/types/user';
import { useMemo } from 'react';
import { httpDelete } from '@/utils/axios';
import { Modal } from '@/components/Modal';
import { useAppContext } from '@/context/ModalContext';

const profilePic = '/images/pfp-placeholder.svg';

export default function GroupPanel() {
    const { user, group, isAuthenticated } = useAuth();
    const { openModal, modalToOpen, closeModal } = useAppContext();

    const members = useMemo(() => {
        const gMembers = [...(group?.members ?? [])];

        while (gMembers.length < 3) {
            gMembers.push({
                id: `placeholder-${gMembers.length}`,
                firstname: '',
                lastname: '',
                image_url: profilePic,
            } satisfies IShortUser);
        }

        return gMembers;
    }, [group]);

    async function leaveGroup() {
        const { status } = await httpDelete('/group/leave');

        if (status === 200) {
            window.location.reload();
        }
    }

    return (
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 ring-8 ring-white/30">
            <Modal
                open={modalToOpen === 'modal-leave-group'}
                onClose={(ans) => {
                    if (ans === 2) {
                        leaveGroup();
                    }
                    closeModal();
                }}
                answer1="ยกเลิก"
                answer2="ต้องการ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        คุณยืนยันการ
                        <span className="text-orange">
                            <br />
                            ออกจากบ้านรับเพื่อน
                        </span>
                    </h2>
                </div>
            </Modal>

            <p className="mb-4 text-center text-xl font-bold text-purple-400 lg:text-3xl">
                สมาชิกในกลุ่ม ({group?.members.length ?? 1}/3)
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                {members.map((data) => {
                    return (
                        <div
                            className="relative flex w-full flex-col items-center gap-4 px-4"
                            key={data.id}
                        >
                            <div className="relative aspect-3/4 w-32 max-w-full overflow-clip rounded-lg border-2 border-purple-400">
                                <Image
                                    src={data.image_url}
                                    fill
                                    alt={data.firstname}
                                />
                            </div>
                            <div className="relative z-0 flex select-none flex-col text-center text-lg leading-none text-purple-400">
                                <p>{data.firstname}</p>
                                <p>{data.lastname}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 flex flex-col place-items-center items-center justify-center gap-2 text-center text-sm">
                <hr className="h-8" />
                <button
                    className="mx-auto rounded-lg bg-pink-400 px-3 py-2 text-xl text-white ring-4 ring-pink-400/30 transition-all duration-500 enabled:hover:ring-8 disabled:cursor-not-allowed disabled:bg-pink-300"
                    onClick={() => openModal('modal-leave-group')}
                    disabled={!isAuthenticated || group?.leaderID === user?.id}
                >
                    ออกจากกลุ่ม
                </button>
            </div>
        </div>
    );
}
