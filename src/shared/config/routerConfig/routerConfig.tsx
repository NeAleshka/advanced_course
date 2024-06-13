import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetails } from 'pages/ArticleDetailsPage';
import { ReactNode } from 'react';

export type AppRouterProps = Omit<RouteProps, 'element,path'> & {
    authOnly?: boolean
    title: string
    element: ReactNode
    path: string
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_fond',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.ARTICLE]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/article/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.NOT_FOUND]: '/*',
};

export const routerConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
        title: 'Главная',
    },
    [AppRoutes.ARTICLE]: {
        path: RouterPath.article,
        element: <ArticlePage />,
        authOnly: true,
        title: 'Статьи',
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RouterPath.article_details}:id`,
        element: <ArticleDetails />,
        authOnly: true,
        title: 'Статья',
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
        title: 'О нас',
    },
    [AppRoutes.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
        title: 'Профиль',
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_fond,
        element: <NotFoundPage />,
        title: 'Страница не найдена',
    },

};
