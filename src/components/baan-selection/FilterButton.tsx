import { BaanSize } from '@/types/baan';

const FilterButton = (props: any) => {
    return (
        <div className="mt-8 flex overflow-scroll px-2 py-2 lg:px-4 lg:py-4">
            <button
                className={`${props.toggleColor[0]} select-size-button whitespace-nowrap`}
                onClick={() => props.filterBaan(BaanSize.Small, 0)}
            >
                บ้านขนาดเล็ก (S)
            </button>
            <button
                className={`${props.toggleColor[1]} select-size-button whitespace-nowrap`}
                onClick={() => props.filterBaan(BaanSize.Medium, 1)}
            >
                บ้านขนาดกลาง (M)
            </button>
            <button
                className={`${props.toggleColor[2]} select-size-button whitespace-nowrap`}
                onClick={() => props.filterBaan(BaanSize.Large, 2)}
            >
                บ้านขนาดใหญ่ (L)
            </button>
            <button
                className={`${props.toggleColor[3]} select-size-button whitespace-nowrap`}
                onClick={() => props.filterBaan(BaanSize.ExtraLarge, 3)}
            >
                บ้านขนาดใหญ่พิเศษ (XL)
            </button>
            <button
                className={`${props.toggleColor[4]} select-size-button whitespace-nowrap`}
                onClick={() => props.filterBaan(BaanSize.ExtraExtraLarge, 4)}
            >
                บ้านขนาดใหญ่พิเศษพิเศษ (XXL)
            </button>
        </div>
    );
};

export default FilterButton;
