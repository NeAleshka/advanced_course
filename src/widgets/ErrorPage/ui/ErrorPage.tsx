import cls from './ErrorPage.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({className = ''}: ErrorPageProps) => {
	const {t} = useTranslation();
	const reload = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.error_page, {}, [className])}>
			{t('unexpected error')}
			<Button onClick={reload}>{t('reload_page')}</Button>
		</div>
	);
};
