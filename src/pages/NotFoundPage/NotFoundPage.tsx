import cls from './NotFoundPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';

export const NotFoundPage = () => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.NotFoundPage)}>
			{t('not_found_page')}
		</div>
	);
};

