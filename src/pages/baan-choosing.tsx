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

const picTest1 = '/images/pfp-placeholder.svg';
const picTest2 = '/images/rocket.svg';
const picTest3 = '/images/background-mobile.svg';

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
        'lg:mx-4 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';
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
                className="flex flex-col lg:flex-row text-sm items-center"
            >
                <div
                    className={`lg:h-20 lg:w-20 h-16 w-16 bg-white my-3 mx-4 flex items-center justify-center ring-4 ring-pink-400`}
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
                    className="flex flex-col text-sm items-center"
                >
                    <div
                        className={`lg:h-48 lg:w-48 h-36 w-36 bg-white my-4 mx-4 flex items-center justify-center rounded-xl`}
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
            <Navbar />

            <div className="w-screen h-screen lg:flex lg:flex-row justify-center items-center lg:text-white overflow-scroll lg:z-50 lg:-translate-y-[2.5rem] translate-y-24">
                <div className="w-fit lg:mb-none mb-6 p-auto py-8 px-8 border lg:h-[30rem] mx-auto lg:mr-0 lg:ml-auto bg-white text-black lg:rounded-s-3xl min-[1600px]:h-3/4">
                    <h1 className="text-3xl lg:text-4xl font-bold relative z-0 leading-none select-none">
                        เลือกบ้าน
                    </h1>
                    <h2 className="text-xl lg:text-l my-3 relative z-0 leading-none select-none">
                        เลือก 3 บ้านที่สนใจมากที่สุด
                    </h2>
                    <div className="flex lg:flex-col justify-center items-center flex-wrap">
                        {usedSelectedBaan}
                    </div>
                    <div className="mt-1 mb-1 text-white flex justify-center items-center">
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
                <div className="lg:mb-none mb-6 p-auto py-8 px-8 border lg:mr-auto bg-black/50 lg:rounded-e-3xl lg:h-[30rem] min-[1600px]:h-3/4 h-auto lg:w-3/5 lg:mx-0 mx-12 border">
                    <div className="flex items-center">
                        <div>
                            <Image
                                src={Favicon}
                                alt="logo"
                                className="object-contain w-8 h-8 lg:w-12 lg:h-12 mr-4"
                            />
                        </div>
                        <form className="lg:w-full w-full text-black">
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
                                className="px-4 py-1 text-sm bg-white placeholder-black w-full rounded-3xl lg:text-xl ring-8 ring-white/20"
                            />
                        </form>
                    </div>
                    <div className="flex mt-8 lg:px-4 lg:py-4 overflow-scroll">
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
                    <div className="flex justify-center items-center lg:py-4 lg:h-[17rem] min-[1600px]:h-5/6 lg:overflow-scroll flex-wrap">
                        {listBaan}
                    </div>
                </div>
            </div>
            <div className="lg:translate-y-0 translate-y-24">
                <Footer />
            </div>
        </>
    );
};

export default BaanChoosing;
