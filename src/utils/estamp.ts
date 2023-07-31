import { UserEstampEvent } from '@/types/estamp';
import { httpGet, httpPost } from './axios';

export const stampPiecePicture: UserEstampEvent[] = [
    {
        stamp: {
            id: 'E-Stamp-01',
            name: 'Event 1',
            info: 'Event 1',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        stamp: {
            id: 'E-Stamp-02',
            name: 'Event 2',
            info: 'Event 2',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        stamp: {
            id: 'E-Stamp-03',
            name: 'Event 3',
            info: 'Event 3',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        stamp: {
            id: 'E-Stamp-04',
            name: 'Event 4',
            info: 'Event 4',
        },
        is_taken: false,
        taken_at: 0,
    },
];
export async function getUserStamp(): Promise<UserEstampEvent[] | null> {
    try {
        const { data } = await httpGet<UserEstampEvent[]>('/estamp/my');
        return data;
    } catch (err) {
        return null;
    }
}
