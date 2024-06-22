import { useTranslation } from 'react-i18next';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {t('main_page')}
        </PageWrapper>
    );
};

export default MainPage;
