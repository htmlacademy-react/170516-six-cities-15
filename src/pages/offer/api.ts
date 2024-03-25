import {createAsyncThunk} from "@reduxjs/toolkit";
import {OfferProp} from "./type";
import {ExtraType, PreviewCardProps} from "../../shared/types";

export const fetchCurrentOfferAction = createAsyncThunk<
  OfferProp,
  OfferProp['id'],
  ExtraType
  >('offers/fetchOffer', async (id, {extra: api }) => {
  const { data } = await api.get<OfferProp>(`/offers/${id}`);
  return data;
});

export const fetchNearbyAction = createAsyncThunk<
  PreviewCardProps[],
  PreviewCardProps['id'],
  ExtraType
  >('offers/fetchNearby', async (id, {extra: api }) => {
  const { data } = await api.get<PreviewCardProps[]>(`/offers/${id}/nearby`);
  return data;
});
