import {Link, type LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {memo, type ReactNode} from 'react';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
	children: ReactNode;
} & LinkProps;

const AppLink = memo(({className = '', to, theme = AppLinkTheme.PRIMARY, children, ...restProps}: AppLinkProps) => (
	<Link to={to} className={classNames(`${cls.link}`, {}, [className, cls[theme]])} {...restProps}>
		{children}
	</Link>
));

export default AppLink;
