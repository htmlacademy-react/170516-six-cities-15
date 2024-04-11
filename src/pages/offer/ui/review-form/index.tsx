import {ChangeEvent, FormEvent, Fragment, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/app-store';
import {Status} from '@/shared/config';
import {postStatusComment} from '../../model';
import {defaultFormState, ratingReview, ReviewLength} from '../../const';
import {postReviewAction} from '../../api';

type RatingFormProps = {
  id: string;
};

export const ReviewForm = ({ id }: RatingFormProps) => {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState(defaultFormState);
  const statusComment = useAppSelector(postStatusComment);
  const statusCommentComplete = statusComment === Status.Resolved;
  const statusCommentLoading = statusComment === Status.Loading;
  const statusCommentError = statusComment === Status.Rejected;
  const hasReviewLength = review.review.length >= ReviewLength.Min && review.review.length <= ReviewLength.Max;
  const hasBtnDisabled = statusCommentLoading || !review.rating || !hasReviewLength;

  useEffect(() => {
    setReview(defaultFormState);
  }, [statusCommentComplete]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReviewAction({
        id,
        rating: Number(review.rating),
        comment: review.review,
      })
    );
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    setReview({
      ...review,
      [name]: value,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} data-testid='reviews-form'>
      {statusCommentError && (
        <div className="reviews__error">
          <p style={{color: 'red'}}>Failed to post review. Please try again!</p>
        </div>
      )}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingReview.map(({title, value}) => (
          <Fragment key={`${title}-${value}`}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={value === review.rating} disabled={statusCommentLoading} onChange={handleInputChange} />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review.review} disabled={statusCommentLoading} onChange={handleInputChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={hasBtnDisabled}>{statusCommentLoading ? 'loading...' : 'Submit'}</button>
      </div>
    </form>
  );
};
