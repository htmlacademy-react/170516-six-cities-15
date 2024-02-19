import {FC, ElementType, ReactNode} from 'react';

type TagNameProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const TagName: FC<TagNameProps> = ({ as: Tag = 'span', ...otherProps }) => (
  <Tag {...otherProps} />
);
