import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { type Dispatch } from '@reduxjs/toolkit';
import { type StoreSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { type ThunkExtraArg } from 'app/providers/StoreProvider/config/StoreSchema';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName test', () => {
    let dispatch: Dispatch;
    let getState: () => StoreSchema;
    let extra: ThunkExtraArg;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        console.log(mockedAxios);
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const action = loginByUsername({ username: '123', password: '1' });
        const result = await action(dispatch, getState, extra);
        console.log(result);
    });
});
