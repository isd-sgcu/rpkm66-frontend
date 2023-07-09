import { useAuth } from '@/context/AuthContext';
import { RegisterDTO } from '@/dto/registerDTO';
import { httpPatch, httpPost } from '@/utils/axios';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const profilePicPlaceholderURL = '/images/pfp-placeholder.svg';

const Register = () => {
    const { user, refreshContext } = useAuth();
    const router = useRouter();
    const [bottleModal, setBottleModal] = useState(false);
    const [previewImage, setPreviewImage] = useState<string>(
        profilePicPlaceholderURL
    );
    const [error, setError] = useState<string[]>([]);

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

    const onFormDone = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError([]);

        // validate form
        if (!e.currentTarget.image.files[0]) {
            setError((prev) => [...prev, 'กรุณาอัพโหลดรูปภาพ']);
        }
        if (
            !e.currentTarget.nametitle.value ||
            e.currentTarget.nametitle.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณาเลือกคำนำหน้าชื่อ']);
        }
        if (
            !e.currentTarget.firstname.value ||
            e.currentTarget.firstname.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกชื่อ']);
        }
        if (
            !e.currentTarget.surname.value ||
            e.currentTarget.surname.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกนามสกุล']);
        }
        if (
            !e.currentTarget.nickname.value ||
            e.currentTarget.nickname.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกชื่อเล่น']);
        }
        if (
            !e.currentTarget.phone.value ||
            e.currentTarget.phone.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกหมายเลขโทรศัพท์']);
        } else if (!e.currentTarget.phone.value.match(/^[0-9]{10}$/)) {
            setError((prev) => [
                ...prev,
                'หมายเลขโทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลัก เช่น 0912345678',
            ]);
        }
        if (
            !e.currentTarget.email.value ||
            e.currentTarget.email.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอก Email']);
        } else if (
            !e.currentTarget.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ) {
            setError((prev) => [...prev, 'กรุณากรอก Email ให้ถูกต้อง']);
        }
        if (
            !e.currentTarget.lineId.value ||
            e.currentTarget.lineId.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอก LINE ID']);
        }
        if (
            !e.currentTarget.diseases.value ||
            e.currentTarget.diseases.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกโรคประจำตัว']);
        }
        if (
            !e.currentTarget.foodAllergy.value ||
            e.currentTarget.foodAllergy.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกอาหารที่แพ้']);
        }
        if (
            !e.currentTarget.drugAllergy.value ||
            e.currentTarget.drugAllergy.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกยาที่แพ้']);
        }
        if (
            !e.currentTarget.foodRestriction.value ||
            e.currentTarget.foodRestriction.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกข้อจำกัดทางอาหาร']);
        }
        if (
            !e.currentTarget.emergencyNo.value ||
            e.currentTarget.emergencyNo.value === ''
        ) {
            setError((prev) => [...prev, 'กรุณากรอกเบอร์ติดต่อฉุกเฉิน']);
        } else if (!e.currentTarget.emergencyNo.value.match(/^[0-9]{10}$/)) {
            setError((prev) => [
                ...prev,
                'หมายเลขโทรศัพท์ติดต่อฉุกเฉินต้องประกอบด้วยตัวเลข 10 หลัก เช่น 0912345678',
            ]);
        }
        if (
            !e.currentTarget.emergencyRel.value ||
            e.currentTarget.emergencyRel.value === ''
        ) {
            setError((prev) => [
                ...prev,
                'กรุณากรอกความสัมพันธ์กับผู้ติดต่อฉุกเฉิน',
            ]);
        }
        if (!e.currentTarget.tc.checked) {
            setError((prev) => [
                ...prev,
                'กรุณายอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว',
            ]);
        }
        if (!e.currentTarget.pp.checked) {
            setError((prev) => [...prev, 'กรุณายอมรับข้อตกลง']);
        }

        setBottleModal(error.length === 0);
    };

    const handleSubmit = async (
        // e: FormEvent<HTMLFormElement>,
        wantBottle: boolean
    ) => {
        const form = document.getElementById(
            'register-form'
        ) as HTMLFormElement;

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
            want_bottle: wantBottle,
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
        <div className="relative flex lg:justify-end">
            {bottleModal && (
                <AnimatePresence>
                    <motion.div
                        className="fixed left-1/2 top-1/2 z-[99] flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white px-16 py-16 shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key="water-bottle-modal"
                    >
                        <h1 className="text-center text-2xl font-bold text-purple">
                            ต้องการรับกระบอกน้ำ <br />
                            Chula Zero Waste <br />
                            ในงานรับเพื่อนก้าวใหม่หรือไม่
                        </h1>
                        <div className="mt-10 flex w-full flex-row items-center justify-center gap-8">
                            <button
                                onClick={() => {
                                    setBottleModal(false);
                                    handleSubmit(false);
                                }}
                                className="w-full rounded-full border-pink-400 px-5 py-2 text-xl font-bold text-pink-400 ring-8 ring-pink-400/30 hover:ring-pink-400/50"
                            >
                                ไม่ต้องการ
                            </button>
                            <button
                                onClick={() => {
                                    setBottleModal(false);
                                    handleSubmit(true);
                                }}
                                className="w-full rounded-full bg-pink-400 px-5 py-2 text-xl font-bold text-white ring-8 ring-pink-400/30 hover:bg-pink-400/80"
                            >
                                ต้องการ
                            </button>
                        </div>
                    </motion.div>
                    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/25 backdrop-blur-md"></div>
                </AnimatePresence>
            )}

            <form
                className="mt-40 flex w-full flex-col items-center justify-start rounded-t-3xl bg-white text-purple lg:mt-0 lg:w-2/3 lg:rounded-tr-none"
                onSubmit={onFormDone}
                noValidate={true}
                id="register-form"
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
                        <label htmlFor="nametitle" className="mb-1">
                            คำนำหน้าชื่อ
                        </label>
                        <select
                            name="nametitle"
                            id="nametitle"
                            className="mb-4 w-28 rounded-full border-r-8 border-transparent bg-gray-100 py-2 pl-3 pr-8 outline-4 outline-gray-100"
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
                            เงื่อนไขการใช้งาน
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
        </div>
    );
};

export default Register;
