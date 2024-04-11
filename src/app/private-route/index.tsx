import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, Path} from '@/shared/config';
import {Loader} from '@/shared';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, authorizationStatus}) => {

  return (
    <>
      {authorizationStatus === AuthorizationStatus.Auth && children}
      {authorizationStatus === AuthorizationStatus.NoAuth && <Navigate to={Path.Login} />}
      {authorizationStatus === AuthorizationStatus.Unknown && <Loader />}
    </>
  );
};
