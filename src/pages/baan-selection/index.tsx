import React, { useState } from 'react';
import SelectedBaan from '@/components/baan-selection/SelectedBaan';
import ListBaan from '@/components/baan-selection/ListBaan';
import { BaanSize, IBaan } from '@/types/baan';
import { SelectedBaanRank } from '@/utils/baan-selection/types';
import { testBaanData } from '@/utils/baan-selection/testData';
import FilterButton from '@/components/baan-selection/FilterButton';
import SearchBar from '@/components/baan-selection/SearchBar';

const BaanChoosing = () => {
    const [input, setInput] = useState<string>(''); //Input in search-baan bar
    const [filter, setFilter] = useState<BaanSize>(BaanSize._); //Check if the baan size filter is activated in which button
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
        setBaan(testBaanData);
        if (filter == f) setFilter(BaanSize._);
        else {
            setFilter(f);
            setBaan(testBaanData.filter((e: IBaan) => e.size == f));
        }
    };

    const handleDrop = (e: React.DragEvent, n: number) => {
        if (selectedBaan[n - 1].id !== -1) return;
        const widget: SelectedBaanRank = JSON.parse(
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
        <div className="flex min-h-screen w-full items-center justify-center px-6 py-24">
            <div className="flex min-h-max w-full flex-col justify-center xl:flex-row">
                <div className="flex w-full flex-col items-start gap-2 border bg-white px-8 py-10 text-purple-400 max-xl:rounded-t-3xl xl:w-fit xl:items-start xl:justify-center xl:rounded-l-3xl">
                    <h1 className="select-none text-3xl font-bold xl:text-5xl">
                        เลือกบ้าน
                    </h1>
                    <h2 className="select-none text-xl">
                        เลือก 3 บ้านที่สนใจมากที่สุด
                    </h2>
                    <div className="flex w-full flex-wrap justify-between gap-4 xl:flex-col">
                        {selectedBaan.map(
                            (e: SelectedBaanRank, index: number) => {
                                return (
                                    <SelectedBaan
                                        key={e.num}
                                        handleDrop={(
                                            e: React.DragEvent<Element>
                                        ) => handleDrop(e, index + 1)}
                                        setSelectedBaan={setSelectedBaan}
                                        {...e}
                                        baan={selectedBaan}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
                <div className="flex h-full w-full flex-col border bg-black/50 p-8 backdrop-blur-sm max-xl:rounded-b-3xl xl:w-3/5 xl:rounded-r-3xl">
                    <div className="flex items-center gap-2">
                        <h1 className="flex w-32 items-center justify-center text-lg lg:text-2xl">
                            ค้นหาบ้าน
                        </h1>
                        <SearchBar input={input} setInput={setInput} />
                    </div>
                    <FilterButton filter={filter} filterBaan={filterBaan} />
                    <div className="grid w-full grid-flow-row auto-rows-auto grid-cols-1 gap-8 rounded-3xl bg-white p-4 text-purple-400 ring-8 ring-white/40 sm:grid-cols-2 md:grid-cols-4 xl:h-96 xl:overflow-y-auto">
                        <ListBaan
                            baan={baan}
                            selectedBaan={selectedBaan}
                            input={input}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaanChoosing;
