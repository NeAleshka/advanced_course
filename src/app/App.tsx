import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar/SideBar';
import {Suspense} from 'react';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={''}>
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
