import {type ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';

interface StoreProviderProps {
	children: ReactNode;
	initialState?: StoreSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {children, initialState} = props;
	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
