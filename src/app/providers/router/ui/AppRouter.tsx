import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config/routerConfig/routerConfig';
import {FullPageLoader} from 'app/App';

const AppRouter = () => (
	<Suspense fallback={<FullPageLoader/>}>
		<Routes>
			{
				Object.values(routerConfig).map(({path, element}) =>
					<Route path={path} element={<div className={'page-wrapper'}>{element}</div>} key={path}/>,
				)
			}
		</Routes>
	</Suspense>
);

export default AppRouter;
