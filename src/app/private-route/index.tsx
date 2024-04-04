import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '@/shared/config';
import {Loader} from '@/shared';
import {useAppSelector} from '../app-store';

type PrivateRouteProps = {
  redirectTo: string;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, redirectTo}) => {
  const authorizationStatus = useAppSelector((state) => state.client.authorizationStatus);
  return (
    <>
      {authorizationStatus === AuthorizationStatus.Auth && children}
      {authorizationStatus === AuthorizationStatus.NoAuth && <Navigate to={redirectTo} />}
      {authorizationStatus === AuthorizationStatus.Unknown && <Loader />}
    </>
  );
};
