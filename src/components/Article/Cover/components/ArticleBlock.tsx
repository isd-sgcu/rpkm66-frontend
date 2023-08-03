import { ArticleDetail } from '@/utils/article-page/types';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface ArticleBlockProps {
    article: ArticleDetail;
    index: number;
}

function ArticleBlock({ article, index }: ArticleBlockProps) {
    const [expanded, setExpanded] = useState(false);
    const fullInfoRef = useRef<HTMLDivElement>(null);

    function handleButtonClick() {
        setExpanded(!expanded);
    }

    return (
        <div
            key={index}
            className="transition-height mb-5 flex w-[90vw] max-w-2xl flex-col rounded-lg bg-white p-6 text-[#333333] duration-300"
        >
            <div
                key={index}
                className="mb-2 flex cursor-pointer select-none font-bold"
                onClick={handleButtonClick}
            >
                {article.topic}
                <article.icon className="ml-1 h-5 w-5" />
            </div>
            <div
                className={clsx(
                    expanded ? 'hidden' : 'visible',
                    'prose cursor-pointer select-none text-left opacity-80'
                )}
                onClick={handleButtonClick}
            >
                {article.preinfo}
            </div>
            <div
                className="overflow-hidden text-left"
                ref={fullInfoRef}
                style={{
                    transition: 'max-height 0.3s ease-in-out',
                    maxHeight: expanded
                        ? fullInfoRef.current?.scrollHeight + 'px'
                        : '0',
                }}
            >
                {article.img && (
                    <Image
                        src={article.img}
                        width={200}
                        height={200}
                        alt={article.topic}
                        className="my-4 w-full"
                    />
                )}
                {article.fullinfo}
            </div>
        </div>
    );
}

export default ArticleBlock;
