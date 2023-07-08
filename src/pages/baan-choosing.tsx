import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BannSelection = () => {
    return (
        <>
            <Navbar />
            <div className="w-screen h-screen">
                <div className="text-xl font-ibm flex lg:flex-row flex-col text-white relative z-0 overflow-clip translate-y-20">
                    <div className="lg:ml-auto lg:mr-4"></div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BannSelection;
