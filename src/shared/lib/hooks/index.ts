import { useDispatch } from 'react-redux';
import { type AppDispatchType } from 'app/providers/StoreProvider';
import {
    MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { AppRoutes, routerConfig } from 'shared/config/routerConfig/routerConfig';

type CopeFn=(text:string)=>Promise<void>
type infiniteScrollProps={
    triggerRef:MutableRefObject<HTMLElement>
    wrapperRef:MutableRefObject<HTMLElement>
    callback?:()=>void
}

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

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }:infiniteScrollProps) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current?.observe(triggerElement);
        }
        return () => {
            if (observer && triggerElement) {
                observer.current?.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
