import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { fetchArticlesById } from 'entities/Article/model/services';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleLoading } from 'entities/Article/model/selectors';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from 'pages/ArticlePage/ui/ArticlePage.module.scss';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { articleReducers } from '../model/slice';

const reducers:ReducersList = {
    articleDetails: articleReducers,
};
const ArticleDetails = () => {
    const { id: articleId } = useParams();
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = useSelector(getArticleLoading);

    useEffect(() => {
        dispatch(fetchArticlesById(articleId || '1'));
    }, [articleId, dispatch]);

    let content;

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
        content = <Text text={error} theme={ThemeText.ERROR} title="Произошла ошибка при загрузке статей" />;
    }

    if (article) {
        content = (
            <div>{article.title}</div>
        );
    }
    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div>
                Article details
                <div>
                    {content}
                </div>
            </div>
        </DynamicModuleLoader>

    );
};

export default ArticleDetails;
