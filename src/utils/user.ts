import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { IUser } from '@/types/user';
import { UserDTO } from '@/dto/userDTO';

const transformUserDTOtoIUser = (user: UserDTO) => ({
    id: user.id,
    studentID: user.studentID,
    faculty: user.faculty,
    year: user.year,
    title: user.title || 'Mr.',
    firstname: user.firstname ?? '',
    lastname: user.lastname ?? '',
    nickname: user.nickname ?? '',
    email: user.email ?? '',
    phone: user.phone ?? '',
    lineID: user.lineID ?? '',
    disease: user.disease ?? '',
    allergyFood: user.allergyFood ?? '',
    allergyMedicine: user.allergyMedicine ?? '',
    foodRestriction: user.foodRestriction ?? '',
    imageUrl: user.imageUrl ?? '',
    canSelectBaan: user.canSelectBaan ?? false,
    isVerify: user.isVerify ?? false,
    groupId: user.groupId ?? '',
    baanId: user.baanId,
    isGotTicket: user.isGotTicket ?? false,
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
