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
}

export interface IBaan extends IShortBaan {
    size: BaanSize;
    description: string;
    facebook: string;
    facebookUrl: string;
    igUrl: string;
    ig: string;
}
