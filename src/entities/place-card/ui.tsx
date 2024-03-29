import {FC, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {PreviewCardProps} from '../../shared/types';
import {Path} from '../../shared/config';
import {Rating} from '../../shared';

type CardProps = PreviewCardProps & {
  onListItemHover?: (id: string) => void;
  btnBookmark: ReactNode;
}

export const PlaceCard:FC<CardProps> = ({
  id,
  title,
  type,
  price,
  isPremium,
  rating,
  previewImage,
  className,
  widthImg = 260,
  heightImg = 200,
  onListItemHover,
  btnBookmark
}) => {
  const linkPath = `${Path.Offer}/${id}`;
  return (
    <article className={`${className}__card place-card`} onMouseEnter={() => onListItemHover?.(id)}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={linkPath}>
          <img className="place-card__image" src={previewImage} width={widthImg} height={heightImg} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {btnBookmark}
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
