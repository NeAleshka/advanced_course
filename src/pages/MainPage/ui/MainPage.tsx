import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('main_page')}
        </div>
    );
};

export default MainPage;
