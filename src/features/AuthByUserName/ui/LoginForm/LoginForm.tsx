import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Loader, LoaderTheme } from 'widgets/Loader';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import {
    getLoginError, getLoginLoading, getLoginPassword, getLoginUserName,
} from '../../model/selectors';

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,

};

const LoginForm = memo(({ className = '', onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const changeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const changePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const sendAuthData = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader asyncReducers={initialReducers} removeAfterUnmount={false}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <div>{t('Authorization')}</div>
                {error && <Text text={error} theme={ThemeText.ERROR} />}
                {isLoading ? <Loader theme={LoaderTheme.CLEAR} />
                    : (
                        <>
                            <Input
                                type="text"
                                className={`${cls.login} ${cls.login_input}`}
                                value={username}
                                onChange={changeUsername}
                            />
                            <Input
                                type="text"
                                className={cls.login_input}
                                value={password}
                                onChange={changePassword}
                            />
                            <Button
                                theme={ButtonTheme.INVERTEDCLEAR}
                                onClick={() => {
                                    sendAuthData().then();
                                }}
                            >
                                {t('Sing Up')}
                            </Button>
                        </>
                    )}

            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
