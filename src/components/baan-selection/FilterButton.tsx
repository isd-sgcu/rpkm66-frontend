import { BaanSize } from '@/types/baan';

interface FilterButtonProps {
    filter: BaanSize;
    filterBaan: (f: BaanSize) => void;
}

const FilterButton = (props: FilterButtonProps) => {
    return (
        <div className="flex w-full flex-wrap gap-6 py-8">
            <button
                className={`${
                    props.filter === BaanSize.Small && 'ring-8 ring-pink-400/50'
                } w-fit whitespace-nowrap rounded-lg bg-pink-400 px-2 py-1 text-xs ring-4 ring-pink-400/30 transition-all duration-300 ease-in-out hover:ring-8 lg:px-4 lg:py-2 lg:text-sm`}
                onClick={() => props.filterBaan(BaanSize.Small)}
            >
                บ้านขนาดเล็ก (S)
            </button>
            <button
                className={`${
                    props.filter === BaanSize.Medium &&
                    'ring-8 ring-pink-400/50'
                } w-fit whitespace-nowrap rounded-lg bg-pink-400 px-2 py-1 text-xs ring-4 ring-pink-400/30 transition-all duration-300 ease-in-out hover:ring-8 lg:px-4 lg:py-2 lg:text-sm`}
                onClick={() => props.filterBaan(BaanSize.Medium)}
            >
                บ้านขนาดกลาง (M)
            </button>
            <button
                className={`${
                    props.filter === BaanSize.Large && 'ring-8 ring-pink-400/50'
                } w-fit whitespace-nowrap rounded-lg bg-pink-400 px-2 py-1 text-xs ring-4 ring-pink-400/30 transition-all duration-300 ease-in-out hover:ring-8 lg:px-4 lg:py-2 lg:text-sm`}
                onClick={() => props.filterBaan(BaanSize.Large)}
            >
                บ้านขนาดใหญ่ (L)
            </button>
            <button
                className={`${
                    props.filter === BaanSize.ExtraLarge &&
                    'ring-8 ring-pink-400/50'
                } w-fit whitespace-nowrap rounded-lg bg-pink-400 px-2 py-1 text-xs ring-4 ring-pink-400/30 transition-all duration-300 ease-in-out hover:ring-8 lg:px-4 lg:py-2 lg:text-sm`}
                onClick={() => props.filterBaan(BaanSize.ExtraLarge)}
            >
                บ้านขนาดใหญ่พิเศษ (XL)
            </button>
            <button
                className={`${
                    props.filter === BaanSize.ExtraExtraLarge &&
                    'ring-8 ring-pink-400/50'
                } w-fit whitespace-nowrap rounded-lg bg-pink-400 px-2 py-1 text-xs ring-4 ring-pink-400/30 transition-all duration-300 ease-in-out hover:ring-8 lg:px-4 lg:py-2 lg:text-sm`}
                onClick={() => props.filterBaan(BaanSize.ExtraExtraLarge)}
            >
                บ้านขนาดใหญ่พิเศษพิเศษ (XXL)
            </button>
        </div>
    );
};

export default FilterButton;
