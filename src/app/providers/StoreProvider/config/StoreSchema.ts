import {type UserSchema} from 'entities/User';
import {type LoginSchema} from '../../../../features/AuthByUserName';

export interface StoreSchema {
	user: UserSchema;
	loginForm: LoginSchema;
}
// comment
