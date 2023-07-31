import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {getLoginError, getLoginLoading, getLoginPassword, getLoginUserName} from '../../model/selectors';
import {memo, useCallback} from 'react';
import {Loader, LoaderTheme} from 'widgets/Loader/Loader';
import {Input} from 'shared/ui/Input/Input';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import {Text, ThemeText} from 'shared/ui/Text/Text';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUserName/loginByUserName';
import {DynamicModuleLoader, type ReducersList} from 'shared/lib/components/DynamicModuleLoader';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({className = ''}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
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
	const sendAuthData = useCallback(() => {
		dispatch(loginByUsername({username, password}));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader asyncReducers={initialReducers}>
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
		</DynamicModuleLoader>

	);
});

export default LoginForm;
