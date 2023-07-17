import { IShortUser } from '@/types/user';
import { ShortBaanDTO } from './baanDTO';

export interface Member {
    title: string;
    firstname: string;
    lastname: string;
    nickname: string;
    image_url: string;
}

export interface GroupDTO {
    id: string;
    leader_id: string;
    members: IShortUser[];
    baans: ShortBaanDTO[];
    token: string;
}

export interface GroupPublicDTO {
    id: string;
    token: string;
    leader: IShortUser;
}
