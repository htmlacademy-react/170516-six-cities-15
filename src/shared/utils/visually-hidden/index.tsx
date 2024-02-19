import {ElementType, FC, ReactNode} from 'react';
import {TagName} from '../tag-name';

type VisuallyHiddenProps = {
  children: ReactNode;
  tagName?: ElementType;
}

export const VisuallyHidden:FC<VisuallyHiddenProps> = ({children, tagName}) => (
  <TagName as={tagName} className="visually-hidden">{children}</TagName>
);
