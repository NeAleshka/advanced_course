import { useDispatch } from 'react-redux';
import { type AppDispatchType } from 'app/providers/StoreProvider';
import { useState } from 'react';

type CopiedValue=string| null
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
