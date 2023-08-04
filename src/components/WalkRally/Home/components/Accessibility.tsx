import { CameraIcon, QrCodeIcon } from '@heroicons/react/24/solid';
import Container from './Container';
import Link from 'next/link';
import Button from './Button';

const Accessibility = () => {
    const hasPlayed = localStorage.getItem('hasPlayed');

    return (
        <Container className="my-6 space-y-6">
            <div>
                <Link href={hasPlayed ? '/e-ticket' : '/game'}>
                    <Button color="pink">
                        <QrCodeIcon className="mx-2 h-8 w-8" />
                        <h1>E-Ticket</h1>
                    </Button>
                </Link>
            </div>
            <div>
                <Link href="/scan">
                    <Button color="green">
                        <CameraIcon className="mx-2 h-6 w-6" />
                        <h1>Check-in / Check-out / Walk Rally</h1>
                    </Button>
                </Link>
            </div>
        </Container>
    );
};
export default Accessibility;
