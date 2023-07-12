import cls from './Modal.module.scss';
import {classNames} from 'shared/lib/classNames';
import {type ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import Portal from 'shared/ui/Portal/Portal';

interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = ({className = '', children, isOpen = false, onClose}: ModalProps) => {
	const [isClosed, setIsClosed] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const closeModal = useCallback(() => {
		if (onClose) {
			setIsClosed(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosed(false);
			}, 300);
		}
	}, [onClose]);

	const closeKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsClosed(true);
		}
	}, []);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', closeKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', closeKeyDown);
		};
	}, [closeKeyDown, isOpen]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.closed]: isClosed,
	};
	return (
		<Portal >
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeModal}>
					<div className={cls.content} onClick={event => {
						event.stopPropagation();
					}}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
