import {type DeepPartial} from '@reduxjs/toolkit';
import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';
import {getCounter} from './getCounter';

describe('test getCounter selector ', () => {
	test('should contain counter', () => {
		const store: DeepPartial<StoreSchema> = {
			counter: {value: 10},
		};
		expect(getCounter(store as StoreSchema)).toEqual({value: 10});
	});
});
