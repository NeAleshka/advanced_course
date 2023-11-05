import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Icon.module.scss';

interface IconProps{
    className?:string
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>
}
export const Icon = memo(({ Svg, className }:IconProps) => <Svg className={classNames(cls.Icon, {}, [className])} />);
