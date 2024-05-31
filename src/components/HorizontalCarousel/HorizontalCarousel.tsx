import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import classes from "./HorizontalCarousel.module.scss";
import { ArticleItem } from "../../interface/ArticleItem";

import slide_image_1 from "../../assets/images/img_2.jpg";
import slide_image_2 from "../../assets/images/img_2.jpg";
import slide_image_3 from "../../assets/images/img_3.jpg";
import slide_image_4 from "../../assets/images/img_4.jpg";
import slide_image_5 from "../../assets/images/img_5.jpg";
import slide_image_6 from "../../assets/images/img_6.jpg";
import slide_image_7 from "../../assets/images/img_7.jpg";
import { useSelector } from "react-redux";
import { selectArticlesCollection } from "../../features/articleCollection/articlesCollectionSlice";
import { useNavigate } from "react-router-dom";

// Define a custom hook to handle navigation
const useHandleClickArticle = () => {
  const navigate = useNavigate();
  const handleClickArticle = (articleItem: ArticleItem) => {
    const articleId = articleItem.id;
    console.log("Slide clicked:", articleId);
    navigate(`/article/${articleId}`);
  };

  return handleClickArticle;
};

const HorizontalCarousel = () => {
  // REGION collection Articles
  // Get the company data from the store
  const articlesData = useSelector(selectArticlesCollection);
  // End collection Articles

  // Handle click on articles
  const handleClickArticle = useHandleClickArticle();

  return (
    <div className={classes.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        initialSlide={2} // Set the initial slide to be slide_image_3 (index 2)
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        // pagination={{ el: `.${classes.swiperPagination}`, clickable: true }}
        // navigation={{
        //   nextEl: `.${classes.swiperButtonNext}`,
        //   prevEl: `.${classes.swiperButtonPrev}`,
        //   // ,clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={classes.swiperContainer}
        wrapperClass={classes.swiperWrapper}
      >
        {articlesData?.map((articleItem) => (
          <SwiperSlide
            className={classes.swiperSlide}
            onClick={() => handleClickArticle(articleItem)}
            key={articleItem.id}
          >
            <div className={classes.imageContainer}>
              <img
                key={articleItem.id}
                className={classes.img}
                src={articleItem.img}
                alt={`Carousel ${articleItem.id}`}
              />
              <p className={classes.title}>{articleItem.title}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className={classes.swiperSlide}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide> */}

        {/* <div className={classes.sliderControler}>
          <div
            className={`swiper-button-prev ${classes.swiperButtonPrev}`}
          ></div>
          <div
            className={`swiper-button-next ${classes.swiperButtonNext}`}
          ></div>
          <div
            className={`swiper-pagination ${classes.swiperPagination}`}
          ></div>
        </div> */}
      </Swiper>
    </div>
  );
};

export default HorizontalCarousel;
