import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {type StoreSchema} from 'app/providers/StoreProvider/config/StoreSchema';
import {type DeepPartial} from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: any;
	initialState?: DeepPartial<StoreSchema> ;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {children, initialState} = props;
	const store = createReduxStore(initialState as StoreSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
// comment
