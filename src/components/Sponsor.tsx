import Image from 'next/Image';
import Major from '@/public/images/Major.png';
import Fourgle from '@/public/images/fourgle.jpg';
import Ptt from '@/public/images/Ptt.png';
import ParkOrigin from '@/public/images/ParkOrigin.png';
import ThaiBev from '@/public/images/ThaiBev.png';

const Sponsor = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <p className="mb-1 font-normal">ขอขอบคุณ</p>
            {/* size base on figma */}
            <div className="mb-4 flex h-fit w-fit items-center justify-items-center gap-5">
                <Image
                    src={Major}
                    width={30}
                    height={50}
                    className="object-contain"
                    alt="Major"
                />
                <Image src={Ptt} width={40} height={30} alt="Ptt" />
                <Image src={ThaiBev} width={50} height={20} alt="ThaiBev" />
                <Image src={Fourgle} width={50} height={50} alt="Fourgle" />
                <Image
                    src={ParkOrigin}
                    width={75}
                    height={20}
                    alt="ParkOrigin"
                />
            </div>
        </div>
    );
};
export default Sponsor;
