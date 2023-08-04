import Link from 'next/link';

const NotAllowed = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center  px-8">
            <div className="flex w-full flex-col items-center justify-center rounded-xl bg-pink-400/50 px-4 py-12 text-center text-2xl text-white backdrop-blur-md">
                <h1 className="text-4xl font-bold">ขออภัย!</h1>
                <p className="mt-4">ไม่สามารถเข้าถึงเนื้อหาหน้านี้ได้</p>
                <Link href="/" className="mt-12 underline">
                    กลับหน้าหลัก
                </Link>
            </div>
        </div>
    );
};

export default NotAllowed;
