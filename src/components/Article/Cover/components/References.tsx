import { ExtLink } from './ExtLink';

export const References = ({ links }: { links: string[] }) => {
    return (
        <ul>
            {links.map((link) => (
                <li key={link}>
                    <ExtLink href={link} />
                </li>
            ))}
        </ul>
    );
};
