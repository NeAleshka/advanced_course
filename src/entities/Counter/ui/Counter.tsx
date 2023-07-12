import {Button} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../model/slice/counterSlice';
import {getCounterValue} from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
	const dispatch = useDispatch();
	const inc = () => {
		dispatch(counterActions.increment());
	};

	const dec = () => {
		dispatch(counterActions.decrement());
	};

	const value = useSelector(getCounterValue);

	return (
		<div >
			<h1>value:{value}</h1>
			<Button onClick={inc}>inc</Button>
			<Button onClick={dec}>dec</Button>
		</div>
	);
};
