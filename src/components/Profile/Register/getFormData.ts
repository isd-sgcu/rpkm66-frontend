import { RegisterDTO } from '@/dto/registerDTO';
import { IUser } from '@/types/user';
import { registerFormId } from './constants';

export function getFormData(user: IUser | undefined, wantBottle?: boolean) {
    const form = document.getElementById(registerFormId) as HTMLFormElement;

    const body = {
        allergy_food: form.foodAllergy.value as string,
        allergy_medicine: form.drugAllergy.value as string,
        disease: form.diseases.value as string,
        email: form.email.value as string,
        emer_phone: form.emergencyNo.value as string,
        emer_relation: form.emergencyRel.value as string,
        firstname: form.firstname.value as string,
        food_restriction: form.foodRestriction.value as string,
        line_id: form.lineId.value as string,
        lastname: form.surname.value as string,
        nickname: form.nickname.value as string,
        phone: form.phone.value as string,
        title: form.nametitle.value as string,
        want_bottle: wantBottle ?? (form.wantbottle.value as boolean),
        id: user?.id ?? '',
    } satisfies RegisterDTO;

    return body;
}
