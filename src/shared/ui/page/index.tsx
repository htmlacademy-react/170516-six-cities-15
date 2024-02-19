import {FC, ReactNode} from 'react';

type PageProps = {
  children: ReactNode;
  className?: string;
}

export const Page:FC<PageProps> = ({children, className}) => (
  <div className={`page ${className}`}>
    {children}
  </div>
);
