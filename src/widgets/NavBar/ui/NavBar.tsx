import {classNames} from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';

type NavBarProps = {
	className?: string[];
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onLogOut = () => {
		closeModal();
		dispatch(userActions.logOut());
	};

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
				{isOpen && <LoginModal isOpen={isOpen} onClose={closeModal}/>}
				<Button theme={ButtonTheme.INVERTEDCLEAR} onClick={() => {
					setIsOpen(true);
				}}>{t('Sing Up')}</Button>
			</div>
		</div>
	);
};

