import {type ButtonHTMLAttributes, type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	INVERTEDBACKGROUND = 'invertedBackground',
}

export enum ButtonSizes {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSizes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
	const {className = '', theme = ButtonTheme.BACKGROUND, children, square = false, size = ButtonSizes.M, ...restProps} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};

	return (
		<button className={classNames(`${cls.button}`, mods, [className, cls[theme], cls[size]])}
			{...restProps}
		>
			{children}
		</button>
	);
};

