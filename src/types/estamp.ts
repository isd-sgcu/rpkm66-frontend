export interface EstampEvent {
    info: string;
    id: string;
    name: string;
}
export interface UserEstampEvent {
    event: EstampEvent;
    is_taken: boolean;
    taken_at: number;
}
export interface EstampStyle {
    imgUrl: string;
    style?: string;
}
