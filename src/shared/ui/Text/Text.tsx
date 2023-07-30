import cls from './Text.module.scss';
import {classNames} from 'shared/lib/classNames';

interface TextProps {
	className?: string;
}

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

export const Text = ({className = '', text, title, theme = ThemeText.PRIMARY}: TextProps) => (
	<div className={classNames(cls.Text, {}, [className, cls[theme]])}>
		{title && <p className={cls.title}>{title}</p>}
		{text && <p className={cls.text}>{text}</p>}
	</div>
);
