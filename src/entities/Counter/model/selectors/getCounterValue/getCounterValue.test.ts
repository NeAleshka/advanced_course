import {type DeepPartial} from '@reduxjs/toolkit';
import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';
import {getCounterValue} from './getCounterValue';

describe('test getCounterValue selector ', () => {
	test('should contain counterValue', () => {
		const store: DeepPartial<StoreSchema> = {
			counter: {value: 10},
		};
		expect(getCounterValue(store as StoreSchema)).toEqual(10);
	});
});
