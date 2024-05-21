import { configureStore } from "@reduxjs/toolkit";
import companyCollectionReducer from "../features/companyCollection/companyCollectionSlice"; // Import companyCollectionReducer
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    companyCollection: companyCollectionReducer, // Add companyCollection reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
