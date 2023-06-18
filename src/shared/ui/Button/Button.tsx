import {type ButtonHTMLAttributes, type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
	const {className = '', theme = ButtonTheme.CLEAR, children, ...restProps} = props;

	return (
		<button className={classNames(`${cls.button}`, {}, [className, cls[theme]])}
			{...restProps}
		>
			{children}
		</button>
	);
};

