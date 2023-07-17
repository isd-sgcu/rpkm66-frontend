/* eslint-disable */

export enum BaanSize {
    _,
    Small,
    Medium,
    Large,
    ExtraLarge,
    ExtraExtraLarge,
}

export interface IShortBaan {
    id: string;
    name: string;
    imageUrl: string;
    size: BaanSize;
}

export interface IBaan extends IShortBaan {
    description: string;
    facebook: string;
    facebookUrl: string;
    igUrl: string;
    ig: string;
}
