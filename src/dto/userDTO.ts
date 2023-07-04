export interface UserDTO {
    id: string;
    studentID: string;
    faculty: string;
    year: string;
    title?: 'Mr.' | 'Mrs.' | 'Ms.';
    firstname?: string;
    lastname?: string;
    nickname?: string;
    email?: string;
    phone?: string;
    lineID?: string;
    disease?: string;
    allergyFood?: string;
    allergyMedicine?: string;
    foodRestriction?: string;
    imageUrl?: string;
    canSelectBaan?: boolean;
    isVerify?: boolean;
    groupId?: string;
    baanId?: string;
    isGotTicket?: boolean;
}
