import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetails } from 'pages/ArticleDetailsPage';

export type AppRouterProps = RouteProps &{
    authOnly?:boolean
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
    ARTICLE='article',
    ARTICLE_DETAILS='article_details',
	NOT_FOUND = 'not_fond',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DETAILS]: '/article/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ARTICLE]: {
        path: RouterPath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RouterPath.article_details}:id`,
        element: <ArticleDetails />,
        authOnly: true,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_fond,
        element: <NotFoundPage />,
    },

};
