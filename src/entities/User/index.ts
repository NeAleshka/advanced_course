import { userReducer, userActions } from './model/slice/userSlice';
import { type User, type UserSchema } from './model/types/user';

export {
    type User, userReducer, userActions, type UserSchema,
};
export { getUserAuthData } from './selectors/getUserAuthData';
