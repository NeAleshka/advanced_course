import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

describe('loginSlice test', () => {
    test('test setUserName', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123'),
        ))
            .toEqual({ username: '123' });
    });
});
