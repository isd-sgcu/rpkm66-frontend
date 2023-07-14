import Image from 'next/image';
import React from 'react';
import { StarIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Square2StackIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { IShortUser, IUser } from '@/types/user';
import { IGroup, IGroupPublic } from '@/types/group';
import InviteLink from './elements/InviteLink';
import GroupPanel from './elements/GroupPanel';
import BaanPanel from './elements/BaanPanel';
import ProfileInfoPanel from './elements/ProfileInfoPanel';

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
        <>
            <div className="grid place-items-center lg:mx-5 lg:h-screen ">
                <div className="my-5 flex flex-col items-center justify-center overflow-clip text-xl text-white lg:my-0 lg:h-full lg:w-full lg:flex-row lg:text-4xl">
                    <ProfileInfoPanel />

                    <div
                        className={`bg-style mb-10 w-full grid-rows-2 items-center justify-center rounded-b-2xl bg-black bg-opacity-50 lg:mb-0 lg:mr-5 lg:h-[30rem] lg:w-auto lg:rounded-r-2xl lg:rounded-bl-none`}
                    >
                        <InviteLink />
                        <div className="flex w-full flex-col items-stretch justify-center lg:flex-row">
                            <GroupPanel />
                            <BaanPanel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanSelection;
