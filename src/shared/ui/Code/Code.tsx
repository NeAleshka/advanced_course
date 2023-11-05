import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useCopyToClipboard } from 'shared/lib/hooks';

interface ICodeProps {
    className?:string
    text:string
}
const Code = ({ className, text }:ICodeProps) => (
    <pre className={classNames('', {}, [className])}>
        <code>{text}</code>
    </pre>
);

export default memo(Code);
