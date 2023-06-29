import {Link, type LinkProps} from 'react-router-dom';
import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

const AppLink: FC<AppLinkProps> = props => {
	const {
		className = '',
		to,
		theme = AppLinkTheme.PRIMARY,
		children,
		...restProps
	} = props;
	return (
		<Link to={to} className={classNames(`${cls.link}`, {}, [className, cls[theme]])} {...restProps}>
			{children}
		</Link>
	);
};

export default AppLink;
