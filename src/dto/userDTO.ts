export interface UserDTO {
    id: string;
    student_id: string;
    faculty: string;
    year: string;
    title?: 'Mr.' | 'Mrs.' | 'Ms.';
    firstname?: string;
    lastname?: string;
    nickname?: string;
    email?: string;
    phone?: string;
    line_id?: string;
    disease?: string;
    allergy_food?: string;
    allergy_medicine?: string;
    food_restriction?: string;
    image_url?: string;
    can_select_baan?: boolean;
    is_verify?: boolean;
    group_id?: string;
    baan_id?: string;
    is_got_ticket?: boolean;
}
