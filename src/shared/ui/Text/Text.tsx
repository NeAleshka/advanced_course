import { classNames } from 'shared/lib/classNames';
import { HTMLAttributes, memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextSize {
	M='size_m',
	L='size_l',
}

interface TextProps extends Omit <HTMLAttributes<HTMLSpanElement>, 'size'|'className'> {
	title?: string;
	text?: string;
	className?: string;
	theme?: ThemeText;
    size?: TextSize;
}

export const Text = memo(({
    className = '', text, title, theme = ThemeText.PRIMARY, size = TextSize.M, ...restProps
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size]])} {...restProps}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
