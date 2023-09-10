import {classNames} from 'shared/lib/classNames';
import {Modal} from 'shared/ui/Modal/Modal';
import {LoginFormAsync} from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';
import {Suspense} from 'react';
import {Loader} from 'widgets/Loader';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const {className = '', isOpen, onClose} = props;
	return (
		<Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync onSuccess={onClose}/>
			</Suspense>
		</Modal>
	);
};
