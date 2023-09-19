import './Loader.scss';
import { classNames } from 'shared/lib/classNames';

export enum LoaderTheme {
    INVERTED = 'inverted',
    CLEAR = 'clear',
}
type LoaderProps = {
	className?: string;
	theme?: LoaderTheme;
};

export const Loader = ({ className = '', theme = LoaderTheme.INVERTED }: LoaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
        <div className={classNames('', {}, [className, theme])} />
    </div>
);
