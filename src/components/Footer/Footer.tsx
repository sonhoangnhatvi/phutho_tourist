import { useSelector } from "react-redux";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import { normalizeString } from "../../Utils/helper";
import classes from "./Footer.module.scss";

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
        <h3>LIÊN HỆ</h3>
        <p>{companyAddress}</p>
        <p>{companyPhoneNumbers}</p>
        <p>{companyEmail}</p>
        <p>{companyFacebookTitle}</p>
      </div>
      {/* Third part */}
      <div></div>
    </div>
  );
};
