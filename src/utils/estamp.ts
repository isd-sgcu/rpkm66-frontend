import { EstampStyle, UserEstampEvent } from '@/types/estamp';

//For testing only
export const stampPiecePicture: UserEstampEvent[] = [
    {
        event: {
            id: 'E-Stamp-01',
            name: 'Event 1',
            info: 'Event 1',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        event: {
            id: 'E-Stamp-02',
            name: 'Event 2',
            info: 'Event 2',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        event: {
            id: 'E-Stamp-03',
            name: 'Event 3',
            info: 'Event 3',
        },
        is_taken: false,
        taken_at: 0,
    },
    {
        event: {
            id: 'E-Stamp-04',
            name: 'Event 4',
            info: 'Event 4',
        },
        is_taken: false,
        taken_at: 0,
    },
];
//Implement data here
export const stampPieceStyle: EstampStyle[] = [
    {
        imgUrl: '/images/pfp-placeholder.svg',
        style: '',
    },
    {
        imgUrl: '/images/pfp-placeholder.svg',
        style: '',
    },
    {
        imgUrl: '/images/pfp-placeholder.svg',
        style: '',
    },
    {
        imgUrl: '/images/pfp-placeholder.svg',
        style: '',
    },
];
