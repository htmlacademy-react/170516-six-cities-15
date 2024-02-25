import {Path} from '../../shared/config';

//TODO: Спросить на сколько хорошая данная конструкция?
export const getLayoutState = (path: string, id?: string) => {
  let pageClassName = '';
  let helmetTitle = '';
  let renderFooter = false;

  switch (path) {
    case Path.Main:
      helmetTitle = 'main';
      pageClassName = 'page--gray page--main';
      break;
    case Path.Login:
      helmetTitle = 'login';
      pageClassName = 'page--gray page--login';
      break;
    case Path.Favorites:
      helmetTitle = 'favorites';
      renderFooter = true;
      break;
    case `${Path.Offer}/${id}`:
      helmetTitle = 'offer';
      break;
    default:
      helmetTitle = 'not found';
      pageClassName = 'page--gray page--login';
  }

  return {pageClassName, helmetTitle, renderFooter};
};
