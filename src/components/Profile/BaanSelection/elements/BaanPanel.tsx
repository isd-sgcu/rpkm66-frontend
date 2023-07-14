import Image from 'next/image';
import { SelectedBaan } from '..';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const profilePic = '/images/pfp-placeholder.svg';

export default function BaanPanel() {
    const baan: SelectedBaan[] = [
        { name: 'บ้านนอก', imgUrl: profilePic, size: 'M', num: 1 },
        { name: 'บ้านโดต้าทู', imgUrl: profilePic, size: 'XL', num: 2 },
        { name: 'บ้านไำดอไำด', imgUrl: profilePic, size: 'XL', num: 3 },
    ];

    return (
        <div className="flex flex-col rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25">
            <div className="lg:text-auto mb-4 text-center text-3xl text-purple">
                <b>บ้านรับเพื่อนที่เลือก</b>
            </div>
            <div className="flex items-center justify-center">
                {baan.map((data: SelectedBaan) => {
                    return (
                        <div className="flex" key={data.name}>
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="flex h-40 w-36 flex-col items-center">
                                    <div>
                                        <div className="absolute h-7 w-7 rounded-br-lg rounded-tl-lg bg-purple pl-2 text-lg font-bold">
                                            {data.num}
                                        </div>
                                        <Image
                                            className="rounded-lg border-2 border-purple"
                                            src={data.imgUrl}
                                            width={75}
                                            height={100}
                                            alt={data.name}
                                        />
                                    </div>
                                    <div className=" relative z-0 select-none py-4 text-center text-xl leading-none text-purple">
                                        <p>
                                            {data.name}
                                            <br />({data.size})
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-5 flex flex-col place-items-center justify-center">
                <div className="flex items-center justify-center text-sm text-[#46B9AC]">
                    <div className="mr-1 flex place-items-center items-center justify-center">
                        <CheckCircleIcon
                            className="flex"
                            width={25}
                            height={25}
                        />
                    </div>
                    ระบบได้ทำการบันทึกเรียบร้อยแล้ว
                </div>
                <button
                    className={`button-style w-fitr first-letter:text-bold mt-3 bg-pink-400 bg-gradient-to-bl from-pink-400 to-pink-800/20 text-xl ring-pink-400/40`}
                >
                    เปลี่ยนอันดับ
                </button>
            </div>
        </div>
    );
}
