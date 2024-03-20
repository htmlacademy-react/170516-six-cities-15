import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PreviewCardProps} from '../../../shared/types';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const offersApi = createApi({
  reducerPath: 'offersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  }),
  endpoints: (builder) => ({
    getOffers: builder.query<PreviewCardProps[], void>({
      query: () => ({
        url: 'offers'
      }),
    })
  })
});

export const {useGetOffersQuery} = offersApi;
