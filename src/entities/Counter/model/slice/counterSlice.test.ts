import {type CounterSchema} from 'entities/Counter';
import {counterActions, counterReducer} from './counterSlice';

describe('counterSlice test', () => {
	test('increment value', () => {
		const state: CounterSchema = {value: 10};
		expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
	});
	test('decrement value', () => {
		const state: CounterSchema = {value: 10};
		expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
	});

	test('with empty state', () => {
		expect(counterReducer(undefined, counterActions.decrement())).toEqual({value: -1});
	});
});
