import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectArticlesCollection } from "../../features/articleCollection/articlesCollectionSlice";
import classes from "./VerticalCarousel.module.scss";
import { stripHtmlTags, truncateText } from "../../Utils/helper";
import { marked } from "marked";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const VerticalCarousel = () => {
  const articlesData = useSelector(selectArticlesCollection);

  const companyData = useSelector(selectCompanyCollection);

  // Access the logo of the first company in the array, if it exists
  const companyLogo = companyData.length > 0 ? companyData[0].logo : "";

  return (
    <div className={classes.swiperContainer}>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ el: `.${classes.swiperPagination}`, clickable: true }}
        navigation={{
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        }}
        loop={true}
        initialSlide={0}
        className={classes.swiperSlide}
      >
        {articlesData?.map((articleItem) => {
          const article_content = stripHtmlTags(
            marked(truncateText(articleItem.content, 20)).toString()
          );

          return (
            <SwiperSlide className={classes.swiperSlide} key={articleItem.id}>
              <div className={classes.imageContainer}>
                <img
                  className={classes.img}
                  src={articleItem.img}
                  alt={`Carousel ${articleItem.id}`}
                />
                <div className={classes.article_content}>
                  <p className={classes.title}>{articleItem.title}</p>
                  <div
                    className={classes.content}
                    dangerouslySetInnerHTML={{
                      __html: article_content,
                    }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className={classes.sliderControler}>
          <div
            className={`swiper-button-prev ${classes.swiperButtonPrev}`}
          ></div>
          <div
            className={`swiper-button-next ${classes.swiperButtonNext}`}
          ></div>
          <div
            className={`swiper-pagination ${classes.swiperPagination}`}
          ></div>
        </div>
      </Swiper>
    </div>
  );
};

export default VerticalCarousel;
