import {FC} from 'react';
import {PageProps} from './type';

export const Page:FC<PageProps> = ({children, className}) => (
  <div className={`page ${className}`}>
    {children}
  </div>
);
