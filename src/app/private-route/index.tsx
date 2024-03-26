import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuthStatus} from '../../shared/utils';

type PrivateRouteProps = {
  redirectTo: string;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, redirectTo}) => (
  useAuthStatus()
    ? children
    : <Navigate to={redirectTo} />
);
