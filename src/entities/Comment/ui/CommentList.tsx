import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { userCommentReducers } from 'entities/Comment/model/slice';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from 'pages/ArticlePage/ui/ArticlePage.module.scss';
import CommentCard from '../ui/CommentCard';
import { UserComment } from '../model/types';

interface Props {
    comments?:UserComment[]
    isLoading?:boolean
}

const reducers:ReducersList = {
    userComments: userCommentReducers,
};
const CommentList = ({ comments, isLoading }:Props) => {
    const { t } = useTranslation();

    const mockContent = (
        isLoading ? <Skeleton className={cls.skeletonItem} width="100%" height={50} />
            : <Text title={t('noComments')} />
    );

    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            {comments?.length
                ? comments.map((comment) => <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />)
                : mockContent}
        </DynamicModuleLoader>
    );
};

export default memo(CommentList);
