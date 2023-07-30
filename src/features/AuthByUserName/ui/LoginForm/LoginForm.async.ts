import {lazy, type FC} from 'react';
import {type LoginFormProps} from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy < FC<LoginFormProps>>(async () => import('./LoginForm'));
