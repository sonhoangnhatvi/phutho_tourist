// MainNavigation.js

import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const companyData = useSelector(selectCompanyCollection);

  // Access the logo of the first company in the array, if it exists
  const companyLogo = companyData.length > 0 ? companyData[0].logo : "";

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
          {companyData && (
            <li className={styles.main_header_item}>
              <NavLink to="/">
                <img src={companyLogo} alt="Company Logo" />
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
