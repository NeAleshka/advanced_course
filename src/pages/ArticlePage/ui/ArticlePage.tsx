import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
    className?:string;
}

const ArticlePage = ({ className = '' }:ArticlePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Article, {}, [className])}>
            <div>{t('Article')}</div>
        </div>
    );
};
export default memo(ArticlePage);
