import cls from './Input.module.scss';
import {classNames} from 'shared/lib/classNames';
import {type ChangeEvent, type InputHTMLAttributes} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type,
		...restProps
	}
		= props;

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	};

	return <input className={classNames(cls.Input, {}, [className])} type={type} value={value} onChange={onChangeHandler} {...restProps}/>;
};
