/**
 * External Link `<a>` that opens in new tab with correct properties for security
 */
export const ExtLink = ({ href }: { href: string }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {href}
        </a>
    );
};
