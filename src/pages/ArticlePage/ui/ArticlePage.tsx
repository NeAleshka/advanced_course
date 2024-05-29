import { classNames } from 'shared/lib/classNames';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { getArticlesError, getArticlesLoading } from 'pages/ArticlePage/model/selectors';
import AppLink from 'shared/ui/AppLink/AppLink';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesReducers, getArticles } from 'pages/ArticlePage/model/slice';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticlesView } from 'pages/ArticlePage/model/types';
import { BigView, SmallView } from 'shared/assets/icons';
import { Button } from 'shared/ui/Button/Button';
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

    const [view, setView] = useState(ArticlesView.SMALL);
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
        switch (view) {
        case ArticlesView.BIG: content = (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                {articles?.map(({ id, title }) => (
                    <AppLink
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '400px',
                            height: '400px',
                            backgroundColor: 'green',
                        }}
                        key={id}
                        to={`/article/${id}`}
                    >
                        {title}
                    </AppLink>
                ))}
            </div>
        );
            break;

        case ArticlesView.SMALL: content = (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {articles?.map(({ id, title }) => <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>)}
            </div>
        );
            break;
        default: content = (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {articles?.map(({ id, title }) => <AppLink key={id} to={`/article/${id}`}>{title}</AppLink>)}
            </div>
        );
        }
    }
    const handleChangeView = (newView: ArticlesView) => (newView === ArticlesView.SMALL
        ? setView(ArticlesView.BIG) : setView(ArticlesView.SMALL));

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
                    <ArticleViewHandler className="" onViewClick={handleChangeView} view={view} />

                </div>
                <div style={{ width: '100%' }}>
                    {content}
                </div>
            </div>
        </DynamicModuleLoader>

    );
};
export default memo(ArticlePage);
