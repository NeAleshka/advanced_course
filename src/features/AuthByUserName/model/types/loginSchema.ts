export interface LoginSchema {
	username: string;
	password: string;
	isLoading: boolean;
	error?: string;
}

export type LoginRequest = Pick<LoginSchema, 'username' | 'password'>;
