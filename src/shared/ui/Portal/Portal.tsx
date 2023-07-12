import {type ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
	children: ReactNode;
	parent?: HTMLElement;
}
const Portal = (props: PortalProps) => {
	const {parent = document.body, children} = props;
	return (
		createPortal(children, parent)
	);
};

export default Portal;
