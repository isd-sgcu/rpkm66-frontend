import { ChangeEvent, ReactNode, useState } from 'react';
import { BaanSize, IBaan } from '@/types/baan';
import React from 'react';
import Image from 'next/image';
import {
    HomeIcon,
    MagnifyingGlassIcon,
    TrashIcon,
} from '@heroicons/react/24/solid';

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
    const convertSize: Map<BaanSize, string> = new Map<BaanSize, string>([
        //Convert Baansize type to string (Hope there are better ways)
        [BaanSize.Small, 'S'],
        [BaanSize.Medium, 'M'],
        [BaanSize.Large, 'L'],
        [BaanSize.ExtraLarge, 'XL'],
        [BaanSize.ExtraExtraLarge, 'XXL'],
    ]);
    interface SelectedBaan {
        //Interface for selected baans (3 baans)
        id: number;
        imageUrl: string;
        size: BaanSize;
        name: string;
        num: number;
    }
    const [selectedBaan, setSelectedBaan] = useState<SelectedBaan[]>([
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
    const usedSelectedBaan: ReactNode = selectedBaan.map((e: SelectedBaan) => {
        //Convert chosen baans to TSX (a bit messy, sry)
        return (
            <div
                key={e.num}
                className="flex flex-col items-center text-sm lg:flex-row"
                onDrop={(f) => handleDrop(f, e.num)} //Handle the event that user drag new Baan to the div => Go to line 349...
                onDragOver={(e) => e.preventDefault()}
            >
                <div
                    className={`mx-4 my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-white ring-2 ring-purple lg:h-24 lg:w-24`}
                >
                    <div className="absolute flex h-5 w-5 -translate-x-8 -translate-y-8 items-center justify-center rounded-md bg-purple text-white lg:h-7 lg:w-7 lg:-translate-x-9 lg:-translate-y-9">
                        <p>{e.num}</p>
                    </div>
                    {e.id === -1 ? (
                        <p className="text-gray-500">Null</p>
                    ) : (
                        <Image
                            src={e.imageUrl}
                            alt={e.name}
                            width={100}
                            height={100}
                            className="rounded-lg bg-black object-contain"
                        />
                    )}
                </div>
                {e.id === -1 ? (
                    <div className="flex w-[8.25rem] flex-col items-center justify-center lg:mx-3 lg:flex-row">
                        <p>ท่านยังไม่ได้เลือกบ้าน</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center lg:flex-row">
                        <p className="mx-3 mb-3 lg:mb-0 lg:w-28">{`${
                            e.name
                        } (${convertSize.get(e.size)})`}</p>
                        <button //Event when clicking on the trash button
                            onClick={() => {
                                const resetBaan: SelectedBaan[] = [
                                    ...selectedBaan,
                                ]; //Copy the data from the selected-baan
                                resetBaan[e.num - 1] = {
                                    //Clear the data inside the index to default
                                    ...resetBaan[e.num - 1],
                                    name: '',
                                    size: BaanSize._,
                                    imageUrl: '',
                                    id: -1,
                                };
                                setSelectedBaan(resetBaan);
                            }}
                        >
                            <TrashIcon width={20} height={20} />
                        </button>
                    </div>
                )}
            </div>
        );
    });
    const isAdded = (other: IBaan) => {
        //Check if the baan is selected and will not visualize in Baan list
        for (let i: number = 0; i < 3; i++) {
            if (selectedBaan[i].id === other.id) return false;
        }
        return true;
    };
    const listBaan: ReactNode = baan //convert list of all Baans in RPKM to TSX
        .filter((e) => e.name.includes(input) && isAdded(e)) //Filter when typing the search bar
        .map((e: IBaan) => {
            return (
                <div
                    key={e.name}
                    className="text-md flex flex-col items-center"
                >
                    <div
                        className={`mx-4 my-4 flex h-32 w-32 items-center justify-center rounded-xl bg-white ring-4 ring-purple lg:h-40 lg:w-40 min-[1600px]:h-56 min-[1600px]:w-56`}
                        draggable
                        onDragStart={(event) =>
                            event.dataTransfer.setData(
                                'Data',
                                JSON.stringify(e)
                            )
                        } //Handle dragging event
                    >
                        <Image
                            src={e.imageUrl}
                            alt={e.name}
                            width={300}
                            height={300}
                            className="rounded-xl bg-black object-contain"
                        />
                    </div>
                    <p>{`${e.name} (${convertSize.get(e.size)})`}</p>
                </div>
            );
        });
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
        const widget: SelectedBaan = JSON.parse(
            //Convert JSON string to SelectedBaan
            e.dataTransfer.getData('Data') as string
        );
        const data: SelectedBaan[] = [...selectedBaan];
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
                        {usedSelectedBaan}
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
                        {listBaan}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanChoosing;
