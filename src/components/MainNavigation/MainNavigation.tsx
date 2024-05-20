// MainNavigation.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";
import { db } from "../../services/firebaseConfig";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

interface CompanyData {
  id: string; // Add the missing 'id' property
  name?: string;
  units_of_the_same_system?: string[];
  phone_numbers?: string;
  logo?: string;
  description?: string;
  tourism_products?: string[];
  address?: string;
  email?: string;
  slideshow_images?: string[];
  date_of_incorporation?: {
    seconds: number;
    nanoseconds: number;
  };
  short_name?: string;
  facebook_title?: string;
}

const initialData: CompanyData = {
  id: "",
  name: "",
  units_of_the_same_system: [],
  phone_numbers: "",
  logo: "",
  description: "",
  tourism_products: [],
  address: "",
  email: "",
  slideshow_images: [],
  date_of_incorporation: {
    seconds: 0,
    nanoseconds: 0,
  },
  short_name: "",
  facebook_title: "",
};

const MainNavigation = () => {
  const [fetchData, setFetchData] = useState<CompanyData>(initialData);

  // Creating Database Ref

  const dbref = collection(db, "company");

  // Fetch data from database
  const fetch = async () => {
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
    }));

    console.log("fetchdata", fetchdata);
    setFetchData(fetchdata[0]);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <header className={styles.main_header}>
      <nav className={styles.main_header_nav}>
        <ul className={styles.main_header_item_list}>
          <li className={styles.main_header_item}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              TRANG CHỦ
            </NavLink>
          </li>
          <li className={styles.main_header_item}>
            <NavLink
              to="/article"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              BÀI VIẾT
            </NavLink>
          </li>
          {fetchData && (
            <li className={styles.main_header_item}>
              <NavLink to="/">
                <img src={fetchData.logo} alt="Company Logo" />
              </NavLink>
            </li>
          )}
          <li className={styles.main_header_item}>
            <NavLink
              to="/document"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              TÀI LIỆU
            </NavLink>
          </li>
          <li className={styles.main_header_item}>
            <NavLink
              to="/recruitment"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              TUYỂN DỤNG
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
