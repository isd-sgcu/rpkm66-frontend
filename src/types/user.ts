export interface IShortUser {
    id: string;
    firstname: string;
    lastname: string;
    image_url: string;
}

export interface IUser {
    id: string;
    studentID: string;
    faculty: string;
    year: string;
    title: 'Mr.' | 'Mrs.' | 'Ms.';
    firstname: string;
    lastname: string;
    nickname: string;
    email: string;
    phone: string;
    emerPhone: string;
    emerRelation: string;
    lineID: string;
    disease: string;
    allergyFood: string;
    allergyMedicine: string;
    foodRestriction: string;
    imageUrl: string;
    canSelectBaan: boolean;
    isVerify: boolean;
    groupId: string;
    isGotTicket: boolean;
    baanId?: string;
    wantbottle: boolean;
}
