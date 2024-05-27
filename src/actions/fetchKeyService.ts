import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AppDispatch } from "../store/store";
import { updateKeyServiceCollection } from "../features/keyServiceCollection/keyServiceCollectionSlice";

// Creating Database Ref
const dbref = collection(db, "key_services");

// Async thunk example
export const fetchkeyService = () => async (dispatch: AppDispatch) => {
  try {
    // Fetch data from database
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      key_service_content: doc.data().key_service_content,
      key_service_image: doc.data().key_service_image,
      key_service_name: doc.data().key_service_name,
    }));

    // Dispatch action with fetched data as payload
    dispatch(updateKeyServiceCollection(fetchdata));
  } catch (error) {
    console.error(error);
  }
};
