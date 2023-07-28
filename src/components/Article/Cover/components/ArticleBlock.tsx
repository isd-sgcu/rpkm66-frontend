import { ArticleDetail } from '@/utils/article-page/types';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

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
        <button
            onClick={handleButtonClick}
            key={index}
            className="transition-height mb-5 flex max-w-2xl flex-col rounded-lg bg-white p-6 text-[#333333] duration-300"
        >
            <div key={index} className="flex font-bold">
                {article.topic}
                <article.icon className="ml-1 h-5 w-5" />
            </div>
            <div
                className={`${
                    expanded ? 'hidden' : 'visible'
                } break-all text-left opacity-80`}
            >
                {article.preinfo}
            </div>
            <div
                ref={fullInfoRef}
                style={{
                    maxHeight: expanded
                        ? fullInfoRef.current?.scrollHeight + 'px'
                        : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                }}
            >
                <Image
                    src={article.img}
                    width={200}
                    height={200}
                    alt={article.topic}
                    className="my-4 w-full"
                />
                {article.fullinfo}
            </div>
        </button>
    );
}

export default ArticleBlock;
