import leaflet from 'leaflet';
import {FC, useEffect, useRef} from 'react';
import {MapProps} from './type';
import MAIN_PIN from '@/shared/assets/icons/main-pin.svg';
import PIN from '@/shared/assets/icons/pin.svg';
import {useMap} from '@/shared/utils';

export const Map:FC<MapProps> = ({className, city, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city.location]);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer: leaflet.Layer & { _icon?: unknown}) => layer._icon && layer.remove());

      points.forEach((elem) =>
        leaflet
          .marker({
            lat: elem.location.latitude,
            lng: elem.location.longitude,
          }, {
            icon: (elem.id === selectedPoint) ? leaflet.icon({iconUrl: MAIN_PIN}) : leaflet.icon({iconUrl: PIN}),
          }).addTo(map)
      );
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`map ${className}`} ref={mapRef}></section>
  );
};
