import {classNames} from "shared/lib/classNames";
import classes from './NavBar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string[]
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(`${classes.navBar}`, {}, className)}>
            <ThemeSwitcher/>
            <div className={classNames(`${classes.links}`)}>
                <AppLink theme={AppLinkTheme.PRIMARY} style={{marginRight: '15px'}} to={'/about'}>About</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
            </div>
        </div>
    );
};

