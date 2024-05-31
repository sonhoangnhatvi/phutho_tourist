import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ArticleTagCollection } from "../../interface/ArticleTag";

const articleTagCollectionInitialState: ArticleTagCollection[] = [];

const articlesTagCollectionSlice = createSlice({
  name: "articleTagCollection",
  initialState: articleTagCollectionInitialState,
  reducers: {
    updateArticlesTagCollection: (state, action) => {
      return action.payload; // assuming payload is an array
    },
  },
});

export const { updateArticlesTagCollection } =
  articlesTagCollectionSlice.actions;

export const selectArticlesTagCollection = (state: RootState) =>
  state.articlesTagCollection;

export default articlesTagCollectionSlice.reducer;
