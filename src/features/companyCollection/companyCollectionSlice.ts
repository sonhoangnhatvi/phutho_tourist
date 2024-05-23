import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface CompanyCollectionState {
  id: string; // Add the missing 'id' property
  name?: string;
  units_of_the_same_system?: string[];
  phone_numbers?: string;
  logo?: string;
  description?: string;
  tourism_products?: string[];
  address?: string;
  email?: string;
  slideshow_images?: string[];
  date_of_incorporation?: {
    seconds: number;
    nanoseconds: number;
  };
  short_name?: string;
  facebook_title?: string;
  background_carousel?: string;
  shortName: string;
  about_images?: string[];
  footer_copyright?: string;
}

const companyCollectionInitialState: CompanyCollectionState[] = [];

const companyCollectionSlice = createSlice({
  name: "companyCollection",
  initialState: companyCollectionInitialState,
  reducers: {
    updateCompanyCollection: (state, action) => {
      return action.payload; // assuming payload is an array
    },
  },
});

export const { updateCompanyCollection } = companyCollectionSlice.actions;

export const selectCompanyCollection = (state: RootState) =>
  state.companyCollection;

export default companyCollectionSlice.reducer;
