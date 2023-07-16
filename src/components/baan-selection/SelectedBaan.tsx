import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import { SelectedBaanRank } from '@/utils/baan-selection/types';
import Image from 'next/image';
import { BaanSize } from '@/types/baan';
import { convertSize } from '@/utils/baan-selection/utility';
const SelectedBaan = (props: any) => {
    return (
        <div
            key={props.num}
            className="flex flex-col items-center gap-2 text-sm text-purple-400 lg:flex-row"
            onDrop={props.handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="relative flex aspect-square w-32 max-w-full items-center justify-center overflow-clip rounded-lg border-2 border-purple-400 bg-white">
                <p className="text-md absolute left-0 top-0 z-10 flex h-7 items-center justify-center rounded-br-lg bg-purple-400 px-2 font-bold leading-none text-white lg:h-7 lg:text-lg">
                    {props.num}
                </p>
                {props.id === -1 ? (
                    <p className="text-gray-500">Null</p>
                ) : (
                    <Image src={props.imageUrl} alt={props.name} fill />
                )}
            </div>
            {props.id === -1 ? (
                <p>ท่านยังไม่ได้เลือกบ้าน</p>
            ) : (
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                    <p>{`${props.name} (${convertSize.get(props.size)})`}</p>
                    <button
                        onClick={() => {
                            const resetBaan: SelectedBaanRank[] = [
                                ...props.baan,
                            ];
                            resetBaan[props.num - 1] = {
                                ...resetBaan[props.num - 1],
                                name: '',
                                size: BaanSize._,
                                imageUrl: '',
                                id: '',
                            };
                            props.setSelectedBaan(resetBaan);
                        }}
                    >
                        <TrashIcon className="w-5 hover:opacity-70" />
                    </button>
                </div>
            )}
        </div>
    );
};
export default SelectedBaan;
