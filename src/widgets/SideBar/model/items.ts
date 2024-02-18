import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import type React from 'react';
import { User } from 'entities/User';
import {
    Article, HomeIcon, ListIcon, ProfileIcon,
} from '../../../shared/assets/icons';

export interface ISideBarItem {
	link: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	text: string;
	theme?: AppLinkTheme;
    authOnly?: boolean;
}

export const getSideBarItemList = (userData?:User) => {
    const items: ISideBarItem[] = [
        {
            Icon: HomeIcon,
            link: RouterPath.main,
            text: 'main_page',
            theme: AppLinkTheme.SECONDARY,
        },

        {
            Icon: ListIcon,
            link: RouterPath.about,
            text: 'about_page',
            theme: AppLinkTheme.SECONDARY,
        },

    ];
    if (userData) {
        items.push(
            {
                Icon: ProfileIcon,
                link: RouterPath.profile + userData.id,
                text: 'profile_page',
                theme: AppLinkTheme.SECONDARY,
                authOnly: true,
            },
            {
                Icon: Article,
                link: RouterPath.article,
                text: 'Article',
                theme: AppLinkTheme.SECONDARY,
                authOnly: true,
            },
        );
    }
    return items;
};
