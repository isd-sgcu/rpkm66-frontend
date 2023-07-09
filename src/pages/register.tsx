import { RegisterDTO } from '@/dto/registerDTO';
import { httpPatch, httpPost } from '@/utils/axios';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const profilePicPlaceholderURL = '/images/pfp-placeholder.svg';

const Register = () => {
    const router = useRouter();

    const { user, refreshContext } = useAuth();

    const [previewImage, setPreviewImage] = useState<string>(
        profilePicPlaceholderURL
    );

    async function handleImageUpload(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('tag', '1');
        formData.append('type', '1');

        try {
            const { data } = await httpPost<
                FormData,
                {
                    url: string;
                }
            >('/file/upload', formData);

            setPreviewImage(data.url);
        } catch (error) {
            // todo handle error
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = {
            allergy_food: e.currentTarget.foodAllergy.value as string,
            allergy_medicine: e.currentTarget.drugAllergy.value as string,
            disease: e.currentTarget.diseases.value as string,
            email: e.currentTarget.email.value as string,
            emer_phone: e.currentTarget.emergencyNo.value as string,
            emer_relation: e.currentTarget.emergencyRel.value as string,
            // @ts-expect-error bruh
            firstname: e.currentTarget.name.value as string,
            food_restriction: e.currentTarget.foodRestriction.value as string,
            line_id: e.currentTarget.lineId.value as string,
            lastname: e.currentTarget.surname.value as string,
            nickname: e.currentTarget.nickname.value as string,
            phone: e.currentTarget.phone.value as string,
            // @ts-expect-error bruh
            title: e.currentTarget.title.value as string,
            want_bottle: false,
            id: user?.id ?? '',
        } satisfies RegisterDTO;

        try {
            await httpPatch(`/user`, body);
            await refreshContext();
            router.push('/baan-selection');
        } catch (error) {
            // TODO handle error
        }
    };

    return (
        <div className="flex lg:justify-end">
            <form
                className="mt-40 flex w-full flex-col items-center justify-start rounded-t-3xl bg-white text-purple lg:mt-0 lg:w-2/3 lg:rounded-tr-none"
                onSubmit={handleSubmit}
            >
                <h1 className="mb-2 mt-12 text-3xl font-bold">ลงทะเบียน</h1>
                <div className="flex w-10/12 flex-col items-center justify-start pt-6 lg:flex-row-reverse lg:justify-between">
                    <label
                        htmlFor="image"
                        className="mb-6 w-40 cursor-pointer lg:w-1/4"
                    >
                        <div className="flex flex-row items-center justify-between">
                            <div>อัปโหลดรูป</div>
                            <div className="flex flex-row items-center justify-center rounded-full bg-orange px-3 py-1 text-white">
                                <PencilSquareIcon className="h-4 w-4" />
                                <span className="text-xs">แก้ไข</span>
                            </div>
                        </div>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="images/*"
                            className="hidden"
                            onChange={async (
                                e: ChangeEvent<HTMLInputElement>
                            ) => {
                                if (!e.target.files || !e.target.files[0])
                                    return;

                                await handleImageUpload(e.target.files[0]);
                            }}
                        />
                        {previewImage && (
                            <div className="relative my-4 aspect-3/4 w-full">
                                <Image
                                    src={previewImage}
                                    alt="preview"
                                    fill
                                    className="object-cover object-center shadow-lg"
                                />
                            </div>
                        )}
                    </label>
                    <div className="flex w-full flex-col items-start justify-start lg:w-1/2">
                        <label htmlFor="title" className="mb-1">
                            คำนำหน้าชื่อ
                        </label>
                        <select
                            name="title"
                            id="title"
                            className="mb-4 w-28 rounded-full border-r-8 border-transparent bg-gray-100 py-2 pl-3 pr-8 outline-4 outline-gray-100"
                            required
                        >
                            <option value="">เลือกคำนำหน้าชื่อ</option>
                            <option value="นาย">นาย</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                        </select>
                        <label htmlFor="name" className="mb-1">
                            ชื่อ (หากมีชื่อกลางให้ใส่ในช่องนี้)
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input"
                            required
                            placeholder="ชื่อ"
                        />
                        <label htmlFor="surname" className="mb-1">
                            นามสกุล
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            className="input"
                            placeholder="นามสกุล"
                            required
                        />
                        <label htmlFor="nickname" className="mb-1">
                            ชื่อเล่น
                        </label>
                        <input
                            type="text"
                            name="nickname"
                            id="nickname"
                            className="input"
                            placeholder="ชื่อเล่น"
                            required
                        />
                    </div>
                </div>
                <hr className="mb-5 mt-3 h-1 w-10/12" />
                <div className="flex w-10/12 flex-col items-start justify-start">
                    <label htmlFor="phone" className="mb-1">
                        หมายเลขโทรศัพท์
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="input"
                        placeholder="08xxxxxxxx"
                        required
                    />
                    <label htmlFor="email" className="mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="example@email.com"
                        required
                    />
                    <label htmlFor="lindId" className="mb-1">
                        LINE ID
                    </label>
                    <input
                        type="text"
                        name="lineId"
                        id="lineId"
                        className="input"
                        placeholder="LINE ID"
                        required
                    />
                    <label htmlFor="diseases" className="mb-1">
                        โรคประจำตัว
                    </label>
                    <input
                        type="text"
                        name="diseases"
                        id="diseases"
                        className="input"
                        placeholder="ไม่มีให้ใส่ -"
                        required
                    />
                    <label htmlFor="drugAllergy" className="mb-1">
                        ยาที่แพ้
                    </label>
                    <input
                        type="text"
                        name="drugAllergy"
                        id="drugAllergy"
                        className="input"
                        placeholder="ไม่มีให้ใส่ -"
                        required
                    />
                    <label htmlFor="foodAllergy" className="mb-1">
                        อาหารที่แพ้
                    </label>
                    <input
                        type="text"
                        name="foodAllergy"
                        id="foodAllergy"
                        className="input"
                        placeholder="ไม่มีให้ใส่ -"
                        required
                    />
                    <label htmlFor="foodRestriction" className="mb-1">
                        ข้อจำกัดทางอาหาร
                    </label>
                    <input
                        type="text"
                        name="foodRestriction"
                        id="foodRestriction"
                        className="input"
                        placeholder="ไม่มีให้ใส่ -"
                        required
                    />
                    <hr className="mb-5 mt-3 h-1 w-full" />
                    <label htmlFor="emergencyNo" className="mb-1">
                        เบอร์ติดต่อฉุกเฉิน
                    </label>
                    <input
                        type="text"
                        name="emergencyNo"
                        id="emergencyNo"
                        className="input"
                        placeholder="08xxxxxxxx"
                        required
                    />
                    <label htmlFor="emergencyRel" className="mb-1">
                        ความสัมพันธ์กับตนเอง
                    </label>
                    <input
                        type="text"
                        name="emergencyRel"
                        id="emergencyRel"
                        className="input"
                        placeholder="มารดา"
                        required
                    />
                </div>

                <div className="mb-5 mt-3 grid w-10/12 grid-cols-12 items-start justify-start gap-4">
                    <input
                        type="checkbox"
                        name="tc"
                        id="tc"
                        className="col-span-1 h-7 w-7 border-none bg-gray-100"
                        required
                    />
                    <label
                        htmlFor="tc"
                        className="text-full col-span-11 text-left"
                    >
                        ยอมรับ{' '}
                        <Link
                            href={''}
                            className="underline hover:no-underline"
                        >
                            ข้อตกลงและเงื่อนไขการใช้งาน
                        </Link>{' '}
                        และ{' '}
                        <Link
                            href={''}
                            className="underline hover:no-underline"
                        >
                            นโยบายความเป็นส่วนตัว
                        </Link>
                    </label>
                </div>

                <div className="mb-5 mt-3 grid w-10/12 grid-cols-12 items-start justify-start gap-4">
                    <input
                        type="checkbox"
                        name="pp"
                        id="pp"
                        className="col-span-1 h-7 w-7 border-none bg-gray-100"
                        required
                    />
                    <label htmlFor="pp" className="col-span-11 text-left">
                        ข้าพเจ้ายินยอมให้ส่งต่อข้อมูลให้คณะผู้จัดงานและบ้านรับเพื่อนเพื่อนำข้อมูลดังกล่าวไปใช้สำหรับเตรียมอาหาร
                        ยาและเครื่องมือปฐมพยาบาลเบื้องต้นสำหรับนิสิตที่เข้าร่วมกิจกรรม
                    </label>
                </div>

                <button
                    type="submit"
                    className="my-10 mb-16 rounded-full bg-pink-400 px-14 py-2 text-xl font-bold text-white ring-8 ring-pink-400/30 hover:bg-pink-400/80"
                >
                    ลงทะเบียน
                </button>
            </form>
        </div>
    );
};

export default Register;
