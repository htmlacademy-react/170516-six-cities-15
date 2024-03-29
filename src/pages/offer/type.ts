import {UserProps} from '../../shared/types';

export type CommentsProps = {
  id: string;
  date: string;
  user: UserProps;
  comment: string;
  rating: number;
}
