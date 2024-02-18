import {FC} from 'react';
import {RatingProps} from './type';
import {VisuallyHidden} from '../../utils';

export const Rating:FC<RatingProps> = ({rating, className}) => {
  const percent = `${rating * 20}%`;
  return (
    <div className={`rating ${className}__rating`}>
      <div className={`rating__stars ${className}__stars`}>
        <span style={{width: percent}}></span>
        <VisuallyHidden>Rating</VisuallyHidden>
      </div>
    </div>
  );
};
