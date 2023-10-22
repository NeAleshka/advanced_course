import AppLink from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { type ISideBarItem } from 'widgets/SideBar/model/items';
import { classNames } from 'shared/lib/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
	className?: string;
	item: ISideBarItem;
	collapsed: boolean;
}

export const SideBarItem = ({ className = '', item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(`${cls.link} ${className}`, { [cls.collapsed]: collapsed })}
            theme={item.theme}
            to={item.link}
            title={t(`${item.text}`)}
        >
            <item.Icon className={cls.link_icon} width={25} />
            <span className={cls.link_name}>{t(item.text)}</span>
        </AppLink>
    );
};
