import {
    ChangeEvent,
    Dispatch,
    FC,
    FormEvent,
    FormEventHandler,
    SetStateAction,
    useState,
} from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/Toast';
import { httpPost } from '@/utils/axios';
import Image from 'next/image';
import Link from 'next/link';
import { registerFormId } from './constants';

type RegisterFormProps = {
    /** This callback function is called after it pass validation*/
    onFormComplete: FormEventHandler<HTMLFormElement>;
    editPage?: boolean;

    error: string[];
    setError: Dispatch<SetStateAction<string[]>>;

    previewImage: string;
    setPreviewImage: Dispatch<SetStateAction<string>>;
};

export const RegisterForm: FC<RegisterFormProps> = ({
    onFormComplete,
    editPage,
    error,
    setError,
    previewImage,
    setPreviewImage,
}) => {
    const { user } = useAuth();
    const toast = useToast();

    async function handleImageUpload(file: File) {
        const formData = new FormData();
        const filename = `${Date.now()}.${file.name.split('.').pop()}${
            user?.studentID
        }`;
        formData.append('file', file, filename);
        formData.append('tag', '1');
        formData.append('type', '1');

        // if file larger than 10mb
        const TEN_MB = 10 * 1024 * 1024;
        if (file.size > TEN_MB) {
            toast?.setToast('error', 'ไฟล์มีขนาดใหญ่เกิน 10 MB');
            return;
        }

        try {
            const { data } = await httpPost<
                FormData,
                {
                    url: string;
                }
            >('/file/upload', formData);

            setPreviewImage(data.url);
        } catch (error) {
            toast?.setToast('error', 'เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ');
        }
    }

    const onFormDone = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const _error = [];

        // validate form
        if (!e.currentTarget.image.files[0]) {
            _error.push('กรุณาอัปโหลดรูปภาพ');
        }
        if (
            !e.currentTarget.nametitle.value ||
            e.currentTarget.nametitle.value === ''
        ) {
            _error.push('กรุณาเลือกคำนำหน้าชื่อ');
        }
        if (
            !e.currentTarget.firstname.value ||
            e.currentTarget.firstname.value === ''
        ) {
            _error.push('กรุณากรอกชื่อ');
        }
        if (
            !e.currentTarget.surname.value ||
            e.currentTarget.surname.value === ''
        ) {
            _error.push('กรุณากรอกนามสกุล');
        }
        if (
            !e.currentTarget.nickname.value ||
            e.currentTarget.nickname.value === ''
        ) {
            _error.push('กรุณากรอกชื่อเล่น');
        }
        if (
            !e.currentTarget.phone.value ||
            e.currentTarget.phone.value === ''
        ) {
            _error.push('กรุณากรอกหมายเลขโทรศัพท์');
        } else if (!e.currentTarget.phone.value.match(/^[0-9]{10}$/)) {
            _error.push(
                'หมายเลขโทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลัก เช่น 0912345678'
            );
        }
        if (
            !e.currentTarget.email.value ||
            e.currentTarget.email.value === ''
        ) {
            _error.push('กรุณากรอก Email');
        } else if (
            !e.currentTarget.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ) {
            _error.push('กรุณากรอก Email ให้ถูกต้อง');
        }
        if (
            !e.currentTarget.lineId.value ||
            e.currentTarget.lineId.value === ''
        ) {
            _error.push('กรุณากรอก LINE ID');
        }
        if (
            !e.currentTarget.diseases.value ||
            e.currentTarget.diseases.value === ''
        ) {
            _error.push('กรุณากรอกโรคประจำตัว');
        }
        if (
            !e.currentTarget.foodAllergy.value ||
            e.currentTarget.foodAllergy.value === ''
        ) {
            _error.push('กรุณากรอกอาหารที่แพ้');
        }
        if (
            !e.currentTarget.drugAllergy.value ||
            e.currentTarget.drugAllergy.value === ''
        ) {
            _error.push('กรุณากรอกยาที่แพ้');
        }
        if (
            !e.currentTarget.foodRestriction.value ||
            e.currentTarget.foodRestriction.value === ''
        ) {
            _error.push('กรุณากรอกข้อจำกัดทางอาหาร');
        }
        if (
            !e.currentTarget.emergencyNo.value ||
            e.currentTarget.emergencyNo.value === ''
        ) {
            _error.push('กรุณากรอกเบอร์ติดต่อฉุกเฉิน');
        } else if (!e.currentTarget.emergencyNo.value.match(/^[0-9]{10}$/)) {
            _error.push(
                'หมายเลขโทรศัพท์ติดต่อฉุกเฉินต้องประกอบด้วยตัวเลข 10 หลัก เช่น 0912345678'
            );
        }
        if (
            !e.currentTarget.emergencyRel.value ||
            e.currentTarget.emergencyRel.value === ''
        ) {
            _error.push('กรุณากรอกความสัมพันธ์กับผู้ติดต่อฉุกเฉิน');
        }
        if (!e.currentTarget.tc.checked) {
            _error.push('กรุณายอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว');
        }
        if (!e.currentTarget.pp.checked) {
            _error.push('กรุณายอมรับข้อตกลง');
        }

        setError(_error);

        if (_error.length === 0) {
            onFormComplete(e);
        }
    };

    return (
        <form
            className="mt-40 flex w-full flex-col items-center justify-start rounded-t-3xl bg-white text-purple-400 lg:mt-0 lg:w-2/3"
            onSubmit={onFormDone}
            noValidate={true}
            id={registerFormId}
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
                    <span className="text-center text-sm font-extralight text-purple-400/50">
                        รูปภาพจะต้องมีขนาดไม่เกิน 10MB
                    </span>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                            if (!e.target.files || !e.target.files[0]) return;

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
                    <label htmlFor="nametitle" className="mb-1">
                        คำนำหน้าชื่อ
                    </label>
                    <select
                        name="nametitle"
                        id="nametitle"
                        className="mb-4 w-36 rounded-full border-r-8 border-transparent bg-gray-100 py-2 pl-3 pr-8 outline-4 outline-gray-100"
                        required
                    >
                        <option value="">เลือกคำนำหน้าชื่อ</option>
                        <option value="นาย">นาย</option>
                        <option value="นางสาว">นางสาว</option>
                        <option value="นาง">นาง</option>
                    </select>
                    <label htmlFor="firstname" className="mb-1">
                        ชื่อ (หากมีชื่อกลางให้ใส่ในช่องนี้)
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
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
                <label htmlFor="lineId" className="mb-1">
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

            {editPage || (
                <>
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
                                href={'/terms-conditions'}
                                className="underline hover:no-underline"
                            >
                                เงื่อนไขการใช้งาน
                            </Link>{' '}
                            และ{' '}
                            <Link
                                href={'/privacy-policy'}
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
                </>
            )}

            {editPage && (
                <div className="mb-5 mt-3 grid w-10/12 grid-cols-12 items-center justify-start gap-4">
                    <input
                        type="checkbox"
                        name="wantbottle"
                        id="wantbottle"
                        className="col-span-1 h-7 w-7 border-none bg-gray-100"
                        required
                    />
                    <label
                        htmlFor="wantbottle"
                        className="col-span-11 text-left"
                    >
                        ต้องการรับกระบอกน้ำ Chula Zero Waste
                        ในงานรับเพื่อนก้าวใหม่หรือไม่
                    </label>
                </div>
            )}

            {error.length > 0 && (
                <div className="mb-5 mt-3 w-10/12 origin-top text-red-400">
                    {error.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
            )}

            <button
                type="submit"
                className="my-10 mb-16 rounded-full bg-pink-400 px-14 py-2 text-xl font-bold text-white ring-8 ring-pink-400/30 hover:bg-pink-400/80"
            >
                ลงทะเบียน
            </button>
        </form>
    );
};
