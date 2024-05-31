import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { KeyServiceCollection } from "../../interface/KeyServiceItem";

const keyServiceCollectionInitialState: KeyServiceCollection[] = [];

const keyServiceCollectionSlice = createSlice({
  name: "keyServiceCollection",
  initialState: keyServiceCollectionInitialState,
  reducers: {
    updateKeyServiceCollection: (state, action) => {
      return action.payload; // assuming payload is an array
    },
  },
});

export const { updateKeyServiceCollection } = keyServiceCollectionSlice.actions;

export const selectkeyServiceCollection = (state: RootState) =>
  state.keyServiceCollection;

export default keyServiceCollectionSlice.reducer;
