import ArticleDetails from 'entities/Article/ui/ArticleDetails';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserComments } from 'entities/Comment/model/slice';
import { getUserCommentsLoading } from 'entities/Comment/model/selectors';
import CommentList from 'entities/Comment/ui/CommentList';
import { memo, useEffect } from 'react';
import { fetchUserCommentsById } from 'entities/Comment/model/services';
import { Text } from 'shared/ui/Text/Text';
import AddCommentForm from 'features/addComment/ui/addCommentForm';
import { getAddCommentFormText } from 'features/addComment/model/selectors';
import { addArticleComment } from 'entities/Article/model/services';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';

const ArticleDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const userComments = useSelector(getUserComments.selectAll);
    const articleCommentsLoading = useSelector(getUserCommentsLoading);
    const newComment = useSelector(getAddCommentFormText);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchUserCommentsById(id || ''));
        }
    }, [dispatch, id]);

    const sendArticleComment = () => {
        dispatch(addArticleComment(newComment || ''));
    };

    if (!id) {
        return (
            <div>
                {t('Article')}
            </div>
        );
    }
    return (
        <PageWrapper>
            <ArticleDetails id={id} />
            <Text title={t('comments')} />
            <AddCommentForm sendComment={sendArticleComment} />
            <CommentList comments={userComments} isLoading={articleCommentsLoading} />
        </PageWrapper>
    );
};

export default memo(ArticleDetailsPage);
