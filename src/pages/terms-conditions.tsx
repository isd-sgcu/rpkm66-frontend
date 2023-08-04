import { join } from 'path';
import fs from 'fs';

export async function getStaticProps() {
    const pp = join(process.cwd(), '/src/docs/tc.txt');
    const fileContents = fs.readFileSync(pp, 'utf8');

    return { props: { source: fileContents } };
}

const PrivacyPolicy = ({ source }: { source: any }) => {
    return (
        <article className="prose flex w-full list-disc whitespace-pre-line bg-purple-400/75 p-14 leading-loose text-white backdrop-blur-lg">
            <div className="mx-auto w-full max-w-lg px-2">{source}</div>
        </article>
    );
};

export default PrivacyPolicy;
