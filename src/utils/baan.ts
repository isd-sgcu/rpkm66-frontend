import { BaanDTO } from '@/dto/baanDTO';
import { IBaan } from '@/types/baan';

export function transformBaanDTOtoIBaan(
    baan: BaanDTO,
    locale: 'TH' | 'EN'
): IBaan {
    return {
        id: baan.id,
        name: locale === 'EN' ? baan.name_en : baan.name_th,
        imageUrl: baan.image_url,
        size: baan.size,
        description:
            locale === 'EN' ? baan.description_en : baan.description_th,
        facebook: baan.facebook,
        facebookUrl: baan.facebook_url,
        ig: baan.instagram,
        igUrl: baan.instagram_url,
    };
}
