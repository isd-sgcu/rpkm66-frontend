import React, { ChangeEvent, useState } from 'react';
import SelectedBaan from './components/SelectedBaan';
import ListBaan from './components/ListBaan';
import { BaanSize, IBaan } from '@/types/baan';
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { SelectedBaanRank } from './hooks/types';

const picTest1: string = '/images/rocket.svg'; //Pictures for testing...

const testBaanData: IBaan[] = [
    //Test Data
    {
        id: 0,
        name: 'บ้านทรายทอง',
        size: BaanSize.Small,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 1,
        name: 'บ้านนี้มีรัก',
        size: BaanSize.Small,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 2,
        name: 'บ้านและสวน',
        size: BaanSize.Small,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 3,
        name: 'บ้านนอก',
        size: BaanSize.Small,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 4,
        name: 'บ้านของใคร',
        size: BaanSize.Medium,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 5,
        name: 'บ้านอะไรก็ไม่รู้',
        size: BaanSize.Medium,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 6,
        name: 'บ้านบ้าน',
        size: BaanSize.Large,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 7,
        name: 'บ้าน Pure',
        size: BaanSize.Large,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 8,
        name: 'บ้าน Dota',
        size: BaanSize.Large,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 9,
        name: 'บ้าน LOL',
        size: BaanSize.ExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 10,
        name: 'บ้าน ROV',
        size: BaanSize.ExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 11,
        name: 'บ้าน ggez',
        size: BaanSize.ExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 12,
        name: 'บ้าน HON',
        size: BaanSize.ExtraExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 13,
        name: 'บ้าน F',
        size: BaanSize.ExtraExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
    {
        id: 14,
        name: 'บ้าน U  ',
        size: BaanSize.ExtraExtraLarge,
        imageUrl: picTest1,
        description: '',
        facebook: '',
        ig: '',
        igUrl: '',
        facebookUrl: '',
    },
];

const BaanChoosing = () => {
    const [input, setInput] = useState<string>(''); //Input in search-baan bar
    const [fill, setFill] = useState<BaanSize>(BaanSize._); //Check if the baan size filter is activated in which button
    const [toggleColor, setToggleColor] = useState<string[]>([
        //Set the style of the filter button
        'unClickedSizeButton',
        'unClickedSizeButton',
        'unClickedSizeButton',
        'unClickedSizeButton',
        'unClickedSizeButton',
    ]);
    const [baan, setBaan] = useState<IBaan[]>(testBaanData); //The list of every baans in RPKM...
    const [selectedBaan, setSelectedBaan] = useState<SelectedBaanRank[]>([
        //Baans that the user chooses
        {
            id: -1,
            imageUrl: '',
            name: '',
            size: BaanSize._,
            num: 1,
        },
        {
            id: -1,
            imageUrl: '',
            name: '',
            size: BaanSize._,
            num: 2,
        },
        {
            id: -1,
            imageUrl: '',
            name: '',
            size: BaanSize._,
            num: 3,
        },
    ]);

    const filterBaan = (f: BaanSize, n: number) => {
        //Handle when clicking on the filter button by size
        setBaan(testBaanData); //Reset the data in Baan
        const toToggle: string[] = [
            //Reset data in toggle
            'unClickedSizeButton',
            'unClickedSizeButton',
            'unClickedSizeButton',
            'unClickedSizeButton',
            'unClickedSizeButton',
        ];
        if (fill == f) setFill(BaanSize._);
        //If clicking on the same button, reset to default filter (every baan)
        else {
            setFill(f);
            setBaan(testBaanData.filter((e: IBaan) => e.size == f)); //Filter baan by size button and change the button color
            toToggle[n] =
                'bg-red-500 ring-pink-200/30 transition-all duration-300';
        }
        setToggleColor(toToggle);
    };
    const handleDrop = (e: React.DragEvent, n: number) => {
        //Handle event when dragging
        if (selectedBaan[n - 1].id !== -1) return; //If there is already a data in the div (not null), exit function
        const widget: SelectedBaanRank = JSON.parse(
            //Convert JSON string to SelectedBaanRank
            e.dataTransfer.getData('Data') as string
        );
        const data: SelectedBaanRank[] = [...selectedBaan];
        data[n - 1] = {
            ...data[n - 1],
            name: widget.name,
            size: widget.size,
            imageUrl: widget.imageUrl,
            id: widget.id,
        };
        setSelectedBaan(data);
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
                    <div className="mx-auto flex h-full flex-wrap items-start justify-evenly max-[570px]:flex-col lg:flex-col">
                        <SelectedBaan
                            baan={selectedBaan}
                            handleDrop={(e: React.DragEvent<Element>) =>
                                handleDrop(e, 2)
                            }
                            setSelectedBaan={setSelectedBaan}
                        />
                    </div>
                </div>
                <div className="lg:mb-none p-auto mx-12 mb-6 h-auto border bg-black/50 px-8 py-8 backdrop-blur-sm max-lg:rounded-b-3xl lg:mx-0 lg:mr-auto lg:h-[34rem] lg:w-3/5 lg:rounded-r-3xl min-[1600px]:h-[44rem]">
                    <div className="flex items-center">
                        <div className="mr-2 flex w-32 items-center justify-center">
                            <h1 className="text-lg lg:text-2xl">ค้นหาบ้าน</h1>
                        </div>
                        <form className="w-full text-black lg:w-full">
                            <label htmlFor="search">
                                <MagnifyingGlassIcon className="absolute h-5 w-5 translate-x-3 translate-y-[0.22rem] object-contain lg:h-6 lg:w-6 lg:translate-y-[0.35rem]" />
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
                                className="w-full rounded-3xl bg-white py-1 pl-11 pr-4 text-sm ring-8 ring-white/20 max-[400px]:placeholder-white lg:text-lg"
                            />
                            <button>
                                <HomeIcon
                                    color="#E95682D6"
                                    className="absolute -translate-x-8 -translate-y-[0.90rem] object-contain max-lg:h-5 max-lg:w-5 lg:-translate-x-11 lg:-translate-y-[1.3rem]"
                                />
                            </button>
                        </form>
                    </div>
                    <div className="mt-8 flex overflow-scroll px-2 py-2 lg:px-4 lg:py-4">
                        <button
                            className={`${toggleColor[0]} selectSizeButton whitespace-nowrap`}
                            onClick={() => filterBaan(BaanSize.Small, 0)}
                        >
                            บ้านขนาดเล็ก (S)
                        </button>
                        <button
                            className={`${toggleColor[1]} selectSizeButton whitespace-nowrap`}
                            onClick={() => filterBaan(BaanSize.Medium, 1)}
                        >
                            บ้านขนาดกลาง (M)
                        </button>
                        <button
                            className={`${toggleColor[2]} selectSizeButton whitespace-nowrap`}
                            onClick={() => filterBaan(BaanSize.Large, 2)}
                        >
                            บ้านขนาดใหญ่ (L)
                        </button>
                        <button
                            className={`${toggleColor[3]} selectSizeButton whitespace-nowrap`}
                            onClick={() => filterBaan(BaanSize.ExtraLarge, 3)}
                        >
                            บ้านขนาดใหญ่พิเศษ (XL)
                        </button>
                        <button
                            className={`${toggleColor[4]} selectSizeButton whitespace-nowrap`}
                            onClick={() =>
                                filterBaan(BaanSize.ExtraExtraLarge, 4)
                            }
                        >
                            บ้านขนาดใหญ่พิเศษพิเศษ (XXL)
                        </button>
                    </div>
                    <div className="mx-4 mb-20 mt-6 flex flex-wrap items-center justify-evenly rounded-3xl bg-white text-black ring-8 ring-white/40 lg:mb-0 lg:mt-3 lg:h-[20rem] lg:overflow-y-scroll lg:py-4 min-[1600px]:h-[30rem]">
                        <ListBaan
                            baan={baan}
                            selectedBaan={selectedBaan}
                            input={input}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanChoosing;
