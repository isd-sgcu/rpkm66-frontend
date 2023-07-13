import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import { SelectedBaanRank } from '../hooks/types';
import Image from 'next/image';
import { BaanSize } from '@/types/baan';
import { convertSize } from '../hooks/utility';
const SelectedBaan = (props: any) => {
    return (
        <div
            key={props.num}
            className="flex flex-col items-center text-sm lg:flex-row"
            onDrop={props.handleDrop} //Handle the event that user drag new Baan to the div => Go to line 349...
            onDragOver={(e) => e.preventDefault()}
        >
            <div
                className={`mx-4 my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-white ring-2 ring-purple lg:h-24 lg:w-24`}
            >
                <div className="absolute flex h-5 w-5 -translate-x-8 -translate-y-8 items-center justify-center rounded-md bg-purple text-white lg:h-7 lg:w-7 lg:-translate-x-9 lg:-translate-y-9">
                    <p>{props.num}</p>
                </div>
                {props.id === -1 ? (
                    <p className="text-gray-500">Null</p>
                ) : (
                    <Image
                        src={props.imageUrl}
                        alt={props.name}
                        width={100}
                        height={100}
                        className="rounded-lg bg-black object-contain"
                    />
                )}
            </div>
            {props.id === -1 ? (
                <div className="flex w-[8.25rem] flex-col items-center justify-center lg:mx-3 lg:flex-row">
                    <p>ท่านยังไม่ได้เลือกบ้าน</p>
                </div>
            ) : (
                <div className="flex flex-col items-center lg:flex-row">
                    <p className="mx-3 mb-3 lg:mb-0 lg:w-28">{`${
                        props.name
                    } (${convertSize.get(props.size)})`}</p>
                    <button //Event when clicking on the trash button
                        onClick={() => {
                            const resetBaan: SelectedBaanRank[] = [
                                ...props.baan,
                            ]; //Copy the data from the selected-baan
                            resetBaan[props.num - 1] = {
                                //Clear the data inside the index to default
                                ...resetBaan[props.num - 1],
                                name: '',
                                size: BaanSize._,
                                imageUrl: '',
                                id: -1,
                            };
                            props.setSelectedBaan(resetBaan);
                            // setSelectedBaan(resetBaan);
                        }}
                    >
                        <TrashIcon width={20} height={20} />
                    </button>
                </div>
            )}
        </div>
    );
};
export default SelectedBaan;
