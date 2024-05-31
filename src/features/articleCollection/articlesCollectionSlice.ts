import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ArticleItem } from "../../interface/ArticleItem";

const articleCollectionInitialState: ArticleItem[] = [];

const articlesCollectionSlice = createSlice({
  name: "articleCollection",
  initialState: articleCollectionInitialState,
  reducers: {
    updateArticlesCollection: (state, action) => {
      return action.payload; // assuming payload is an array
    },
  },
});

export const { updateArticlesCollection } = articlesCollectionSlice.actions;

export const selectArticlesCollection = (state: RootState) =>
  state.articlesCollection;

export default articlesCollectionSlice.reducer;
