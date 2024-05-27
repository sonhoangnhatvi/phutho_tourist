import { configureStore } from "@reduxjs/toolkit";
import companyCollectionReducer from "../features/companyCollection/companyCollectionSlice"; // Import companyCollectionReducer
import articlesCollectionReducer from "../features/articleCollection/articlesCollectionSlice"; // Import companyCollectionReducer
import keyServiceCollectionReducer from "../features/keyServiceCollection/keyServiceCollectionSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    companyCollection: companyCollectionReducer,
    articlesCollection: articlesCollectionReducer,
    keyServiceCollection: keyServiceCollectionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
