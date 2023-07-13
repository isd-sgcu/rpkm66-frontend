import Image from 'next/image';
import { convertSize, isAdded } from '@/utils/baan-selection/utility';
import { IBaan } from '@/types/baan';
const ListBaan = (props: any) => {
    return props.baan
        .filter(
            (e: IBaan) =>
                e.name.includes(props.input) && isAdded(props.selectedBaan, e)
        ) //Filter when typing the search bar
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
};

export default ListBaan;
