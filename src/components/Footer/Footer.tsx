import { useSelector } from "react-redux";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import { normalizeString } from "../../Utils/helper";
import classes from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";

export const Footer = () => {
  // Get the company data from the store
  const companyData = useSelector(selectCompanyCollection);

  // Get information about the company
  // Access the logo of the first company in the array, if it exists
  const companyLogo = companyData.length > 0 ? companyData[0].logo : "";
  const companyName = companyData.length > 0 ? companyData[0].name : "";
  const companyShortName =
    companyData.length > 0 ? normalizeString(companyData[0].shortName) : "";
  const companyFooterCopyright =
    companyData.length > 0 ? companyData[0].footer_copyright : "";

  const companyAddress = companyData.length > 0 ? companyData[0].address : "";
  const companyPhoneNumbers =
    companyData.length > 0 ? companyData[0].phone_numbers : "";
  const companyEmail = companyData.length > 0 ? companyData[0].email : "";
  const companyFacebookTitle =
    companyData.length > 0 ? companyData[0].facebook_title : "";
  const companyUnitsOfTheSameSystem =
    companyData.length > 0 ? companyData[0].units_of_the_same_system : [];

  return (
    <div className={classes.footer}>
      {/* First part */}
      <div className={classes.companyInfo}>
        <div className={classes.companyInforTop}>
          <div className={classes.companyLogo}>
            <img src={companyLogo} alt={companyName} />
          </div>
          <div className={classes.companyName}>
            <p className={classes.companyFullName}>{companyName}</p>
            <p className={classes.companyShortName}>{companyShortName}</p>
          </div>
        </div>
        <div className={classes.companyInforBottom}>
          <p>{companyFooterCopyright}</p>
        </div>
      </div>
      {/* Second part */}
      <div className={classes.contact}>
        <p className={classes.contac_title}>LIÊN HỆ</p>
        <p className={classes.contact_item}>
          <FaMapMarkerAlt className={classes.contact_item_icon} />
          {companyAddress}
        </p>
        <p className={classes.contact_item}>
          <FaPhoneAlt className={classes.contact_item_icon} />
          {companyPhoneNumbers}
        </p>
        <p className={classes.contact_item}>
          <FaSquareEnvelope className={classes.contact_item_icon} />
          {companyEmail}
        </p>
        <p className={classes.contact_item}>
          <FaFacebookSquare className={classes.contact_item_icon} />
          {companyFacebookTitle}
        </p>
      </div>
      {/* Third part */}
      <div className={classes.units_of_the_same_system}>
        <p className={classes.units_of_the_same_system_title}>
          CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
        </p>
        <ul>
          {companyUnitsOfTheSameSystem?.map((unit) => (
            <li key={unit}>
              <p className={classes.companyUnitsOfTheSameSystemItem}>{unit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
