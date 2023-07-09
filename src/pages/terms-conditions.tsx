import { join } from 'path';
import fs from 'fs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function getStaticProps() {
    const pp = join(process.cwd(), '/src/docs/tc.txt');
    const fileContents = fs.readFileSync(pp, 'utf8');

    return { props: { source: fileContents } };
}

const PrivacyPolicy = ({ source }: { source: any }) => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <article className="prose w-full list-disc whitespace-pre-line bg-purple/75 p-14 leading-loose backdrop-blur-lg">
                <div className="mx-auto w-full max-w-lg px-2">{source}</div>
            </article>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
