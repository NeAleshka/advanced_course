import { User } from 'entities/User';
import { EntityState } from '@reduxjs/toolkit';

export interface UserComment {
    id:string
    text:string
    articleId:string
    userId:string
    user:User
}

export interface UserCommentSchema extends EntityState<UserComment>{
    error?:string
    isLoading:boolean
}
