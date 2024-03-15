const city = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment' as const,
  price: 120,
  city: {
    name: 'Amsterdam' as const,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: true,
  isPremium: true,
  rating: 4,
  previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg'
};

export const listCities = [
  city,
  {
    ...city,
    title: 'The house among olive',
    id: 'c237007e-44ef-4afd-ad6f-cb8a5d2e1929',
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isPremium: false,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
  }
];
