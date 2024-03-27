import {ChangeEvent, useState, Fragment, FormEvent} from 'react';
import {useAppDispatch} from '../../../../app/app-store';
import {postReviewAction} from '../../api';

type RatingFormProps = {
  id: string;
};

export const ReviewForm = ({ id }: RatingFormProps) => {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({
    rating: '',
    review: '',
    isValid: false,
  });

  const ReviewLength = {
    Max: 300,
    Min: 50
  };

  const ratingReview = [
    {title: 'perfect', value: '5'},
    {title: 'good', value: '4'},
    {title: 'not bad', value: '3'},
    {title: 'badly', value: '2'},
    {title: 'terribly', value: '1'},
  ];

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReviewAction({
        id: id ?? '',
        rating: Number(review.rating),
        comment: review.review,
      })
    );
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, tagName } = evt.target;
    const isValid =
      (tagName === 'TEXTAREA') && value.length >= ReviewLength.Min && value.length <= ReviewLength.Max;

    setReview({
      ...review,
      [name]: value,
      isValid,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingReview.map(({title, value}) => (
          <Fragment key={`${title}-${value}`}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={handleInputChange} />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review.review} onChange={handleInputChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!review.isValid}>Submit</button>
      </div>
    </form>
  );
};
