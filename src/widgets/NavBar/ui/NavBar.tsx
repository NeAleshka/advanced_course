import {classNames} from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

type NavBarProps = {
	className?: string[];
};

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames(`${classes.navBar}`, {}, className)}>
			<div className={classNames(`${classes.links}`)}>
				<Modal isOpen={isOpen} onClose={() => {
					setIsOpen(false);
				}}>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis cumque ex ipsa, magnam mollitia nisi nostrum perferendis temporibus voluptatem.
					</div>
				</Modal>
				<Button theme={ButtonTheme.INVERTEDCLEAR} onClick={() => {
					setIsOpen(true);
				}}>{t('Sing Up')}</Button>
			</div>
		</div>
	);
};

