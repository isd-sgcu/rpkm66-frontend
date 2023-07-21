import { QrCodeIcon } from '@heroicons/react/24/solid';
const MyETicket = (props: any) => {
    const router = props.router;
    return (
        <button
            className="my-6 flex h-12 w-4/5 items-center justify-center rounded-xl bg-pink-400 text-xl font-bold ring-8 ring-pink-400/40 transition-all duration-300 ease-in-out hover:ring-16"
            onClick={() => router.push('/my-e-ticket')}
        >
            <QrCodeIcon className="mx-2 h-8 w-8" />
            <h1>My E-Ticket</h1>
        </button>
    );
};
export default MyETicket;
