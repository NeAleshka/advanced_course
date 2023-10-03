import i18n from 'shared/config/i18n';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoryContext, StoryFn } from '@storybook/react';

const WithI18next = (Story:StoryFn, { globals }:StoryContext) => {
    const { locale } = globals;

    useEffect(() => {
        i18n.changeLanguage(locale).then();
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
export default WithI18next;
