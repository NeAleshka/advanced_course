import cls from './LoginModal.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Modal, type ModalProps} from 'shared/ui/Modal/Modal';
import {LoginFormAsync} from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';
import {Suspense} from 'react';
import {Loader} from 'widgets/Loader/Loader';

interface LoginModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
	className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
	const {className = '', isOpen, onClose} = props;
	return (
		<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync/>
			</Suspense>
		</Modal>
	);
};
