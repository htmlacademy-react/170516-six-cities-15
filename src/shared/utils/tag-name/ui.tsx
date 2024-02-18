import {FC} from 'react';
import {TagNameProps} from './types';

export const TagName: FC<TagNameProps> = ({ as: Tag = 'span', ...otherProps }) => (
  <Tag {...otherProps} />
);
