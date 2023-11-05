import { classNames } from 'shared/lib/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { getAllArticles, getArticlesError, getArticlesLoading } from 'pages/ArticlePage/model/selectors';
import AppLink from 'shared/ui/AppLink/AppLink';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesReducers } from 'pages/ArticlePage/model/slice';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticles } from '../model/services';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
    className?:string;
}

const reducers:ReducersList = {
    articles: articlesReducers,
};
const ArticlePage = ({ className = '' }:ArticlePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getAllArticles);
    const isLoading = useSelector(getArticlesLoading);
    const error = useSelector(getArticlesError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticles());
        }
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton width={400} height={20} className={cls.skeletonItem} />
                <Skeleton width={400} height={20} className={cls.skeletonItem} />
                <Skeleton width={400} height={20} className={cls.skeletonItem} />
            </div>
        );
    }

    if (error) {
        content = <Text text={error} theme={ThemeText.ERROR} title="Произошла ошибка при загрузке статей" />;
    }

    if (articles?.length) {
        content = (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {articles?.map(({ id, title }) => <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>)}
            </div>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.Article, {}, [className])}
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            >
                <div>{t('Article')}</div>
                <div>
                    {content}
                </div>
            </div>
        </DynamicModuleLoader>

    );
};
export default memo(ArticlePage);
