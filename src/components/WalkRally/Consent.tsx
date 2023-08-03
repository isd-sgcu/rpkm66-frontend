import Image from 'next/image';
import Link from 'next/link';
const Consent = ({
    setIsConsent,
    handleAcceptConsent,
}: {
    setIsConsent: (state: boolean) => void;
    handleAcceptConsent: () => void;
}) => {
    return (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/40 px-8">
            <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center space-y-4 rounded-lg bg-white px-10 px-4 py-6">
                <div className="relative h-16 w-16">
                    <Image src="/icons/camera.svg" alt="camera-icon" fill />
                </div>
                <p className="text-center text-black">
                    กิจกรรมรับเพื่อนก้าวใหม่ 2566
                    ขอความยินยอมท่านในการเก็บรวบรวม ใช้
                    และเปิดเผยข้อมูลอ่อนไหวส่วนบุคคล
                    รวมถึงรูปภาพและวิดีโอที่ถูกบันทึกไว้ตลอดทั้งกิจกรรมในงาน
                    เพื่อนำไปใช้ตามวัตถุประสงค์ของคณะผู้จัดงาน
                    ในช่วงระหว่างวันที่ 4-6 สิงหาคม 2566
                    โดยการเข้าร่วมงานและให้ความยินยอมในระบบอิเล็กทรอนิกส์นี้
                    ถือว่าทางคณะผู้จัดงานได้รับความยินยอมจากเจ้าของข้อมูลส่วนบุคคลในการเปิดเผยข้อมูลของผู้ถูกบันทึกภาพดังกล่าว
                </p>
                <div>
                    <Link
                        href="/pdpa"
                        className="text-black underline hover:no-underline"
                    >
                        นโยบายคุ้มครองข้อมูลส่วนบุคคล
                    </Link>
                </div>
                <div className="w-full">
                    <button
                        onClick={handleAcceptConsent}
                        className="w-full rounded-lg bg-pink-400 py-2 hover:brightness-90"
                    >
                        ยินยอม
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Consent;
