import { BaanSize, IShortBaan } from '@/types/baan';

export interface SelectedBaanRank extends IShortBaan {
    //Interface for selected baans (3 baans)
    size: BaanSize;
    num: number;
}
