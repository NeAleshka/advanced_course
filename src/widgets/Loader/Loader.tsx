import './Loader.scss';
import {classNames} from 'shared/lib/classNames';

type LoaderProps = {
	className?: string;
};

export const Loader = ({className = ''}: LoaderProps) => (

	<div className={'page_loader'}>
		<div className={classNames('lds-roller', {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

);
