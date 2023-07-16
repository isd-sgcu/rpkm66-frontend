import { BaanSize } from '@/types/baan';

export interface ShortBaanDTO {
    id: number;
    name_en: string;
    name_th: string;
    image_url: string;
}

export interface BaanDTO extends ShortBaanDTO {
    size: BaanSize;
    descriptionEN: string;
    descriptionTH: string;
    facebook: string;
    facebookUrl: string;
    instagram: string;
    instagramUrl: string;
    line: string;
    lineUrl: string;
}
