import {type Country, type Currency} from '../consts';

export interface Profile {
	first: string;
	lastname: string;
	age: number;
	currency: Currency;
	country: Country;
	city: string;
	username: string;
	avatar: string;
}

export interface ProfileSchema {
	data?: Profile;
	error?: string;
	isLoading: boolean;
	readonly: boolean;
}