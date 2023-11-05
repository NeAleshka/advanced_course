export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface IArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    title: string
    paragraphs:string[]
}

export interface IArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code:string
}

export interface IArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src:string
    title?:string
}

export type ArticleBlock =IArticleTextBlock| IArticleCodeBlock |IArticleImageBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}

export interface ArticleDetailsSchema {
    isLoading:boolean
    error?:string
    data?: Article
}
