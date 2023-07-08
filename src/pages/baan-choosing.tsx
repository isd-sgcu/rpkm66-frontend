import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BannSelection = () => {
    interface selectedBaan {
        imageURL: string;
        size: string;
        name: string;
    }
    const profilePicPlaceholderURL = '/images/pfp-placeholder.svg';
    const image: selectedBaan[] = [
        {
            imageURL: profilePicPlaceholderURL,
            name: 'จงเลือกบ้าน',
            size: '',
        },
        {
            imageURL: profilePicPlaceholderURL,
            name: 'จงเลือกบ้าน',
            size: '',
        },
        {
            imageURL: profilePicPlaceholderURL,
            name: 'จงเลือกบ้าน',
            size: '',
        },
    ];
    const bgStyle: string =
        'bg-black/20 backdrop-blur-sm mt-3 mb-1 mr-none p-auto py-8 px-12';
    const bottonStyle: string =
        'lg:mx-8 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';
    return (
        <>
            <Navbar />
            <div className="w-screen h-screen">
                <div className="text-xl font-ibm flex lg:flex-row flex-col text-white relative z-0 overflow-clip translate-y-20">
                    <div className="lg:ml-auto lg:mr-4">
                        <div className={`${bgStyle} rounded-s-3xl`}>
                            <h1 className="text-3xl lg:text-4xl font-bold relative z-0 leading-none select-none">
                                เลือกบ้าน
                            </h1>
                            <h2 className="text-xl lg:text-l my-3 relative z-0 leading-none select-none">
                                เลือก 3 บ้านที่สนใจมากที่สุด
                            </h2>
                            <div className="flex lg:flex-col justify-center items-center">
                                {image.map((e: selectedBaan, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col lg:flex-row text-sm items-center"
                                        >
                                            <div
                                                className={`h-20 w-20 bg-white my-3 mx-4 flex items-center justify-center`}
                                            >
                                                <Image
                                                    src={e.imageURL}
                                                    alt={e.name}
                                                    width={20}
                                                    height={20}
                                                    className="fill"
                                                />
                                            </div>
                                            <p>
                                                {e.size == ''
                                                    ? 'จงเลือกบ้าน'
                                                    : `${e.size}: ${e.name}`}
                                            </p>
                                        </div>
                                    );
                                })}
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
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BannSelection;
