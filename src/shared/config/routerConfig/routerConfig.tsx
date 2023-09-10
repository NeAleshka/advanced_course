import {type RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_FOUND = 'not_fond',
}

export const RouterPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RouterPath.main,
		element: <MainPage/>,
	},
	[AppRoutes.ABOUT]: {
		path: RouterPath.about,
		element: <AboutPage/>,
	},
	[AppRoutes.PROFILE]: {
		path: RouterPath.profile,
		element: <ProfilePage/>,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RouterPath.not_fond,
		element: <NotFoundPage/>,
	},

};
