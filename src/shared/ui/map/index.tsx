import leaflet from 'leaflet';
import {FC, useEffect, useRef} from 'react';
import {SizeIconProps, MapProps} from './type';
import MAIN_PIN from '../../assets/icons/main-pin.svg';
import PIN from '../../assets/icons/pin.svg';
import {useMap} from '../../utils';

export const Map:FC<MapProps> = ({className, location, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    const paramsIcons: SizeIconProps = {
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    };
    const defaultCustomIcon = {
      iconUrl: PIN,
      ...paramsIcons
    };
    const currentCustomIcon = {
      iconUrl: MAIN_PIN,
      ...paramsIcons
    };
    if (map) {
      points.forEach((elem) =>
        leaflet
          .marker({
            lat: elem.location.latitude,
            lng: elem.location.longitude,
          }, {
            icon: (elem.id === selectedPoint) ? leaflet.icon(currentCustomIcon) : leaflet.icon(defaultCustomIcon),
          }).addTo(map)
      );
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`map ${className}`} ref={mapRef}></section>
  );
};
