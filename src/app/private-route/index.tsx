import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {hasAuthStatus} from '../../shared/utils';

type PrivateRouteProps = {
  redirectTo: string;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, redirectTo}) => (
  hasAuthStatus()
    ? children
    : <Navigate to={redirectTo} />
);
