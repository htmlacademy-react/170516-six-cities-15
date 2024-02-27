import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useState, useRef} from 'react';

//TODO: Ооочень похожа типизация с LocationProps подумать как сделать более лаконично
type CityProps = {
  lat: number;
  lng: number;
  zoom: number;
};

type MapRefProps = {
  current: HTMLElement | null;
};

export const useMap = (mapRef: MapRefProps, city: CityProps) => {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (!!mapRef.current && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
