export interface User {
	username: string;
	id: string;
	password?: string;
	avatar?:string;
	role?:string;
}

export interface UserSchema {
	authData?: User;
	_inited:boolean
}
