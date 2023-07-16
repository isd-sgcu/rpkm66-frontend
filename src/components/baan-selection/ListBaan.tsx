import Image from 'next/image';
import { convertSize, isAdded } from '@/utils/baan-selection/utility';
import { IBaan } from '@/types/baan';
const ListBaan = (props: any) => {
    return props.baan
        .filter(
            (e: IBaan) =>
                e.name.includes(props.input) && isAdded(props.selectedBaan, e)
        )
        .map((e: IBaan) => {
            return (
                <div
                    key={e.name}
                    className="text-md mx-auto flex h-min w-min flex-col items-center gap-2"
                >
                    <div
                        className="relative aspect-square w-36 max-w-full items-center justify-center overflow-clip rounded-xl bg-white ring-4 ring-purple-400"
                        draggable
                        onDragStart={(event) =>
                            event.dataTransfer.setData(
                                'Data',
                                JSON.stringify(e)
                            )
                        }
                    >
                        <Image src={e.imageUrl} alt={e.name} fill />
                    </div>
                    <p>
                        {e.name} ({convertSize.get(e.size)})
                    </p>
                </div>
            );
        });
};

export default ListBaan;
