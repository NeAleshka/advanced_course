import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {getLoginState} from '../../model/selectors/getLoginState';
import {loginActions} from 'features/AuthByUserName';
import {memo, useCallback} from 'react';
import {loginByUsername} from 'features/AuthByUserName';
import {Loader, LoaderTheme} from 'widgets/Loader/Loader';
import {Input} from 'shared/ui/Input/Input';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import {Text, ThemeText} from 'shared/ui/Text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({className = ''}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const {username, password, isLoading, error} = useSelector(getLoginState);
	const changeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const changePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const sendAuthData = useCallback(() => {
		dispatch(loginByUsername({username, password}));
		dispatch(loginActions.clearLoginData());
	}, [dispatch, password, username]);
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<div>{t('Authorization')}</div>
			{error && <Text text={error} theme={ThemeText.ERROR}/>}
			{isLoading ? <Loader theme={LoaderTheme.CLEAR}/>
				: <>
					<Input
						type={'text'}
						className={`${cls.login} ${cls.login_input}`}
						value={username}
						onChange={changeUsername}
					/>
					<Input
						type={'text'}
						className={cls.login_input}
						value={password}
						onChange={changePassword}
					/>
					<Button theme={ButtonTheme.INVERTEDCLEAR}
						onClick={() => {
							sendAuthData();
						}}
					>{t('Sing Up')}</Button>
				</>
			}

		</div>
	);
});
