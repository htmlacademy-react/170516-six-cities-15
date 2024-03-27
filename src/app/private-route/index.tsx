import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../app-store';
import {getAuthCheckedStatus} from '../../shared/utils';

type PrivateRouteProps = {
  redirectTo: string;
  children: ReactNode;
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children, redirectTo}) => {
  const isAuth = useAppSelector(getAuthCheckedStatus);
  return (
    isAuth
      ? children
      : <Navigate to={redirectTo} />
  );
};
