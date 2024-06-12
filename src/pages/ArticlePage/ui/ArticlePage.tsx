import { classNames } from 'shared/lib/classNames';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import {
    getArticlesError, getArticlesLimit, getArticlesLoading, getArticlesView,
} from 'pages/ArticlePage/model/selectors';
import AppLink from 'shared/ui/AppLink/AppLink';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesReducers, getArticles } from 'pages/ArticlePage/model/slice';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticlesView } from 'pages/ArticlePage/model/types';
import { BigView, SmallView } from 'shared/assets/icons';
import { ArticleViewHandler } from 'features/ArticleViewHandler/ui/ArticleViewHandler';
import { fetchArticles } from '../model/services';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
    className?:string;
}

const reducers:ReducersList = {
    articles: articlesReducers,
};

const changeViewButtons = {
    [ArticlesView.BIG]: <BigView />,
    [ArticlesView.SMALL]: <SmallView />,
};

const ArticlePage = ({ className = '' }:ArticlePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const limit = useSelector(getArticlesLimit);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticles({ page: 1 }));
        }
    }, [dispatch]);

    let content;

    if (isLoading) {
        const skeletonWidth = view === ArticlesView.BIG ? 400 : 200;
        const skeletonHeight = view === ArticlesView.BIG ? 400 : 20;
        content = (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
                <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
                <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
            </div>
        );
    }

    if (error) {
        content = <Text text={error} theme={ThemeText.ERROR} title="Произошла ошибка при загрузке статей" />;
    }

    if (articles?.length) {
        switch (view) {
        case ArticlesView.BIG: content = (
            <div className={cls.articleWrap}>
                {articles?.map(({ id, title, img }) => (
                    <div className={cls.articleBigView} key={id}>
                        <img src={img} alt={title} width={100} height={100} />
                        <AppLink
                            to={`/article/${id}`}
                        >
                            {title}
                        </AppLink>
                    </div>

                ))}
            </div>
        );
            break;

        case ArticlesView.SMALL: content = (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {articles?.map(({ id, title }) => <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>)}
            </div>
        );
            break;
        default: content = (
            <div className={cls.articleWrap}>
                {articles?.map(({ id, title }) => <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>)}
            </div>
        );
        }
    }

    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            <div
                className={classNames(cls.Article, {}, [className])}
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            >
                <div />
                <div style={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >
                    <Text text={t('Article')} style={{ textAlign: 'center', flexGrow: 1 }} />
                    <ArticleViewHandler />

                </div>
                <div style={{ width: '100%' }}>
                    {content}
                </div>
            </div>
        </DynamicModuleLoader>

    );
};
export default memo(ArticlePage);
