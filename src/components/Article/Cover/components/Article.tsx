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
    return (
        <div>
            {Detail.map((article: ArticleDetail, index: number) => (
                <ArticleBlock article={article} index={index} key={index} />
            ))}
        </div>
    );
};

export default Article;
