import { useAuth } from '@/context/AuthContext';
import { IBaan } from '@/types/baan';
import { getBaan } from '@/utils/baan';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AnnounceBaan: NextPage = () => {
    const { user } = useAuth();

    const [baan, setBaan] = useState<IBaan | null>(null);

    useEffect(() => {
        const fetchData = async (baanId: string) => {
            const res = await getBaan(baanId);
            setBaan(res);
        };

        fetchData(user?.baanId || '');
    }, [user?.baanId]);

    return (
        <div className="relative flex min-h-screen w-full items-center overflow-x-hidden bg-gray-800/30 px-2 backdrop-blur-sm backdrop-filter">
            {baan ? (
                <div className="mx-auto flex flex-col items-center justify-center space-y-6 rounded-3xl bg-white px-6 py-8 text-purple-400">
                    <div className="w-full text-center text-xl font-semibold text-yellow lg:text-3xl">
                        ยินดีด้วย! คุณได้รับเลือกเข้า
                    </div>
                    <div>
                        <div className="relative h-40 w-40">
                            <Image
                                src={baan?.imageUrl}
                                alt=""
                                loading="lazy"
                                fill
                                className="rounded-2xl shadow"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-center text-4xl font-bold">
                            {baan.name}
                        </div>
                        <div className="text-center text-xl font-semibold">
                            ติดตามข่าวสารได้ที่
                        </div>
                        <div className="flex flex-row items-center justify-center gap-8">
                            <Link href={baan.igUrl}>
                                <button className="flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-1 transition duration-150 hover:bg-gray-100">
                                    <div className="relative h-8 w-8">
                                        <Image
                                            src={'/images/icons8-instagram.svg'}
                                            alt=""
                                            loading="lazy"
                                            className="object-contain"
                                            fill
                                        />
                                    </div>
                                    <div className="my-auto text-xl">
                                        {baan.ig}
                                    </div>
                                </button>
                            </Link>

                            <Link
                                href={'https://www.instagram.com/sgcu.chula/'}
                            >
                                <button className="flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-1 transition duration-150 hover:bg-gray-100">
                                    <div className="relative h-8 w-8">
                                        <Image
                                            src={'/images/icons8-instagram.svg'}
                                            alt=""
                                            loading="lazy"
                                            className="object-contain"
                                            fill
                                        />
                                    </div>
                                    <div className="my-auto text-xl">
                                        sgcu.chula
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mx-auto flex flex-col items-center justify-center space-y-6 rounded-3xl bg-white px-6 py-8 text-purple-400">
                    <p className="text-purple w-full text-center text-xl font-semibold lg:text-3xl">
                        ขออภัย ท่านไม่ได้ทำการเลือกบ้าน
                        <br /> หรือหากเกิดข้อผิดพลาด
                    </p>
                    <div className="space-y-2">
                        <div className="text-center text-xl font-semibold">
                            กรุณาติดต่อเราที่
                        </div>
                        <div className="flex flex-row items-center justify-center gap-8">
                            <Link
                                href={'https://www.instagram.com/sgcu.chula/'}
                            >
                                <button className="flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-1 transition duration-150 hover:bg-gray-100">
                                    <div className="relative h-8 w-8">
                                        <Image
                                            src={'/images/icons8-instagram.svg'}
                                            alt=""
                                            loading="lazy"
                                            className="object-contain"
                                            fill
                                        />
                                    </div>
                                    <div className="my-auto text-xl">
                                        sgcu.chula
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AnnounceBaan;
