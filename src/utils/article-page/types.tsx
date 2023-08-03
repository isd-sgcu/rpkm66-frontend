import React, { ReactNode } from 'react';

export interface ArticleDetail {
    //Interface for mock data of acticle page
    topic: string;
    icon: React.ElementType;
    preinfo: string;
    fullinfo: ReactNode;
    img: string;
}
