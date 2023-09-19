import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import './styles/index.scss';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { Loader } from 'widgets/Loader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export const FullPageLoader = () => (
    <div className="full_page_loader">
        <Loader />
    </div>
);
const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initialUser());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<FullPageLoader />}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
