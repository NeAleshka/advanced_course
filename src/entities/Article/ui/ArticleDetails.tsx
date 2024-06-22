import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { fetchArticlesById } from 'entities/Article/model/services';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleLoading } from 'entities/Article/model/selectors';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from 'pages/ArticlePage/ui/ArticlePage.module.scss';
import { Text, TextSize, ThemeText } from 'shared/ui/Text/Text';
import { Calendar, Views } from 'shared/assets/icons';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../types/article';
import ArticleCodeBlock from './ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlock from './ArticleImageBlock/ArticleImageBlock';
import ArticleTextBlock from './ArticleTextBlock/ArticleTextBlock';
import { articleReducers } from '../model/slice';

const reducers: ReducersList = {
    articleDetails: articleReducers,
};

interface ArticleDetailsProps {
    id: string;
}

const ArticleDetails = ({ id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = useSelector(getArticleLoading);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchArticlesById(id || ''));
    }, [id, dispatch]);

    let content;

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE: {
            return <ArticleCodeBlock key={block.id} block={block} className={cls.articleBlock} />;
        }
        case ArticleBlockType.IMAGE: {
            return <ArticleImageBlock key={block.id} block={block} className={cls.articleBlock} />;
        }
        case ArticleBlockType.TEXT: {
            return <ArticleTextBlock key={block.id} block={block} className={cls.articleBlock} />;
        }
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={`${cls.skeletonItem} ${cls.skeletonAvatar}`}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={`${cls.skeletonItem} ${cls.title}`} width="60%" height={32} />
                <Skeleton className={cls.skeletonItem} width="25%" height={24} />
                <Skeleton className={cls.skeletonItem} width="100%" height={200} />
                <Skeleton className={cls.skeletonItem} width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = <Text theme={ThemeText.ERROR} title="Произошла ошибка при загрузке статей" />;
    }
    if (article) {
        content = (
            <div className={cls.Article}>
                <img src={article?.img} alt="avatar" className={`${cls.skeletonAvatar} ${cls.avatar}`} />
                <div className={cls.textArticleWrap}>
                    <Text
                        title={article?.title}
                        size={TextSize.L}
                    />
                    <Text text={article?.subtitle} />
                    <div title={t('views')} className={cls.infoWrap}>
                        <Icon Svg={Views} className={cls.viewsIcon} />
                        <Text text={`${article.views}`} />
                    </div>
                    <div title={t('createdAt')} className={cls.infoWrap}>
                        <Icon className={cls.viewsIcon} Svg={Calendar} />
                        <Text text={`${article.createdAt}`} />
                    </div>
                    {
                        article.blocks.map(renderBlock)
                    }
                </div>
            </div>
        );
    }
    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            <div>
                {content}
            </div>

        </DynamicModuleLoader>

    );
};

export default ArticleDetails;
