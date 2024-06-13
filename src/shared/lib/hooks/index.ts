import { useDispatch } from 'react-redux';
import { type AppDispatchType } from 'app/providers/StoreProvider';
import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { AppRoutes, routerConfig } from 'shared/config/routerConfig/routerConfig';

type CopeFn=(text:string)=>Promise<void>
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useCopyToClipboard = (text: string) => {
    const [copyText, setCopyText] = useState<string|null>(text);

    const copy:CopeFn = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyText(text);
        } catch (error) {
            setCopyText(null);
        }
    };
    return { copy, copyText };
};

export const useTitle = () => {
    const location = useLocation();

    const currentPath = location.pathname;

    useEffect(() => {
        const matchRoute = Object.values(routerConfig).find(
            (route) => matchPath({ path: route.path, end: false }, currentPath),
        );

        if (!matchRoute) {
            document.title = routerConfig[AppRoutes.NOT_FOUND].title;
        } else {
            document.title = matchRoute.title;
        }
    }, [currentPath]);
};
