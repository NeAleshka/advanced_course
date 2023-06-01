import Counter from "./components/Counter";
import './styles/index.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./components/About.async";
import { Suspense } from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme,toggleTheme}=useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/'}>Main</NavLink>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                    <Route path={'/'} element={<Counter/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
