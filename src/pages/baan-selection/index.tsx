import { useEffect, useState, DragEvent } from 'react';
import SelectedBaan from '@/components/baan-selection/SelectedBaan';
import ListBaan from '@/components/baan-selection/ListBaan';
import { BaanSize, IBaan, IShortBaan } from '@/types/baan';
import { SelectedBaanRank } from '@/utils/baan-selection/types';
import FilterButton from '@/components/baan-selection/FilterButton';
import SearchBar from '@/components/baan-selection/SearchBar';
import { httpGet, httpPut } from '@/utils/axios';
import { BaanDTO } from '@/dto/baanDTO';
import { transformBaanDTOtoIBaan } from '@/utils/baan';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/Toast';
import Button from '@/components/Button';

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
    const { group } = useAuth();
    const router = useRouter();
    const toast = useToast();

    const [input, setInput] = useState<string>(''); //Input in search-baan bar
    const [filter, setFilter] = useState<BaanSize>(BaanSize._); //Check if the baan size filter is activated in which button

    const allBaans = useAllBaans();
    const [baan, setBaan] = useState<IBaan[]>([]); //The list of every baans in RPKM...

    useEffect(() => {
        setBaan(allBaans);
        if (group?.baans) {
            const gBaans = (group?.baans ?? []).map(
                (baan, index) =>
                    ({
                        id: baan.id,
                        name: baan.name,
                        imageUrl: baan.imageUrl,
                        size:
                            {
                                S: BaanSize.Small,
                                M: BaanSize.Medium,
                                L: BaanSize.Large,
                                XL: BaanSize.ExtraLarge,
                                XXL: BaanSize.ExtraExtraLarge,
                            }[baan.size as unknown as string] ?? BaanSize._,
                        num: index + 1,
                    } satisfies IShortBaan & { num: number })
            );

            while (gBaans.length < 3) {
                gBaans.push({
                    id: '',
                    name: '',
                    imageUrl: '',
                    size: BaanSize._,
                    num: gBaans.length + 1,
                });
            }

            setSelectedBaan(gBaans);
        }
    }, [allBaans, group?.baans]);

    const [selectedBaan, setSelectedBaan] = useState<SelectedBaanRank[]>(
        Array.from({ length: 3 }, (_, index) => ({
            id: '',
            imageUrl: '',
            name: '',
            size: BaanSize._,
            num: index + 1,
        }))
    );

    const filterBaan = (f: BaanSize) => {
        setBaan(allBaans);
        if (filter == f) setFilter(BaanSize._);
        else {
            setFilter(f);
            setBaan(allBaans.filter((e: IBaan) => e.size == f));
        }
    };

    const handleClick = (e: IBaan) => {
        let isSuccessFul = false;
        const data: SelectedBaanRank[] = [...selectedBaan];
        data.forEach((element) => {
            if (element.id === '' && !isSuccessFul) {
                element.id = e.id;
                element.imageUrl = e.imageUrl;
                element.name = e.name;
                element.size = e.size;
                isSuccessFul = true;
                return;
            }
        });
        if (!isSuccessFul) {
            toast?.setToast('error', 'คุณเลือกบ้านครบแล้ว');
            return;
        }
        setSelectedBaan(data);
    };

    const handleDrop = (e: DragEvent, n: number) => {
        if (selectedBaan[n - 1].id !== '') return;
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

                    {/* แก้ button */}
                    <Button
                        additionalStyle="rounded-lg bg-pink-400 mt-6 ring-4 ring-pink-400/30 text-xl disabled:bg-pink-300 disabled:ring-4"
                        content={<>บันทึกการเลือก </>}
                        onClick={async () => {
                            const { status } = await httpPut('/group/select', {
                                baans: selectedBaan.map((e) => e.id),
                            });

                            if (status === 200) {
                                router.push('/profile');
                            }
                        }}
                        disabled={selectedBaan.some((b) => b.id === '')}
                    />
                </div>
                <div className="flex min-h-full w-full flex-col border bg-black/50 p-8 backdrop-blur-sm max-xl:rounded-b-3xl xl:w-3/5 xl:rounded-r-3xl">
                    <div className="flex items-center gap-2">
                        <h1 className="flex w-32 items-center justify-center text-lg lg:text-2xl">
                            ค้นหาบ้าน
                        </h1>
                        <SearchBar input={input} setInput={setInput} />
                    </div>
                    <FilterButton filter={filter} filterBaan={filterBaan} />
                    <div className="grid h-full w-full grid-flow-row auto-rows-auto grid-cols-1 gap-8 rounded-3xl bg-white p-4 text-purple-400 ring-8 ring-white/40 sm:grid-cols-2 md:grid-cols-4 xl:overflow-y-auto">
                        <ListBaan
                            baan={baan}
                            selectedBaan={selectedBaan}
                            input={input}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaanChoosing;
