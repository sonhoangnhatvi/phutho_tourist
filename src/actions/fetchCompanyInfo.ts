import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AppDispatch } from "../store/store";
import { updateCompanyCollection } from "../features/companyCollection/companyCollectionSlice";

// Creating Database Ref
const dbref = collection(db, "company");

// Async thunk example
export const fetchCompanyInfo = () => async (dispatch: AppDispatch) => {
  try {
    // Fetch data from database
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name || "", // Handle missing "name" property
      units_of_the_same_system: doc.data().units_of_the_same_system || [], // Handle missing "units_of_the_same_system" property
      phone_numbers: doc.data().phone_numbers,
      logo: doc.data().logo,
      description: doc.data().description,
      tourism_products: doc.data().tourism_products,
      address: doc.data().address,
      email: doc.data().email,
      slideshow_images: doc.data().slideshow_images,
      date_of_incorporation: {
        seconds: doc.data().date_of_incorporation.seconds,
        nanoseconds: doc.data().date_of_incorporation.nanoseconds,
      },
      short_name: doc.data().short_name,
      facebook_title: doc.data().facebook_title,
      background_carousel: doc.data().background_carousel,
    }));

    console.log("fetchdata", fetchdata);

    // Dispatch action with fetched data as payload
    dispatch(updateCompanyCollection(fetchdata));
  } catch (error) {
    console.error(error);
  }
};
