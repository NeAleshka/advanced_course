import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import type React from 'react';
import { HomeIcon, ListIcon, ProfileIcon } from '../../../shared/assets/icons';

export interface ISideBarItem {
	link: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	text: string;
	theme?: AppLinkTheme;
    authOnly?: boolean;
}

export const SideBarItemList: ISideBarItem[] = [
    {
        Icon: HomeIcon,
        link: RouterPath.main,
        text: 'main_page',
        theme: AppLinkTheme.SECONDARY,
    },
    {
        Icon: ProfileIcon,
        link: RouterPath.profile,
        text: 'profile_page',
        theme: AppLinkTheme.SECONDARY,
        authOnly: true,
    },
    {
        Icon: ListIcon,
        link: RouterPath.about,
        text: 'about_page',
        theme: AppLinkTheme.SECONDARY,
    },
];
