export interface User {
	username: string;
	id: string;
	password?: string;
}

export interface UserSchema {
	authData?: User;
	_inited:boolean
}
