import QRCode from "react-qr-code";
import Link from 'next/link';
import Image from 'next/image';

// using https://www.npmjs.com/package/react-qr-code 

const ETicket = (qrcode: string) => {
    return (
        <div className="flex-col min-h-screen">
            <Link href="https://freshmen2023.sgcu.in.th/profile">
                <button className="flex px-4 py-1 relative h-20 w-20">
                    <Image
                        //change icon to arrow-uturn-left in heroicons.com
                        src="/images/icons8-instagram.svg"
                        alt="Go back"
                        fill
                    />
                </button>
            </Link>
            <div className="flex m-auto max-w-fit rounded-3xl bg-white p-6">
                <div className="max-h-fit">
                    <QRCode
                        value={qrcode}
                        //mote: change fgColor
                        fgColor="#3C415F"
                    />
                </div>
            </div>
        </div>
    );
};

export default ETicket;
