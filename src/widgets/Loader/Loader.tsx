import './Loader.scss';
import {classNames} from 'shared/lib/classNames';

type LoaderProps = {
	className?: string;
	theme?: LoaderTheme;
};

export enum LoaderTheme {
	INVERTED = 'inverted',
	CLEAR = 'clear',
}

export const Loader = ({className = '', theme = LoaderTheme.INVERTED}: LoaderProps) => (
	<div className={classNames('lds-roller', {}, [className])}>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
		<div className={classNames('', {}, [className, theme])}></div>
	</div>
);
