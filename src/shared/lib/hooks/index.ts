import { useDispatch } from 'react-redux';
import { type AppDispatchType } from 'app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
