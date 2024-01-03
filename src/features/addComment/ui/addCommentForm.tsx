import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { addCommentActions, addCommentReducers } from 'features/addComment/model/slice/addCommentSlice';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from 'features/addComment/model/selectors';
import cls from './addComment.module.scss';

interface formProps {
    sendComment:(text:string)=>void
}
const reduces:ReducersList = {
    addComment: addCommentReducers,
};

const AddCommentForm = ({ sendComment }:formProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const newComment = useSelector(getAddCommentFormText);
    const changeComment = (comment:string) => {
        dispatch(addCommentActions.setComment(comment));
    };

    const onSendComment = () => {
        changeComment('');
        sendComment(newComment ?? '');
    };

    return (
        <DynamicModuleLoader asyncReducers={reduces}>
            <div className={cls.form}>
                <Input
                    placeholder={t('enterComment')}
                    onChange={(value) => changeComment(value)}
                    value={newComment}
                />
                <Button onClick={onSendComment}>
                    {t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
