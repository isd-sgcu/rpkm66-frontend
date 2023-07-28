import { QueueListIcon } from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ArticleDetail } from '@/utils/article-page/types';
import React from 'react';
import { useState } from 'react';
import ArticleBlock from './ArticleBlock';
import Image from 'next/image';
import czw from '@/public/images/czw.jpg';

//mock data
const Detail: Array<ArticleDetail> = [
    {
        topic: 'ห้องสมุด',
        icon: QueueListIcon,
        preinfo:
            'เกริ่นบทความมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม',
        fullinfo:
            'ข้อความแบบจริงจังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง',
        img: 'images/czw.jpg',
    },
    {
        topic: 'ห้องน้ำ',
        icon: QueueListIcon,
        preinfo:
            'เกริ่นบทความมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม',
        fullinfo:
            'ข้อความแบบจริงจังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง',
        img: 'images/og.png',
    },
    {
        topic: 'คำถาม',
        icon: QuestionMarkCircleIcon,
        preinfo:
            'เกริ่นบทความมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม',
        fullinfo:
            'ข้อความแบบจริงจังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง',
        img: '',
    },
    {
        topic: 'คำถาม',
        icon: QuestionMarkCircleIcon,
        preinfo:
            'เกริ่นบทความมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม',
        fullinfo:
            'ข้อความแบบจริงจังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง',
        img: '',
    },
];

const Article: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    function handleButtonClick() {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            {Detail.map((article: ArticleDetail, index: number) => (
                <ArticleBlock article={article} index={index} key={index} />

                // <button
                //     onClick={handleButtonClick}
                //     key={index}
                //     className="mb-5 flex max-w-2xl flex-col rounded-lg bg-white p-6 text-[#333333]"
                // >
                //     <div key={index} className="flex font-bold">
                //         {article.topic}
                //         <article.icon className="ml-1 h-5 w-5" />
                //     </div>
                //     <div
                //         className={`${
                //             isVisible ? 'hidden' : 'visible'
                //         } break-all text-left opacity-80`}
                //     >
                //         {article.preinfo}
                //     </div>
                //     <div
                //         className={`${
                //             isVisible ? 'visible' : 'hidden'
                //         } h-fit overflow-auto text-left`}
                //     >
                //         <Image
                //             src={czw}
                //             width={200}
                //             height={200}
                //             alt={article.topic}
                //         />
                //         {article.fullinfo}
                //     </div>
                // </button>
            ))}
        </div>
    );
};

export default Article;
