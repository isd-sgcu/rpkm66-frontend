import { BaanSize, IBaan } from '@/types/baan';
import { SelectedBaan } from './types';

export const isAdded = (selectedBaan: SelectedBaan[], other: IBaan) => {
    //Check if the baan is selected and will not be visualized in Baan list
    for (let i: number = 0; i < 3; i++) {
        if (selectedBaan[i].id === other.id) return false;
    }
    return true;
};

export const convertSize: Map<BaanSize, string> = new Map<BaanSize, string>([
    //Convert Baansize type to string (Hope there are better ways)
    [BaanSize.Small, 'S'],
    [BaanSize.Medium, 'M'],
    [BaanSize.Large, 'L'],
    [BaanSize.ExtraLarge, 'XL'],
    [BaanSize.ExtraExtraLarge, 'XXL'],
]);
