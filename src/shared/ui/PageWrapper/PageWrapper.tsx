import {
    HTMLAttributes, MutableRefObject, ReactNode, useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks';
import cls from './PageWrapper.module.scss';

type PageWrapperProps = {
    children: ReactNode
    className?:string
    onScrollEndPage?: () => void
} &HTMLAttributes<HTMLDivElement>

const PageWrapper = ({ children, className, onScrollEndPage }:PageWrapperProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEndPage,
    });
    return (
        <div ref={wrapperRef} className={classNames(cls.pageWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
};

export default PageWrapper;
