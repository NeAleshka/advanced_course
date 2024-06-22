import { useTranslation } from 'react-i18next';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';

const About = () => {
    const { t } = useTranslation('about');
    return (
        <PageWrapper>
            {t('about_page')}
        </PageWrapper>
    );
};

export default About;
