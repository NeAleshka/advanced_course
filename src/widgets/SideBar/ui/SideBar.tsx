import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSizes, ButtonTheme } from 'shared/ui/Button/Button';
import { getSideBarItemList } from 'widgets/SideBar/model/items';
import { SideBarItem } from 'widgets/SideBar/ui/SideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBar.module.scss';

type SideBarProps = {
	className?: string;
};

export const SideBar = memo((props: SideBarProps) => {
    const { className = '' } = props;
    const [collapsed, setCollapsed] = useState(true);
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList = getSideBarItemList(userData);
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const listItem = useMemo(
        () => sidebarItemsList.map((item) => <SideBarItem item={item} key={item.link} collapsed={collapsed} />),
        [collapsed, sidebarItemsList],
    );
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.links}>
                {listItem}
            </div>

            <Button
                square
                className={cls.collapsedBtn}
                onClick={toggleCollapsed}
                theme={ButtonTheme.INVERTEDBACKGROUND}
                data-testid="toggle-btn"
                size={ButtonSizes.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
