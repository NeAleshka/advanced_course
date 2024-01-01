import { UserComment } from '../model/types';

interface Props {
    comment:UserComment
    isLoading?:boolean
}

const CommentCard = ({ comment, isLoading }:Props) => {
    const {
        id, userId, text, articleId,
    } = comment;

    return (
        <>
            <div>{text}</div>
        </>
    );
};
export default CommentCard;
