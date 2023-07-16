import Image from 'next/image';
import React from 'react';
import { StarIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Square2StackIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { IShortUser, IUser } from '@/types/user';
import { IGroup, IGroupPublic } from '@/types/group';
import InviteLink from './components/InviteLink';
import GroupPanel from './components/GroupPanel';
import BaanPanel from './components/BaanPanel';
import ProfileInfoPanel from './components/ProfileInfoPanel';

const profilePic = '/images/pfp-placeholder.svg';

export interface GroupMember {
    name: string;
    surname: string;
    imgUrl: string;
    role: string;
}
export interface SelectedBaan {
    name: string;
    imgUrl: string;
    size: string;
    num: number;
}

const BaanSelection = () => {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-min items-center justify-center py-16 text-white">
            <div className="flex h-full min-h-max w-full flex-col justify-center px-4 xl:flex-row">
                <ProfileInfoPanel />
                <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 rounded-b-2xl bg-black/50 p-8 xl:rounded-r-2xl xl:rounded-bl-none">
                    <InviteLink />
                    <div className="flex w-full flex-col justify-center gap-8 xl:flex-row">
                        <GroupPanel />
                        <BaanPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaanSelection;
