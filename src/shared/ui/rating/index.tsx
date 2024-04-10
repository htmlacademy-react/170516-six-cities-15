import {FC} from 'react';
import {VisuallyHidden} from '@/shared/utils';

type RatingProps = {
  rating: number;
  className?: string;
  visibleNumberRating?: boolean;
}

export const Rating:FC<RatingProps> = ({rating, className, visibleNumberRating}) => {
  const percent = `${Math.round(rating) * 20}%`;
  return (
    <div className={`rating ${className}__rating`} data-testid='rating'>
      <div className={`rating__stars ${className}__stars`}>
        <span style={{width: percent}}></span>
        <VisuallyHidden>Rating</VisuallyHidden>
      </div>
      {visibleNumberRating && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
};
