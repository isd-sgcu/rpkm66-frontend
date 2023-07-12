import { ChangeEvent, ReactNode, useState } from 'react';
import Image from 'next/image';
import Delete from '@/public/images/delete.svg';
import Search from '@/public/images/search.svg';
import Home from '@/public/images/home.svg';

const defaultImageTest: string = '/images/pfp-placeholder.svg';
const picTest1: string = '/images/rocket.svg';
const picTest2: string = '/images/rocket.svg';
const picTest3: string = '/images/home.svg';

interface TestBaanObj {
    name: string;
    size: string;
    imgUrl: string;
}

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
    const [input, setInput] = useState<string>('');
    const [fill, setFill] = useState<string>('');
    const [baan, setBaan] = useState<TestBaanObj[]>(testBaanData);
    interface SelectedBaan {
        imageURL: string;
        size: string;
        name: string;
        num: number;
    }
    const [selectedBaan, setSelectedBaan] = useState<SelectedBaan[]>([
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
            imageURL: defaultImageTest,
            name: '',
            size: '',
            num: 3,
        },
    ]);
    const usedSelectedBaan: ReactNode = selectedBaan.map((e: SelectedBaan) => {
        return (
            <div
                key={e.num}
                className="flex flex-col items-center text-sm lg:flex-row"
            >
                <div
                    className={`mx-4 my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-white ring-2 ring-purple lg:h-24 lg:w-24`}
                >
                    <div className="absolute flex h-5 w-5 -translate-x-8 -translate-y-8 items-center justify-center rounded-md bg-purple text-white lg:h-7 lg:w-7 lg:-translate-x-9 lg:-translate-y-9">
                        <p>{e.num}</p>
                    </div>
                    <Image
                        src={e.imageURL}
                        alt={e.name}
                        width={100}
                        height={100}
                        className="rounded-lg bg-black object-contain"
                    />
                </div>
                {e.name == '' ? (
                    <div className="flex w-24 flex-col items-center lg:mx-3 lg:flex-row">
                        <p>จงเลือกบ้าน</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center lg:flex-row">
                        <p className="mx-3 mb-3 lg:mb-0 lg:w-24">{`${e.name} (${e.size})`}</p>
                        <button
                            onClick={() => {
                                const resetBaan: SelectedBaan[] = [
                                    ...selectedBaan,
                                ];
                                resetBaan[e.num - 1] = {
                                    ...resetBaan[e.num - 1],
                                    name: '',
                                    size: '',
                                    imageURL: defaultImageTest,
                                };
                                setSelectedBaan(resetBaan);
                            }}
                        >
                            <Image
                                src={Delete}
                                width={20}
                                height={20}
                                alt="delete-button"
                            />
                        </button>
                    </div>
                )}
            </div>
        );
    });
    const listBaan: ReactNode = baan
        .filter((e) => e.name.includes(input))
        .map((e: TestBaanObj) => {
            return (
                <div
                    key={e.name}
                    className="text-md flex flex-col items-center"
                >
                    <div
                        className={`mx-4 my-4 flex h-32 w-32 items-center justify-center rounded-xl bg-white ring-4 ring-purple lg:h-40 lg:w-40 min-[1600px]:h-56 min-[1600px]:w-56`}
                    >
                        <Image
                            src={e.imgUrl}
                            alt={e.name}
                            width={300}
                            height={300}
                            className="rounded-xl bg-black object-contain"
                        />
                    </div>
                    <p>{`${e.name} (${e.size})`}</p>
                </div>
            );
        });
    const filterBaan = (f: string) => {
        setBaan(testBaanData);
        if (fill == f) setFill('');
        else {
            setFill(f);
            setBaan(testBaanData.filter((e: TestBaanObj) => e.size == f));
        }
    };
    return (
        <>
            <div className="min-h-screen w-screen translate-y-24 items-center justify-center lg:z-50 lg:flex lg:-translate-y-[2.5rem] lg:flex-row lg:text-white">
                <div className="lg:mb-none mx-12 flex flex-col items-center justify-center border bg-white px-8 py-10 text-black max-lg:rounded-t-3xl lg:mx-0 lg:mb-6 lg:ml-auto lg:mr-0 lg:h-[34rem] lg:w-fit lg:items-start lg:rounded-l-3xl min-[1600px]:h-[44rem]">
                    <h1 className="relative z-0 select-none text-3xl font-bold leading-none tracking-wider lg:mt-8 lg:text-5xl">
                        เลือกบ้าน
                    </h1>
                    <h2 className="lg:text-l relative z-0 my-3 select-none text-xl">
                        เลือก 3 บ้านที่สนใจมากที่สุด
                    </h2>
                    <div className="mx-auto flex h-full flex-wrap items-start justify-evenly max-[498px]:flex-col lg:flex-col">
                        {usedSelectedBaan}
                    </div>
                </div>
                <div className="lg:mb-none p-auto mx-12 mb-6 h-auto border bg-black/50 px-8 py-8 backdrop-blur-sm max-lg:rounded-b-3xl lg:mx-0 lg:mr-auto lg:h-[34rem] lg:w-3/5 lg:rounded-r-3xl min-[1600px]:h-[44rem]">
                    <div className="flex items-center">
                        <div className="mr-2 flex w-32 items-center justify-center">
                            <h1 className="text-2xl">ค้นหาบ้าน</h1>
                        </div>
                        <form className="w-full text-black lg:w-full">
                            <label htmlFor="search">
                                <Image
                                    src={Search}
                                    alt="search-icon"
                                    width={24}
                                    height={24}
                                    className="absolute translate-x-3 lg:translate-y-1"
                                />
                            </label>
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
                                className="w-full rounded-3xl bg-white py-1 pl-11 pr-4 text-sm placeholder-gray-500 ring-8 ring-white/20 lg:text-lg"
                            />
                            <button>
                                <Image
                                    src={Home}
                                    alt="Home-icon"
                                    width={30}
                                    height={30}
                                    className="absolute -translate-x-11 -translate-y-5"
                                />
                            </button>
                        </form>
                    </div>
                    <div className="mt-8 flex px-2 py-2 max-lg:overflow-scroll lg:px-4 lg:py-4">
                        <div className="selectSizeButton">
                            <button
                                className="max-lg:whitespace-nowrap"
                                onClick={() => filterBaan('S')}
                            >
                                บ้านขนาดเล็ก (S)
                            </button>
                        </div>
                        <div className="selectSizeButton">
                            <button
                                className="max-lg:whitespace-nowrap"
                                onClick={() => filterBaan('M')}
                            >
                                บ้านขนาดกลาง (M)
                            </button>
                        </div>
                        <div className="selectSizeButton">
                            <button
                                className="max-lg:whitespace-nowrap"
                                onClick={() => filterBaan('L')}
                            >
                                บ้านขนาดใหญ่ (L)
                            </button>
                        </div>
                        <div className="selectSizeButton">
                            <button
                                className="max-lg:whitespace-nowrap"
                                onClick={() => filterBaan('XL')}
                            >
                                บ้านขนาดใหญ่พิเศษ (XL)
                            </button>
                        </div>
                    </div>
                    <div className="mx-4 mb-20 mt-6 flex flex-wrap items-center justify-evenly rounded-3xl bg-white text-black ring-8 ring-white/40 lg:mb-0 lg:mt-3 lg:h-[20rem] lg:overflow-y-scroll lg:py-4 min-[1600px]:h-[30rem]">
                        {listBaan}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanChoosing;
