import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        theme=AppLinkTheme.PRIMARY,
        children,
        ...restProps
    } = props
    return (
        <Link to={to} className={classNames(`${cls.link}`,{},[className,cls[theme]])} {...restProps}>
            {children}
        </Link>
    );
};

export default AppLink;
