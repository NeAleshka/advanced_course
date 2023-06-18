import {classNames} from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

type NavBarProps = {
	className?: string[];
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation();
	return (
		<div className={classNames(`${classes.navBar}`, {}, className)}>
			<div className={classNames(`${classes.links}`)}>
				<AppLink theme={AppLinkTheme.PRIMARY} style={{marginRight: '15px'}} to={'/about'}>{t('about_page')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('main_page')}</AppLink>
			</div>
		</div>
	);
};

