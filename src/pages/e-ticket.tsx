import Image from 'next/image';
import Link from 'next/link';

// using https://github.com/dephraiim/qrcode
// example: https://qr-service.vercel.app/api/code?text=https://freshmen2023.sgcu.in.th/&size=200

const ETicket = () => {
    return (
        <div className="min-h-screen">
            <div>
                <Link href="https://freshmen2023.sgcu.in.th/profile">
                    <button className="justify-left relative h-10 w-10 rounded-lg px-16 py-16">
                        <div className="">
                            <Image
                                //change icon to arrow-uturn-left in heroicons.com
                                src={'/images/icons8-instagram.svg'}
                                alt="Go back"
                                fill
                            />
                        </div>
                    </button>
                </Link>
            </div>
            <div className="flex w-full items-center justify-center">
                <div className="mx-8 my-24 rounded-3xl bg-white px-6 py-8">
                    <img
                        alt="E-ticket QR Code"
                        //please change the QR Code
                        src="https://qr-service.vercel.app/api/code?text=https://freshmen2023.sgcu.in.th/&size=300"
                    />
                </div>
            </div>
        </div>
    );
};

export default ETicket;
