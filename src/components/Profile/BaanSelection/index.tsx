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
        <div className="flex min-h-screen w-full items-center justify-center overflow-clip py-16 text-white">
            <div className="flex h-full w-full flex-col items-center justify-center px-4 lg:flex-row">
                <ProfileInfoPanel />
                <div className="flex w-full flex-col items-center justify-center rounded-b-2xl bg-black/50 p-8 lg:w-auto lg:rounded-r-2xl lg:rounded-bl-none">
                    <InviteLink />
                    <div className="flex w-full flex-col justify-center lg:flex-row">
                        <GroupPanel />
                        <BaanPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaanSelection;
