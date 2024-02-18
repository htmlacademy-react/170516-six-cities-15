import {FC} from 'react';
import {Link} from 'react-router-dom';
import {PlaceCardProps} from './type';
import {Path} from '../../shared/config';
import {Bookmark, Rating} from '../../shared';

//TODO: А вот если с бека не придет значение то страница упадет. Спросить и уточнить как запустить fix all
export const PlaceCard:FC<PlaceCardProps> = ({
  id,
  title,
  type,
  price,
  isFavorite,
  isPremium,
  rating,
  previewImage,
  className
}) => {
  //TODO: Подумать над scroll-top
  const linkPath = `${Path.Offer}/${id}`;
  return (
    <article className={`${className}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={linkPath}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            isFavorite={isFavorite}
            className="place-card"
          />
        </div>
        <Rating
          rating={rating}
          className="place-card"
        />

        <h2 className="place-card__name">
          <Link to={linkPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
