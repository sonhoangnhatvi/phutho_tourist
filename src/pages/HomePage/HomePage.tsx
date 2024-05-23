import { useSelector } from "react-redux";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import {
  convertFirebaseTimestampToDate,
  normalizeString,
} from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";
import classes from "./HomePage.module.scss";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

export const HomePage = () => {
  // Get the company data from the store
  const companyData = useSelector(selectCompanyCollection);

  // Get information about the company
  const companyName = companyData.length > 0 ? companyData[0].name : "";
  const companyShortName =
    companyData.length > 0 ? normalizeString(companyData[0].shortName) : "";
  const companyDateOfIncorporation =
    companyData.length > 0 && companyData[0].date_of_incorporation
      ? companyData[0].date_of_incorporation
      : null;

  const formattedDate = companyDateOfIncorporation
    ? convertFirebaseTimestampToDate(companyDateOfIncorporation as Timestamp) // Optional type assertion
    : null;

  const companyLogo = companyData.length > 0 ? companyData[0].logo : "";
  const companyAddress = companyData.length > 0 ? companyData[0].address : "";
  const companyPhone =
    companyData.length > 0 ? companyData[0].phone_numbers : "";
  const companyEmail = companyData.length > 0 ? companyData[0].email : "";
  const companyDescription =
    companyData.length > 0 ? companyData[0].description : "";
  const background_carousel =
    companyData.length > 0 ? companyData[0].background_carousel : "";

  const slideshow_images =
    companyData.length > 0 ? companyData[0].slideshow_images : [];

  const slideshow_images_0 = slideshow_images ? slideshow_images[0] : "";

  const tourism_products =
    companyData.length > 0 ? companyData[0].tourism_products : [];

  // Handle data for about section
  const about_images =
    companyData.length > 0 ? companyData[0].about_images : [];
  const about_images_0 = about_images ? about_images[0] : "";
  const about_images_1 = about_images ? about_images[1] : "";

  // Inline style for background image
  const heroSectionStyle = {
    backgroundImage: `url(${background_carousel})`,
    backgroundSize: "cover", // Adjust this as needed
    backgroundPosition: "center", // Adjust this as needed
  };

  return (
    <div>
      {/* Hero section */}
      <div className={classes.hero_section} style={heroSectionStyle}>
        <p className={classes.hero_section_company_name}>{companyName}</p>
        <p className={classes.hero_section_company_shortname}>
          {companyShortName}
        </p>
        <p className={classes.hero_section_company_dateofincorporation}>
          Ngày thành lập {formattedDate}
        </p>
        <img src={slideshow_images_0} alt="slideshow_images_0"></img>
      </div>
      <div className={classes.container}>
        {/* Aboutection */}
        <div className={classes.about_section}>
          <div className={classes.about_section_content}>
            <p className={classes.header}>VỀ CHÚNG TÔI</p>
            <p className={classes.title}>
              Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!
            </p>
            <p className={classes.border_bottom_title}></p>
            <div className={classes.content}>
              <p className={classes.content_p}>
                Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một
                đơn vị thành viên của Saigontourist. Phuthotourist được biết đến
                với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
              </p>
              <ul>
                {/* Use an unordered list for tourism products */}
                {tourism_products?.map((product, index) => (
                  <li key={index}>
                    {product} {/* Assuming 'name' property exists in product */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className={classes.image_gallery}>
            <li>
              <img
                className={classes.about_images_0}
                src={about_images_0}
                alt="about_images_0"
              ></img>
              <img
                className={classes.about_images_1}
                src={about_images_1}
                alt="about_images_1"
              ></img>
            </li>
          </ul>
          <div className={classes.action_area}>
            <button>Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
};
