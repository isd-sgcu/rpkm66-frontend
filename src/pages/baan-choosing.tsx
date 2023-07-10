import { ChangeEvent, ReactNode, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Favicon from '@/public/images/favicon.svg';
import Footer from '@/components/Footer';

interface TestBaanObj {
    name: string;
    size: string;
    imgUrl: string;
}

const picTest1: string = '/images/pfp-placeholder.svg';
const picTest2: string = '/images/rocket.svg';
const picTest3: string = '/images/background-mobile.svg';

const testBaanData: TestBaanObj[] = [
    { name: 'บ้านทรายทอง', size: 'S', imgUrl: picTest1 },
    { name: 'บ้านนี้มีรัก', size: 'S', imgUrl: picTest1 },
    { name: 'บ้านและสวน', size: 'S', imgUrl: picTest1 },
    { name: 'บ้านนอก', size: 'M', imgUrl: picTest3 },
    { name: 'บ้านของใคร', size: 'M', imgUrl: picTest1 },
    { name: 'บ้านอะไรก็ไม่รู้', size: 'M', imgUrl: picTest1 },
    { name: 'บ้านบ้าน', size: 'L', imgUrl: picTest1 },
    { name: 'บ้าน Pure', size: 'L', imgUrl: picTest1 },
    { name: 'บ้าน Dota', size: 'L', imgUrl: picTest2 },
    { name: 'บ้าน LOL', size: 'XL', imgUrl: picTest1 },
    { name: 'บ้าน ROV', size: 'XL', imgUrl: picTest1 },
    { name: 'บ้าน ggez', size: 'XL', imgUrl: picTest1 },
];

const BaanChoosing = () => {
    const bottonStyle: string =
        'lg:mx-4 mx-8 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';
    const textStyle: string =
        'bg-pink-400 w-fit lg:px-4 px-2 mr-6 lg:py-2 py-1 rounded-lg lg:text-sm text-xs ring-8 ring-pink-400/30';
    const [input, setInput] = useState<string>('');
    interface SelectedBaan {
        imageURL: string;
        size: string;
        name: string;
        num: number;
    }
    const images: SelectedBaan[] = [
        {
            imageURL: picTest2,
            name: 'บ้าน Dota',
            size: 'L',
            num: 1,
        },
        {
            imageURL: picTest3,
            name: 'บ้านนอก',
            size: 'M',
            num: 2,
        },
        {
            imageURL: picTest1,
            name: '',
            size: '',
            num: 3,
        },
    ];
    const usedSelectedBaan: ReactNode = images.map((e: SelectedBaan) => {
        return (
            <div
                key={e.num}
                className="flex flex-col items-center text-sm lg:flex-row"
            >
                <div
                    className={`mx-4 my-3 flex h-16 w-16 items-center justify-center bg-white ring-4 ring-pink-400 lg:h-20 lg:w-20`}
                >
                    <Image
                        src={e.imageURL}
                        alt={e.name}
                        width={20}
                        height={20}
                        className="fill"
                    />
                </div>
                <p>{e.name == '' ? 'จงเลือกบ้าน' : `${e.size}: ${e.name}`}</p>
            </div>
        );
    });
    const listBaan: ReactNode = testBaanData
        .filter((e) => e.name.includes(input))
        .map((e: TestBaanObj) => {
            return (
                <div
                    key={e.name}
                    className="flex flex-col items-center text-sm"
                >
                    <div
                        className={`mx-4 my-4 flex h-36 w-36 items-center justify-center rounded-xl bg-white lg:h-48 lg:w-48`}
                    >
                        <Image
                            src={e.imgUrl}
                            alt={e.name}
                            width={36}
                            height={36}
                            className="fill"
                        />
                    </div>
                    <p>{`${e.size}: ${e.name}`}</p>
                </div>
            );
        });
    return (
        <>
            <div className="h-screen w-screen translate-y-24 items-center justify-center lg:z-50 lg:flex lg:-translate-y-[2.5rem] lg:flex-row lg:text-white">
                <div className="lg:mb-none p-auto mx-12 flex flex-col items-center justify-center border bg-white px-8 py-10 text-black max-lg:rounded-t-3xl lg:mx-0 lg:mb-6 lg:ml-auto lg:mr-0 lg:h-[30rem] lg:w-fit lg:items-start lg:rounded-l-3xl min-[1600px]:h-3/5">
                    <h1 className="relative z-0 select-none text-3xl font-bold leading-none lg:text-4xl">
                        เลือกบ้าน
                    </h1>
                    <h2 className="lg:text-l relative z-0 my-3 select-none text-xl leading-none">
                        เลือก 3 บ้านที่สนใจมากที่สุด
                    </h2>
                    <div className="mx-auto flex h-full flex-wrap items-center justify-evenly lg:flex-col">
                        {usedSelectedBaan}
                    </div>
                    <div className="mb-1 mt-5 flex items-center justify-center text-white lg:mt-3 min-[1600px]:mt-auto">
                        <button
                            className={`${bottonStyle} bg-pink-400 ring-pink-400/40`}
                            onClick={() => console.log('Pink was clicked')}
                        >
                            ตกลง
                        </button>
                        <button
                            className={`${bottonStyle} bg-red-500 ring-red-500/40`}
                            onClick={() => console.log('Red was clicked')}
                        >
                            ยกเลิก
                        </button>
                    </div>
                </div>
                <div className="lg:mb-none p-auto mx-12 mb-6 h-auto border bg-black/50 px-8 py-8 max-lg:rounded-b-3xl lg:mx-0 lg:mr-auto lg:h-[30rem] lg:w-3/5 lg:rounded-r-3xl min-[1600px]:h-3/5">
                    <div className="flex items-center">
                        <div>
                            <Image
                                src={Favicon}
                                alt="logo"
                                className="mr-4 h-8 w-8 object-contain lg:h-12 lg:w-12"
                            />
                        </div>
                        <form className="w-full text-black lg:w-full">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="ค้นหาบ้าน"
                                value={input}
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    setInput(e.target.value);
                                }}
                                className="w-full rounded-3xl bg-white px-4 py-1 text-sm placeholder-gray-500 ring-8 ring-white/20 lg:text-xl"
                            />
                        </form>
                    </div>
                    <div className="mt-8 flex max-lg:overflow-scroll lg:px-4 lg:py-4">
                        <div className={textStyle}>
                            <button onClick={() => console.log('S clicked')}>
                                บ้านขนาดเล็ก (S)
                            </button>
                        </div>
                        <div className={textStyle}>
                            <button onClick={() => console.log('M clicked')}>
                                บ้านขนาดกลาง (M)
                            </button>
                        </div>
                        <div className={textStyle}>
                            <button onClick={() => console.log('L clicked')}>
                                บ้านขนาดใหญ่ (L)
                            </button>
                        </div>
                        <div className={textStyle}>
                            <button onClick={() => console.log('XL clicked')}>
                                บ้านขนาดใหญ่พิเศษ (XL)
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-evenly lg:h-[17rem] lg:overflow-y-scroll lg:py-4 min-[1600px]:h-4/6">
                        {listBaan}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanChoosing;
