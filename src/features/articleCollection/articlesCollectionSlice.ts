import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ArticleCollection } from "../../interface/ArticleCollection";

const articleCollectionInitialState: ArticleCollection[] = [];

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
