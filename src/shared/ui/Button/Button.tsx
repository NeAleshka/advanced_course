import {type ButtonHTMLAttributes, memo, type ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	INVERTEDBACKGROUND = 'invertedBackground',
	INVERTEDCLEAR = 'invertedClear',
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
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(({className = '', theme = ButtonTheme.BACKGROUND, size = ButtonSizes.M, square = false, children, ...restProps}: ButtonProps) => {
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
});

