import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
    const inputStyle =
        'w-full bg-input-gray border-input-gray rounded-full p-2 px-3 mb-4';
    return (
        <div className="w-screen min-h-screen pt-40 lg:pt-0 font-ibm bg-background-mobile lg:bg-background-desktop bg-no-repeat bg-cover bg-center text-white text-center  z-0 overflow-clip select-none">
            <form className=" bg-white w-full lg:w-2/3 rounded-t-[20px] lg:rounded-l-[20px] flex flex-col justify-start items-center text-purple">
                <h1 className="text-3xl font-bold mt-12 mb-2">ลงทะเบียน</h1>
                <div className="flex flex-col justify-start items-center w-10/12 pt-6 lg:flex-row-reverse lg:justify-between">
                    <div className="w-1/2 mb-6 lg:w-1/4">
                        <div className="flex flex-row justify-between items-center">
                            <div>อัปโหลดรูป</div>
                            <button className="bg-[#E36130] flex flex-row justify-center items-center py-1 px-3 rounded-full">
                                <Image
                                    src="/images/heroicons-solid/pencil-square.svg"
                                    alt=""
                                    height={16}
                                    width={16}
                                />
                                <p className="text-white text-xs">แก้ไข</p>
                            </button>
                        </div>
                        <div className="w-full h-52 relative rounded-2xl overflow-hidden  my-4">
                            <Image
                                src="/images/pfp-placeholder.png"
                                alt=""
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                        <label htmlFor="" className="mb-1">
                            คำนำหน้าชื่อ
                        </label>
                        <select
                            name="title"
                            id="title"
                            className=" w-28 bg-input-gray border-input-gray rounded-full p-2 px-3 mb-4"
                            required
                        >
                            <option value=""></option>
                            <option value="นาย">นาย</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                        </select>
                        <label htmlFor="" className="mb-1">
                            ชื่อ (หากมีชื่อกลางให้ใส่ในช่องนี้)
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={inputStyle}
                            required
                        />
                        <label htmlFor="" className="mb-1">
                            นามสกุล
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            className={inputStyle}
                            required
                        />
                        <label htmlFor="" className="mb-1">
                            ชื่อเล่น
                        </label>
                        <input
                            type="text"
                            name="nickname"
                            id="nickname"
                            className={inputStyle}
                            required
                        />
                    </div>
                </div>
                <hr className="w-10/12 h-1 mt-3 mb-5" />
                <div className=" w-10/12 flex flex-col justify-start items-start">
                    <label htmlFor="" className="mb-1">
                        หมายเลขโทรศัพท์
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        LINE ID
                    </label>
                    <input
                        type="text"
                        name="lineId"
                        id="lineId"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        โรคประจำตัว (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="diseases"
                        id="diseases"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        ยาที่แพ้ (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="drugAllergy"
                        id="drugAllergy"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        อาหารที่แพ้ (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="foodAllergy"
                        id="foodAllergy"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        ข้อจำกัดทางอาหาร (ไม่มีให้ใส่ -)
                    </label>
                    <input
                        type="text"
                        name="foodRestriction"
                        id="foodRestriction"
                        className={inputStyle}
                        required
                    />
                    <hr className="w-full h-1 mt-3 mb-5" />
                    <label htmlFor="" className="mb-1">
                        เบอร์ติดต่อฉุกเฉิน
                    </label>
                    <input
                        type="text"
                        name="emergencyNo"
                        id="emergencyNo"
                        className={inputStyle}
                        required
                    />
                    <label htmlFor="" className="mb-1">
                        ความสัมพันธ์กับตนเอง
                    </label>
                    <input
                        type="text"
                        name="emergencyRel"
                        id="emergencyRel"
                        className={inputStyle}
                        required
                    />
                </div>
                <div className="w-10/12 flex flex-row justify-start items-start mt-8 mb-2">
                    <input
                        type="checkbox"
                        name="flask"
                        id="flask"
                        className=" bg-input-gray border-none w-7 h-7 mr-3"
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
                        className=" bg-input-gray border-none w-7 h-7 mr-3"
                    />
                    <label htmlFor="tc" className="text-left ">
                        ยอมรับ{' '}
                        <Link href={''} className=" underline">
                            ข้อตกลงและเงื่อนไขการใช้งาน
                        </Link>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-xl text-white font-bold bg-[#E95682] rounded-full py-2 px-14 my-10 mb-16 shadow-regisSubmit"
                >
                    ลงทะเบียน
                </button>
            </form>
        </div>
    );
};

export default Register;
