import { classNames } from 'shared/lib/classNames';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { getArticlesError, getArticlesLoading, getArticlesView } from 'pages/ArticlePage/model/selectors';
import AppLink from 'shared/ui/AppLink/AppLink';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesActions, articlesReducers, getArticles } from 'pages/ArticlePage/model/slice';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticlesView } from 'pages/ArticlePage/model/types';
import { ArticleViewHandler } from 'features/ArticleViewHandler/ui/ArticleViewHandler';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';
import { fetchArticles, fetchNextPageArticles } from '../model/services';
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
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const { unitArticleState } = articlesActions;
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(unitArticleState());
            dispatch(fetchArticles({ page: 1 }));
        }
    }, [dispatch, unitArticleState]);

    let content;

    if (error) {
        content = <Text text={error} theme={ThemeText.ERROR} title="Произошла ошибка при загрузке статей" />;
    }

    const loadNextPart = useCallback(() => {
        dispatch(fetchNextPageArticles());
    }, [dispatch]);

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
            <div style={{
                display: 'flex', alignItems: 'center', flexDirection: 'column',
            }}
            >
                {articles?.map(({ id, title }) => (
                    <div style={{ height: '200px' }}>
                        <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>
                    </div>
                ))}
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
    const skeletonWidth = view === ArticlesView.BIG ? 400 : 200;
    const skeletonHeight = view === ArticlesView.BIG ? 400 : 400;
    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            <PageWrapper
                className={classNames(cls.Article, {}, [className])}
                onScrollEndPage={loadNextPart}
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
                    {isLoading && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
                            <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
                            <Skeleton width={skeletonWidth} height={skeletonHeight} className={cls.skeletonItem} />
                        </div>
                    ) }
                </div>
            </PageWrapper>
        </DynamicModuleLoader>

    );
};
export default memo(ArticlePage);
