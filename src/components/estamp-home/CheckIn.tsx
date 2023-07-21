import { CameraIcon } from '@heroicons/react/24/solid';
const CheckIn = () => {
    return (
        <button
            className="my-2 flex h-12 w-4/5 items-center justify-center rounded-xl bg-green text-xl font-bold ring-8 ring-green/40"
            onClick={() => console.log('GG')}
        >
            <CameraIcon className="mx-2 h-6 w-6" />
            <h1>Check-in / Check-out</h1>
        </button>
    );
};
export default CheckIn;
