import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { userActions } from 'entities/User';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName test', () => {
    test('success login', async () => {
        const userValue = { username: '123', id: '1' };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const res = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(res.payload).toEqual(userValue);
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue));
    });
});
