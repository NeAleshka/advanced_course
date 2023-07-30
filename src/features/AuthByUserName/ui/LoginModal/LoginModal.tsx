import cls from './LoginModal.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Modal, type ModalProps} from 'shared/ui/Modal/Modal';
import {LoginForm} from '../LoginForm/LoginForm';

interface LoginModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
	className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
	const {className = '', isOpen, onClose} = props;
	return (
		<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
			<LoginForm/>
		</Modal>
	);
};
