import { BaanSize } from '@/types/baan';

export interface ShortBaanDTO {
    id: string;
    name_en: string;
    name_th: string;
    image_url: string;
    baan_size: BaanSize;
}

export interface BaanDTO extends Omit<ShortBaanDTO, 'baan_size'> {
    size: BaanSize;
    description_en: string;
    description_th: string;
    facebook: string;
    facebook_url: string;
    instagram: string;
    instagram_url: string;
    line: string;
    line_url: string;
}
