import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StoreSchema';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>=(arg:Arg)=>AsyncThunkAction<Return, Arg, ThunkConfig<RejectedValue>>
jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
export class TestAsyncThunk<Returned, Arg, RejectedValue> {
    dispatch:jest.MockedFn<any>;

    getState:()=>StoreSchema;

    extra: ThunkExtraArg;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    actionCreator:ActionCreatorType<Returned, Arg, RejectedValue>;

    constructor(actionCreator:ActionCreatorType<Returned, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = mockedAxios;
        this.navigate = jest.fn();
        this.extra = {
            api: this.api,
            navigate: this.navigate,
        };
    }

    async callThunk(arg:Arg) {
        const action = this.actionCreator(arg);
        const res = await action(this.dispatch, this.getState, this.extra);
        return res;
    }
}
