import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Favicon from '@/public/images/favicon.svg';
import Footer from '@/components/Footer';
import { ChangeEvent, ReactNode, useState } from 'react';

const profilePicPlaceholderURL = '/images/pfp-placeholder.svg';
interface testBaanObj {
    name: string;
    size: string;
    imgUrl: string;
}
const testBaanData: testBaanObj[] = [
    { name: 'บ้่านทรายทอง', size: 'S', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านนี้มีรัก', size: 'S', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านและสวน', size: 'S', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านนอก', size: 'M', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านของใคร', size: 'M', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านอะไรก็ไม่รู้', size: 'M', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้านบ้าน', size: 'L', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้าน Pure', size: 'L', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้าน Dota', size: 'L', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้าน LOL', size: 'XL', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้าน ROV', size: 'XL', imgUrl: profilePicPlaceholderURL },
    { name: 'บ้าน ggez', size: 'XL', imgUrl: profilePicPlaceholderURL },
];

const BaanChoosing = () => {
    const bgStyle: string =
        'bg-black/20 backdrop-blur-sm mt-3 mb-1 mr-none p-auto py-8 px-12';
    const bottonStyle: string =
        'lg:mx-8 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';
    const textStyle: string =
        'bg-pink-400 w-fit lg:px-4 px-2 mr-6 lg:py-2 py-1 mb-12 rounded-lg lg:text-sm text-xs ring-8 ring-pink-400/30';
    const [input, setInput] = useState<string>('');
    interface selectedBaan {
        imageURL: string;
        size: string;
        name: string;
        num: number;
    }
    const images: selectedBaan[] = [
        {
            imageURL: profilePicPlaceholderURL,
            name: '',
            size: '',
            num: 1,
        },
        {
            imageURL: profilePicPlaceholderURL,
            name: '',
            size: '',
            num: 2,
        },
        {
            imageURL: profilePicPlaceholderURL,
            name: '',
            size: '',
            num: 3,
        },
    ];
    const useSelectedBaan: ReactNode = images.map((e: selectedBaan) => {
        return (
            <div
                key={e.num}
                className="flex flex-col lg:flex-row text-sm items-center"
            >
                <div
                    className={`h-20 w-20 bg-white my-3 mx-4 flex items-center justify-center ring-4 ring-pink-400`}
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
    const listAllBaan: ReactNode = testBaanData.map((e: testBaanObj) => {
        return (
            <div key={e.name} className="flex flex-col text-sm items-center">
                <div
                    className={`h-48 w-48 bg-white my-4 mx-4 flex items-center justify-center rounded-xl`}
                >
                    <Image
                        src={e.imgUrl}
                        alt={e.name}
                        width={48}
                        height={48}
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
            <div className="w-screen h-screen">
                <div className="text-xl font-ibm flex lg:flex-row flex-col text-white relative z-0 overflow-clip translate-y-20">
                    <div className="lg:ml-auto lg:mr-4">
                        <div className={`${bgStyle} rounded-3xl`}>
                            <h1 className="text-3xl lg:text-4xl font-bold relative z-0 leading-none select-none">
                                เลือกบ้าน
                            </h1>
                            <h2 className="text-xl lg:text-l my-3 relative z-0 leading-none select-none">
                                เลือก 3 บ้านที่สนใจมากที่สุด
                            </h2>
                            <div className="flex lg:flex-col justify-center items-center">
                                {useSelectedBaan}
                            </div>
                        </div>
                        <div className="lg:text-xl text-base flex items-center justify-center text-center">
                            <button
                                className={`${bottonStyle} bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
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
                    <div
                        className={`${bgStyle} rounded-3xl lg:mr-auto h-[32rem] lg:w-[52rem] overflow-scroll`}
                    >
                        <div className="flex items-center">
                            <div>
                                <Image
                                    src={Favicon}
                                    alt="logo"
                                    className="object-contain w-8 h-8 lg:w-12 lg:h-12 mr-4"
                                />
                            </div>
                            <form className="lg:w-full overflow-hidden w-full">
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
                                    className="px-4 py-1 text-sm bg-pink-800 placeholder-white w-full rounded-xl lg:text-2xl"
                                />
                            </form>
                        </div>
                        <div
                            className={`flex flex-row mt-12 lg:px-4 lg:py-4 h-auto lg:overflow-scroll`}
                        >
                            <div className={textStyle}>
                                <button
                                    onClick={() => console.log('S clicked')}
                                >
                                    บ้านขนาดเล็ก (S)
                                </button>
                            </div>
                            <div className={textStyle}>
                                <button
                                    onClick={() => console.log('M clicked')}
                                >
                                    บ้านขนาดกลาง (M)
                                </button>
                            </div>
                            <div className={textStyle}>
                                <button
                                    onClick={() => console.log('L clicked')}
                                >
                                    บ้านขนาดใหญ่ (L)
                                </button>
                            </div>
                            <div className={textStyle}>
                                <button
                                    onClick={() => console.log('XL clicked')}
                                >
                                    บ้านขนาดใหญ่พิเศษ (XL)
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:px-4 lg:py-4 h-auto flex-wrap">
                            {listAllBaan}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BaanChoosing;
