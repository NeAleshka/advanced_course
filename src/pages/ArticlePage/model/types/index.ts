import { Article } from 'entities/Article/types/article';

export interface ArticlesStateSchema {
    data?:Article[]
    error?:string
    isLoading:boolean
}
