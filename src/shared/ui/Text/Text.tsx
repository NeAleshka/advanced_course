import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface TextProps {
	title?: string;
	text?: string;
	className?: string;
	theme?: ThemeText;
}

export const Text = memo(({
    className = '', text, title, theme = ThemeText.PRIMARY,
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
