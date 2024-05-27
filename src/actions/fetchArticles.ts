import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AppDispatch } from "../store/store";
import { updateArticlesCollection } from "../features/articleCollection/articlesCollectionSlice";

// Creating Database Ref
const dbref = collection(db, "articles");

// Async thunk example
export const fetchArticles = () => async (dispatch: AppDispatch) => {
  try {
    // Fetch data from database
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      author: doc.data().author,
      content: doc.data().content,
      publish_date: {
        seconds: doc.data().publish_date.seconds,
        nanoseconds: doc.data().publish_date.nanoseconds,
      },
      tags: doc.data().tags,
      title: doc.data().title,
      views: doc.data().views,
      img: doc.data().img,
    }));

    // Dispatch action with fetched data as payload
    dispatch(updateArticlesCollection(fetchdata));
  } catch (error) {
    console.error(error);
  }
};
