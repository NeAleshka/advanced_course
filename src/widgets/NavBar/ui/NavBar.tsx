import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import classes from './NavBar.module.scss';

type NavBarProps = {
	className?: string;
};

export const NavBar = memo((props: NavBarProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(`${classes.navBar}`, {}, [className])}>
                <div className={classNames(`${classes.links}`)}>
                    <Button theme={ButtonTheme.INVERTEDCLEAR} onClick={onLogOut}>{t('Logout')}</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(`${classes.navBar}`, {}, [className])}>
            <div className={classNames(`${classes.links}`)}>
                {isOpen && <LoginModal isOpen={isOpen} onClose={closeModal} />}
                <Button
                    theme={ButtonTheme.INVERTEDCLEAR}
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    {t('Sing Up')}
                </Button>
            </div>
        </div>
    );
});
