import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AppDispatch } from "../store/store";
import { updateArticlesTagCollection } from "../features/articleTagCollection/articlesTagCollectionSlice";

// Creating Database Ref
const dbref = collection(db, "article_tags");

// Async thunk example
export const fetchTagArticles = () => async (dispatch: AppDispatch) => {
  try {
    // Fetch data from database
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      article_tag_name: doc.data().article_tag_name,
    }));

    // Dispatch action with fetched data as payload
    dispatch(updateArticlesTagCollection(fetchdata));
  } catch (error) {
    console.error(error);
  }
};
