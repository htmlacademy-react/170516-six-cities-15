import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {Path, AuthorizationStatus} from '../../shared/config';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, authorizationStatus}) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={Path.Login} />
);
