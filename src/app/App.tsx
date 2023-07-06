import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar/SideBar';
import {Suspense, useState} from 'react';
import {Loader} from 'widgets/Loader/Loader';
import {Modal} from 'shared/ui/Modal/Modal';

const App = () => {
	const {theme} = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<Loader/>}>
				<Modal isOpen={isOpen} onClose={() => {
					setIsOpen(false);
				}}>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis cumque ex ipsa, magnam mollitia nisi nostrum perferendis temporibus voluptatem.
					</div>
				</Modal>
				<button onClick={() => {
					setIsOpen(true);
				}}>toggle</button>
				<NavBar/>
				<div className={'content-page'}>
					<SideBar/>
					<AppRouter/>
				</div>
			</Suspense>

		</div>
	);
};

export default App;
