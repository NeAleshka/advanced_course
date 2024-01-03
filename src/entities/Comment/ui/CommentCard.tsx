import { Text } from 'shared/ui/Text/Text';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { UserComment } from '../model/types';
import styles from './CommentCard.module.scss';

interface Props {
    comment:UserComment
}

const CommentCard = ({ comment }:Props) => {
    const {
        text, user,
    } = comment;
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                {
                    user.avatar ? (
                        <AppLink to={`${RouterPath.profile}${user.id}`}>
                            <img className={styles.userAvatar} src={user?.avatar} alt="avatar" />
                        </AppLink>
                    ) : null
                }
                <Text title={user?.username} />
            </div>
            <Text title={text} />
        </div>
    );
};
export default CommentCard;
