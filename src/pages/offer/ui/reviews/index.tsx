import {FC, ReactNode} from 'react';
import {Rating} from '../../../../shared';
import {CommentsProps} from '../../type';

type ReviewsProps = {
  className?: string;
  comments: CommentsProps[];
  children?: ReactNode;
}

export const Reviews:FC<ReviewsProps> = ({
  className,
  comments,
  children
}) => {
  const getDate = function(date: string) {
    return `${new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })}`;
  };

  return (
    <section className={`${className} reviews`}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map(({date, user, comment, rating, id }) => (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">{user.name}</span>
            </div>
            <div className="reviews__info">
              <Rating className='reviews' rating={rating}/>
              <p className="reviews__text">{comment}</p>
              <time className="reviews__time" dateTime={date}>{getDate(date)}</time>
            </div>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}
