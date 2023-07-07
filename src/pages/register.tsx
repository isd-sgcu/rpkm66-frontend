import { PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

const profilePicPlaceholderURL = '/images/pfp-placeholder.svg';

const Register = () => {
    const [previewImage, setPreviewImage] = useState<string>(
        profilePicPlaceholderURL
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex lg:justify-end">
            <form
                className="bg-white w-full lg:w-2/3 mt-40 lg:mt-0 rounded-t-3xl lg:rounded-tr-none flex flex-col justify-start items-center text-purple font-ibm"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold mt-12 mb-2">ลงทะเบียน</h1>
                <div className="flex flex-col justify-start items-center w-10/12 pt-6 lg:flex-row-reverse lg:justify-between">
                    <label
                        htmlFor="image"
                        className="w-40 mb-6 lg:w-1/4 cursor-pointer"
                    >
                        <div className="flex flex-row justify-between items-center">
                            <div>อัปโหลดรูป</div>
                            <div className="bg-orange flex flex-row justify-center items-center py-1 px-3 rounded-full">
                                <PencilSquareIcon className="text-white w-4 h-4" />
                                <span className="text-white text-xs">
                                    แก้ไข
                                </span>
                            </div>
                        </div>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="images/*"
                            className="hidden"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                if (!e.target.files || !e.target.files[0])
                                    return;

                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setPreviewImage(reader.result as string);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                        {previewImage && (
                            <div className="w-full aspect-3/4 relative my-4">
                                <Image
                                    src={previewImage}
                                    alt="preview"
                                    fill
                                    className="object-cover object-center shadow-lg"
                                />
                            </div>
                        )}
                    </label>
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                        <label htmlFor="title" className="mb-1">
                            คำนำหน้าชื่อ
                        </label>
                        <select
                            name="title"
                            id="title"
                            className="w-28 bg-gray-100 border-gray-100 rounded-full p-2 px-3 mb-4"
                            required
                        >
                            <option value=""></option>
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
                        />
                        <label htmlFor="surname" className="mb-1">
                            นามสกุล
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            className="input"
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
                            required
                        />
                    </div>
                </div>
                <hr className="w-10/12 h-1 mt-3 mb-5" />
                <div className="w-10/12 flex flex-col justify-start items-start">
                    <label htmlFor="phone" className="mb-1">
                        หมายเลขโทรศัพท์
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="input"
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
                        required
                    />
                    <label htmlFor="diseases" className="mb-1">
                        โรคประจำตัว (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="diseases"
                        id="diseases"
                        className="input"
                        required
                    />
                    <label htmlFor="drugAllergy" className="mb-1">
                        ยาที่แพ้ (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="drugAllergy"
                        id="drugAllergy"
                        className="input"
                        required
                    />
                    <label htmlFor="foodAllergy" className="mb-1">
                        อาหารที่แพ้ (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="foodAllergy"
                        id="foodAllergy"
                        className="input"
                        required
                    />
                    <label htmlFor="foodRestriction" className="mb-1">
                        ข้อจำกัดทางอาหาร (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="foodRestriction"
                        id="foodRestriction"
                        className="input"
                        required
                    />
                    <hr className="w-full h-1 mt-3 mb-5" />
                    <label htmlFor="emergencyNo" className="mb-1">
                        เบอร์ติดต่อฉุกเฉิน
                    </label>
                    <input
                        type="text"
                        name="emergencyNo"
                        id="emergencyNo"
                        className="input"
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
                        required
                    />
                </div>
                <div className="w-10/12 flex flex-row justify-start items-start mt-8 mb-2">
                    <input
                        type="checkbox"
                        name="flask"
                        id="flask"
                        className="bg-gray-100 border-none w-7 h-7 mr-3"
                    />
                    <label htmlFor="flask" className="text-left w-3/4">
                        รับกระติกน้ำ Zero waste ที่โต๊ะลงทะเบียนในวันที่ 5
                    </label>
                </div>
                <div className="w-10/12 flex flex-row justify-start items-start mt-3 mb-5">
                    <input
                        type="checkbox"
                        name="tc"
                        id="tc"
                        className="bg-gray-100 border-none w-7 h-7 mr-3"
                        required
                    />
                    <label htmlFor="tc" className="text-left">
                        ยอมรับ{' '}
                        <Link href={''} className="underline">
                            ข้อตกลงและเงื่อนไขการใช้งาน
                        </Link>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-xl text-white font-bold bg-pink rounded-full py-2 px-14 my-10 mb-16 ring-pink/30 ring-8 hover:bg-pink/80"
                >
                    ลงทะเบียน
                </button>
            </form>
        </div>
    );
};

export default Register;
