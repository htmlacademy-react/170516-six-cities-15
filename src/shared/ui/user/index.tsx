import {FC} from 'react';
import classNames from 'classnames';

type UserProps = {
  name: string;
  avatarUrl?: string;
  isPro: boolean;
  countFavorites?: number;
  className?: string;
}

export const User:FC<UserProps> = ({
  className,
  name,
  avatarUrl,
  isPro,
  countFavorites,
}) => {
  const hasPro = classNames({
    [`${className}__avatar-wrapper--pro`]: isPro
  });

  return (
    <div className={`${className}__host-user user`}>
      <div className={`${className}__avatar-wrapper ${hasPro} user__avatar-wrapper`}>
        {!!avatarUrl && <img className={`${className}__avatar user__avatar`} src={avatarUrl} width="74" height="74" alt="Host avatar"/>}
      </div>
      <span className={`${className}__user-name`}>{name}</span>
      {isPro && <span className={`${className}__user-status`}>Pro</span>}
      {!!countFavorites && <span className="header__favorite-count">{countFavorites}</span>}
    </div>
  );
};
