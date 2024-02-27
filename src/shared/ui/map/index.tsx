import leaflet from 'leaflet';
import {FC, useEffect, useRef} from 'react';
import {MainProps} from './type';
import {useMap} from '../../utils';

export const Map:FC<MainProps> = ({className, city, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, {
    lat: city.location.latitude,
    lng: city.location.longitude,
    zoom: 8
  });

  useEffect(() => {
    const paramsIcons = {
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    };
    const defaultCustomIcon = {
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      ...paramsIcons
    };
    const currentCustomIcon = {
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
      ...paramsIcons
    };
    if (map) {
      points.forEach(({id, location}) =>
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: (id === selectedPoint) ? leaflet.icon(currentCustomIcon) : leaflet.icon(defaultCustomIcon),
          }).addTo(map)
      );
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`map ${className}`} ref={mapRef}></section>
  );
};
