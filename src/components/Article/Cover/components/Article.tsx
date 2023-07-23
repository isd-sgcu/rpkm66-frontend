import { QueueListIcon } from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ArticleDetail } from '@/utils/article-page/types';
import React from 'react';

//mock data
const Detail: Array<ArticleDetail> = [
    {
        topic: 'ห้องสมุด',
        icon: QueueListIcon,
        preinfo:
            'เกริ่นบทความมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม',
        fullinfo:
            'ข้อความแบบจริงจังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง',
        img: '',
    },
    {
        topic: 'ห้องน้ำ',
        icon: QueueListIcon,
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
    return (
        <div className="">
            {Detail.map((article, index) => (
                <button
                    key={index}
                    className="mb-5 flex w-full flex-col rounded-lg bg-white p-6 text-[#333333]"
                >
                    <div key={index} className="flex font-bold">
                        {article.topic}
                        <article.icon className="ml-1 h-5 w-5" />
                    </div>
                    <div className="break-all text-left opacity-80">
                        {article.preinfo}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Article;
