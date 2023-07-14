import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

export default function ProfileInfoPanel() {
    return (
        <div
            className={`bg-style flex w-full place-items-center justify-center space-x-10 rounded-t-2xl bg-white lg:grid lg:h-[30rem] lg:w-auto lg:space-x-0 lg:rounded-l-2xl lg:rounded-tr-none`}
        >
            <div>
                <StarIcon
                    className="absolute -translate-x-7 -translate-y-7 rounded-full bg-yellow stroke-orange stroke-2 p-2"
                    color="white"
                    width={55}
                    height={55}
                />
                <Image
                    className="rounded-lg ring-8 ring-gray-300"
                    src={profilePic}
                    width={175}
                    height={367}
                    alt="profile pic"
                />
            </div>

            <div className="flex flex-col ">
                <div className=" lg:text-auto relative z-0 select-none py-4 text-center text-3xl font-bold leading-none text-purple">
                    <p>
                        แจฮยอน
                        <br />
                        คงแก่การเรียน
                    </p>
                </div>
                <button
                    className={`button-style bg-pink-400 text-xl ring-2 ring-pink-400/30 transition-all duration-500 hover:ring-8`}
                >
                    แก้ไขข้อมูล
                </button>
            </div>
        </div>
    );
}
