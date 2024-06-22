import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouterProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { FullPageLoader } from 'app/App';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithAuth = useCallback((route:AppRouterProps) => {
        const element = (
            <Suspense fallback={<FullPageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Routes>
            { Object.values(routerConfig).map(renderWithAuth) }
        </Routes>
    );
};

export default AppRouter;
