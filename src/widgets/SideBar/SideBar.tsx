import cls from './SideBar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher';
import {Button, ButtonSizes, ButtonTheme} from 'shared/ui/Button/Button';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {RouterPath} from 'shared/config/routerConfig/routerConfig';
import {HomeIcon, ListIcon} from '../../shared/assets/icons';

type SideBarProps = {
	className?: string;
};

export const SideBar = (props: SideBarProps) => {
	const {className = ''} = props;
	const {t} = useTranslation();
	const [collapsed, setCollapsed] = useState(true);
	const toggleCollapsed = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [
				className,
			])}
		>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.PRIMARY} to={RouterPath.main} className={cls.link}>
					<HomeIcon className={cls.link_icon}/>
					<span className={cls.link_name}>{t('about_page')}</span>
				</AppLink>
				<AppLink className={cls.link} theme={AppLinkTheme.PRIMARY} to={RouterPath.about}>
					<ListIcon className={cls.link_icon} width={25}/>
					<span className={cls.link_name}>{t('main_page')}</span>
				</AppLink>

			</div>

			<Button square={true} className={cls.collapsedBtn} onClick={toggleCollapsed}
				theme={ButtonTheme.INVERTEDBACKGROUND} data-testid={'toggle-btn'}
				size={ButtonSizes.XL}>{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};
