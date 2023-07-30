import {classNames} from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByusername/ui/LoginModal/LoginModal';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';
import {loginActions} from 'features/AuthByUserName';

type NavBarProps = {
	className?: string[];
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const authData = useSelector(getUserAuthData);
	const closeModal = () => {
		setIsOpen(false);
	};

	const dispatch = useDispatch();
	const onLogOut = useCallback(() => {
		dispatch(loginActions.clearLoginData());
		dispatch(userActions.logOut());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={classNames(`${classes.navBar}`, {}, className)}>
				<div className={classNames(`${classes.links}`)}>
					<Button theme={ButtonTheme.INVERTEDCLEAR} onClick={onLogOut}>{t('Logout')}</Button>
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(`${classes.navBar}`, {}, className)}>
			<div className={classNames(`${classes.links}`)}>
				<LoginModal isOpen={isOpen} onClose={closeModal}/>
				<Button theme={ButtonTheme.INVERTEDCLEAR} onClick={() => {
					setIsOpen(true);
				}}>{t('Sing Up')}</Button>
			</div>
		</div>
	);
};

