import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper className={classNames(cls.NotFoundPage)}>
            {t('not_found_page')}
        </PageWrapper>
    );
};
