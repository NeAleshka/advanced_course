import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
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
