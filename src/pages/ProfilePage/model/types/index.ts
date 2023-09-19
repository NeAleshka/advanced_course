import { type RegisterOptions } from 'react-hook-form';
import { type Country, type Currency } from '../consts';

export interface Profile {
	firstName: string;
	lastName: string;
	age: number;
	currency: Currency;
	country: Country;
	city: string;
	login: string;
	avatar: string;
}

export interface ProfileSchema {
	data?: Profile;
	error?: string;
	isLoading: boolean;
	readonly: boolean;
}

export type fieldNameType = keyof Profile;

export interface IInputField {
	fieldName: fieldNameType;
	options?: RegisterOptions<Profile>;

}
