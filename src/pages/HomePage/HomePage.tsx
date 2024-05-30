import { useSelector } from "react-redux";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import { selectArticlesCollection } from "../../features/articleCollection/articlesCollectionSlice";
import {
  convertFirebaseTimestampToDate,
  normalizeString,
} from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";
import classes from "./HomePage.module.scss";
import { Article } from "../../components/Article/Article";
import { selectkeyServiceCollection } from "../../features/keyServiceCollection/keyServiceCollectionSlice";
import { KeyService } from "../../components/KeyService/KeyService";
import HorizontalCarousel from "../../components/HorizontalCarousel/HorizontalCarousel";
import { useEffect, useState } from "react";
import TravelLoading from "../../components/TravelLoading/TravelLoading";
import { FaAnglesDown } from "react-icons/fa6";
import { selectArticlesTagCollection } from "../../features/articleTagCollection/articlesTagCollectionSlice";

export const HomePage = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  // REGION collection company
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
    ? convertFirebaseTimestampToDate(companyDateOfIncorporation as Timestamp)
    : null;

  const background_carousel =
    companyData.length > 0 ? companyData[0].background_carousel : "";

  const slideshow_images =
    companyData.length > 0 ? companyData[0].slideshow_images : [];

  const tourism_products =
    companyData.length > 0 ? companyData[0].tourism_products : [];

  // Handle data for about section
  const about_images =
    companyData.length > 0 ? companyData[0].about_images : [];
  const about_images_0 = about_images ? about_images[0] : "";
  const about_images_1 = about_images ? about_images[1] : "";
  // End region collection company

  // REGION collection Articles
  // Get the company data from the store
  const articlesData = useSelector(selectArticlesCollection);
  console.log("articlesData", articlesData);
  // End collection Articles

  // REGION collection keyService
  // Get the company data from the store
  const keyServiceData = useSelector(selectkeyServiceCollection);
  console.log("keyServiceData", keyServiceData);
  // End collection keyService

  // REGION collection Articles
  // Get the company data from the store
  const articlesTagData = useSelector(selectArticlesTagCollection);
  console.log("articlesTagData", articlesTagData);
  // End collection Articles

  // Inline style for background image
  const heroSectionStyle = {
    backgroundImage: `url(${background_carousel})`,
    backgroundSize: "cover", // Adjust this as needed
    backgroundPosition: "center", // Adjust this as needed
  };

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (replace with actual data fetching if needed)

  useEffect(() => {
    if (
      companyData.length > 0 &&
      articlesData.length > 0 &&
      keyServiceData.length > 0
    ) {
      setIsDataLoaded(true);
    }
  }, [companyData, articlesData, keyServiceData]);

  const scrollToSection = () => {
    const section = document.querySelector(`.${classes.about_section}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {!isDataLoaded ? (
        <TravelLoading />
      ) : (
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
            <HorizontalCarousel />
            <FaAnglesDown
              style={{
                fontSize: "30px",
                filter: "drop-shadow(0 0 0px black)",
                color: "white",
              }}
              onClick={scrollToSection}
            />
          </div>
          <div className={classes.container}>
            {/* About section */}
            <div className={classes.about_section}>
              <div className={classes.about_section_content}>
                <p className={classes.header}>VỀ CHÚNG TÔI</p>
                <p className={classes.title}>
                  Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của
                  bạn!
                </p>
                <p className={classes.border_bottom_title}></p>
                <div className={classes.content}>
                  <p className={classes.content_p}>
                    Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là
                    một đơn vị thành viên của Saigontourist. Phuthotourist được
                    biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận
                    11) như:
                  </p>
                  <ul>
                    {/* Use an unordered list for tourism products */}
                    {tourism_products?.map((product, index) => (
                      <li key={index}>
                        {product}{" "}
                        {/* Assuming 'name' property exists in product */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classes.action_area}>
                  <button>Xem chi tiết</button>
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
            </div>
            {/* New Article section*/}
            <div className={classes.new_article_section}>
              <p className={classes.subTitle}>CHIA SẺ THÔNG TIN</p>
              <p className={classes.title}>Bài viết mới</p>
              <p className={classes.border_bottom_title}></p>
              <p className={classes.content}>
                Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin
                về những sản phẩm du lịch
              </p>
              <ul className={classes.article_list}>
                {articlesData?.map((article) => {
                  return (
                    <li key={article.id}>
                      <Article key={article.id} articleItem={article}></Article>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Key Service section*/}
            <div className={classes.key_service_section}>
              <p className={classes.subTitle}>LĨNH VỰC HOẠT ĐỘNG</p>
              <p className={classes.title}>Các dịch vụ trọng tâm</p>
              <p className={classes.border_bottom_title}></p>
              <p className={classes.content}>
                3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà
                hàng – khách sạn, và dịch vụ lữ hành
              </p>
              <ul className={classes.key_service_list}>
                {keyServiceData?.map((keyService) => {
                  return (
                    <li key={keyService.id}>
                      <KeyService
                        key={keyService.id}
                        keyServiceItem={keyService}
                      ></KeyService>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
