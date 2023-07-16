import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { IUser } from '@/types/user';
import { UserDTO } from '@/dto/userDTO';

const transformUserDTOtoIUser = (user: UserDTO) => ({
    id: user.id,
    studentID: user.student_id,
    faculty: user.faculty,
    year: user.year,
    title: user.title || 'Mr.',
    firstname: user.firstname ?? '',
    lastname: user.lastname ?? '',
    nickname: user.nickname ?? '',
    email: user.email ?? '',
    phone: user.phone ?? '',
    emerPhone: user.emer_phone ?? '',
    emerRelation: user.emer_relation ?? '',
    lineID: user.line_id ?? '',
    disease: user.disease ?? '',
    allergyFood: user.allergy_food ?? '',
    allergyMedicine: user.allergy_medicine ?? '',
    foodRestriction: user.food_restriction ?? '',
    imageUrl: user.image_url ?? '',
    canSelectBaan: user.can_select_baan ?? false,
    isVerify: user.is_verify ?? false,
    groupId: user.group_id ?? '',
    baanId: user.baan_id,
    isGotTicket: user.is_got_ticket ?? false,
    wantbottle: user.want_bottle ?? false,
});

const getUserProfile = async (): Promise<IUser | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<UserDTO>('/auth/me');
    } catch (err) {
        return null;
    }

    const user = transformUserDTOtoIUser(res.data);
    return user;
};

export { getUserProfile };
