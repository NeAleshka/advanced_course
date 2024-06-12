import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article/types/article';

export enum ArticlesView {
    BIG='BIG',
    SMALL='SMALL'
}

export interface ArticlesStateSchema extends EntityState<Article>{
    error?:string
    isLoading:boolean
    view:ArticlesView
    // pagitation
    page:number
    limit?:number
    hasMore:boolean
}
