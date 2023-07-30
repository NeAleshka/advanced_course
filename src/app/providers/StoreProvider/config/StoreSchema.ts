import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByusername';

export interface StoreSchema {
	user: UserSchema;
	loginForm: LoginSchema;
}
// comment
