import { join } from 'path';
import fs from 'fs';

export async function getStaticProps() {
    const pp = join(process.cwd(), '/src/docs/pp.txt');
    const fileContents = fs.readFileSync(pp, 'utf8');

    // const mdxSource = await serialize(fileContents);
    return { props: { source: fileContents } };
}

const PrivacyPolicy = ({ source }: { source: any }) => {
    return (
        <div className="h-full w-full">
            <article className="prose w-full list-disc whitespace-pre-line bg-purple-400/75 p-14 leading-loose backdrop-blur-lg">
                <div className="mx-auto w-full max-w-lg px-2">{source}</div>
            </article>
        </div>
    );
};

export default PrivacyPolicy;
