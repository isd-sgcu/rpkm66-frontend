export interface EstampEvent {
    info: string;
    id: string;
    name: string;
}
export interface UserEstampEvent {
    stamp: EstampEvent;
    is_taken: boolean;
    taken_at: number;
}
