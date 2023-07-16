import { useEffect, useState, DragEvent } from 'react';
import SelectedBaan from '@/components/baan-selection/SelectedBaan';
import ListBaan from '@/components/baan-selection/ListBaan';
import { BaanSize, IBaan } from '@/types/baan';
import { SelectedBaanRank } from '@/utils/baan-selection/types';
import FilterButton from '@/components/baan-selection/FilterButton';
import SearchBar from '@/components/baan-selection/SearchBar';
import { httpGet } from '@/utils/axios';
import { BaanDTO } from '@/dto/baanDTO';
import { transformBaanDTOtoIBaan } from '@/utils/baan';
import { useRouter } from 'next/router';

function useAllBaans() {
    const [allBaans, setAllBaans] = useState<IBaan[]>([]);
    const { locale } = useRouter();

    useEffect(() => {
        async function fetchBaans() {
            const { data } = await httpGet<BaanDTO[]>('/baan');
            setAllBaans(
                data.map((baan) =>
                    transformBaanDTOtoIBaan(
                        baan,
                        (locale?.toUpperCase() as 'TH' | 'EN') || 'TH'
                    )
                )
            );
        }

        fetchBaans();
    }, [locale]);

    return allBaans;
}

const BaanChoosing = () => {
    const [input, setInput] = useState<string>(''); //Input in search-baan bar
    const [fill, setFill] = useState<BaanSize>(BaanSize._); //Check if the baan size filter is activated in which button
    const [toggleColor, setToggleColor] = useState<string[]>([
        //Set the style of the filter button
        'unclicked-size-button',
        'unclicked-size-button',
        'unclicked-size-button',
        'unclicked-size-button',
        'unclicked-size-button',
    ]);

    //The list of every baans in RPKM...
    const allBaans = useAllBaans();
    const [baan, setBaan] = useState<IBaan[]>([]);

    useEffect(() => {
        setBaan(allBaans);
    }, [allBaans]);

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
        setBaan(allBaans); //Reset the data in Baan
        const toToggle: string[] = [
            //Reset data in toggle
            'unclicked-size-button',
            'unclicked-size-button',
            'unclicked-size-button',
            'unclicked-size-button',
            'unclicked-size-button',
        ];
        if (fill == f) setFill(BaanSize._);
        //If clicking on the same button, reset to default filter (every baan)
        else {
            setFill(f);
            setBaan(allBaans.filter((e: IBaan) => e.size == f)); //Filter baan by size button and change the button color
            toToggle[n] =
                'bg-red-500 ring-pink-200/30 transition-all duration-300';
        }
        setToggleColor(toToggle);
    };
    const handleDrop = (e: DragEvent, n: number) => {
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
                        {selectedBaan.map(
                            (e: SelectedBaanRank, index: number) => {
                                return (
                                    <SelectedBaan
                                        key={e.num}
                                        handleDrop={(e: DragEvent<Element>) =>
                                            handleDrop(e, index + 1)
                                        }
                                        setSelectedBaan={setSelectedBaan}
                                        {...e}
                                        baan={selectedBaan}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
                <div className="lg:mb-none p-auto mx-12 mb-6 h-auto border bg-black/50 px-8 py-8 backdrop-blur-sm max-lg:rounded-b-3xl lg:mx-0 lg:mr-auto lg:h-[34rem] lg:w-3/5 lg:rounded-r-3xl min-[1600px]:h-[44rem]">
                    <div className="flex items-center">
                        <div className="mr-2 flex w-32 items-center justify-center">
                            <h1 className="text-lg lg:text-2xl">ค้นหาบ้าน</h1>
                        </div>
                        <SearchBar input={input} setInput={setInput} />
                    </div>
                    <FilterButton
                        toggleColor={toggleColor}
                        filterBaan={filterBaan}
                    />
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
