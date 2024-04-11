import {renderHook} from '@testing-library/react';
import {Map} from 'leaflet';
import {getRandomNumber} from '@/shared/mocks';
import {useMap} from '@/shared/utils';
import {CityName} from "@/shared/config";

describe('Hook: useMap', () => {
  it('should create a map instance with the given data', () => {
    const mockLocation = {
      name: CityName.Paris,
      location: {
        latitude: getRandomNumber(0, 15),
        longitude: getRandomNumber(0, 15),
        zoom: getRandomNumber(0, 15),
      }
    };
    const mockContainerRef = {current: document.createElement('div')};

    const {result} = renderHook(() => useMap(mockContainerRef, mockLocation));
    const mockMapInstance = result.current;

    expect(mockMapInstance).toBeInstanceOf(Map);
    expect(mockMapInstance).not.toBeNull();
    expect(mockMapInstance).not.toBeUndefined();
    expect(mockMapInstance!.getCenter().lat).toEqual(mockLocation.location.latitude);
    expect(mockMapInstance!.getCenter().lng).toEqual(mockLocation.location.longitude);
    expect(mockMapInstance!.getZoom()).toEqual(mockLocation.location.zoom);
  });
});
