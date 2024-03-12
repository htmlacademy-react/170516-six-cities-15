import leaflet from 'leaflet';
import {FC, useEffect, useRef} from 'react';
import {MapProps} from './type';
import MAIN_PIN from '../../assets/icons/main-pin.svg';
import PIN from '../../assets/icons/pin.svg';
import {useMap} from '../../utils';

export const Map:FC<MapProps> = ({className, location, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      /*
        TODO: Спросить про конструкцию,
        points - это превью города, в ней может быть location а может и нет
        lat и lng - обязательно должно быть число
        Вопрос: На сколько грамотно выполнено location?.latitude ?? 0 ?
      */
      points.forEach(({location, id}) =>
        leaflet
          .marker({
            lat: location?.latitude ?? 0,
            lng: location?.longitude ?? 0,
          }, {
            icon: (id === selectedPoint) ? leaflet.icon({iconUrl: MAIN_PIN}) : leaflet.icon({iconUrl: PIN}),
          }).addTo(map)
      );
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`map ${className}`} ref={mapRef}></section>
  );
};
