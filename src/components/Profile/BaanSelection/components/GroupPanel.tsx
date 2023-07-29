import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { IShortUser } from '@/types/user';
import { useMemo, useState } from 'react';
import { httpDelete } from '@/utils/axios';
import { Modal } from '@/components/Modal';
import { useAppContext } from '@/context/ModalContext';
import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Button from '@/components/Button';

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

    const [removeUser, setRemoveUser] = useState<IShortUser>();

    async function kickUser(id: string) {
        const { status } = await httpDelete(`/group/members/${id}`);

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
                            ออกจากกลุ่ม
                        </span>
                    </h2>
                </div>
            </Modal>

            <Modal
                open={modalToOpen === 'modal-kick-user'}
                onClose={(ans) => {
                    if (ans === 2) {
                        removeUser?.id && kickUser(removeUser.id);
                    }
                    closeModal();
                }}
                answer1="ยกเลิก"
                answer2="ตกลง"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        ยืนยันการลบสมาชิก
                        <span className="text-orange">
                            <br />
                            {removeUser?.firstname} {removeUser?.lastname}
                            <br />
                        </span>
                        ออกจากกลุ่ม
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
                            <div className="relative aspect-3/4 w-32 max-w-full rounded-lg border-2 border-purple-400">
                                {group && group?.leaderID === data.id && (
                                    <StarIcon className="absolute z-10 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow stroke-orange stroke-2 p-1" />
                                )}
                                {group &&
                                    !data.id.startsWith('placeholder-') &&
                                    group?.leaderID === user?.id &&
                                    data.id !== user?.id && (
                                        <button
                                            className="absolute right-0 top-0 z-10 flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-pink-400 p-1"
                                            onClick={() => {
                                                setRemoveUser(data);
                                                openModal('modal-kick-user');
                                            }}
                                        >
                                            <XMarkIcon className="h-full font-bold text-white" />
                                        </button>
                                    )}
                                <Image
                                    src={data.image_url}
                                    fill
                                    alt={data.firstname}
                                    className="rounded-lg"
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
                {/* แก้ button */}
                <Button
                    additionalStyle="rounded-lg bg-pink-400 ring-pink-400/30 text-xl disabled:bg-pink-300"
                    content={<>ออกจากกลุ่ม </>}
                    onClick={() => openModal('modal-leave-group')}
                    disabled={!isAuthenticated || group?.leaderID === user?.id}
                />
            </div>
        </div>
    );
}
