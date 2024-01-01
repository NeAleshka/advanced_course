import ArticleDetails from 'entities/Article/ui/ArticleDetails';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserComments } from 'entities/Comment/model/slice';
import { getUserCommentsLoading } from 'entities/Comment/model/selectors';
import CommentList from 'entities/Comment/ui/CommentList';
import { memo, useEffect } from 'react';
import { fetchUserCommentsById } from 'entities/Comment/model/services';

const ArticleDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const userComments = useSelector(getUserComments.selectAll);
    const articleCommentsLoading = useSelector(getUserCommentsLoading);
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchUserCommentsById(id || ''));
        }
    }, [dispatch, id]);

    if (!id) {
        return (
            <div>
                {t('Article')}
            </div>
        );
    }
    return (
        <>
            <ArticleDetails id={id} />
            <CommentList comments={userComments} isLoading={articleCommentsLoading} />
        </>
    );
};

export default memo(ArticleDetailsPage);
