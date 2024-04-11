import {CommentsProps} from '@/shared/types';

export const MaxQuantity = {
  NearPlaces: 3,
  Comments: 10,
  Images: 6
};

export const ReviewLength = {
  Max: 300,
  Min: 50
};

export const ratingReview = [
  {title: 'perfect', value: '5'},
  {title: 'good', value: '4'},
  {title: 'not bad', value: '3'},
  {title: 'badly', value: '2'},
  {title: 'terribly', value: '1'},
];

export const getDate = (date: string) =>
  `${new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })}`;

export const sortedComments = (comments: CommentsProps[]) => [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const defaultFormState = {
  rating: '',
  review: '',
  isValid: false,
};
