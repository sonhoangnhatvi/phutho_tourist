import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectArticlesCollection } from "../../features/articleCollection/articlesCollectionSlice";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import classes from "./ArticlePage.module.scss";
import { convertFirebaseTimestampToDate } from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";

import HorizontalCarousel from "../../components/HorizontalCarousel/HorizontalCarousel";
import VerticalCarousel from "../../components/VerticalCarousel/VerticalCarousel";
import TravelLoading from "../../components/TravelLoading/TravelLoading";
import { ArticleVertical } from "../../components/Article/ArticleVertical";

export const ArticlePage = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const { articleId } = useParams();
  const articlesData = useSelector(selectArticlesCollection);
  const articleItem = articlesData.find((article) => article.id === articleId);

  const publish_date = articleItem?.publish_date
    ? convertFirebaseTimestampToDate(
        articleItem?.publish_date as Timestamp,
        "format_monthname_dd_yyyy"
      )
    : null;

  const companyData = useSelector(selectCompanyCollection);
  const background_carousel =
    companyData.length > 0 ? companyData[0].background_carousel : "";

  const heroSectionStyle = {
    backgroundImage: `url(${background_carousel})`,
  };

  // Simulate loading delay (replace with actual data fetching if needed)

  useEffect(() => {
    if (articlesData.length > 0) {
      setIsDataLoaded(true);
    }
  }, [articlesData]);

  return (
    <div>
      {!isDataLoaded ? (
        <TravelLoading />
      ) : (
        <div className={classes.article_container}>
          <div className={classes.hero_section} style={heroSectionStyle}>
            <div className={classes.hexagon_container}>
              <svg viewBox="0 0 200 50" className={classes.hexagon}>
                <polygon
                  points="20,0 180,0 200,25 180,50 20,50 0,25"
                  className={classes.hexagon_border}
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#0054a6"
                  className={classes.text}
                >
                  BÀI VIẾT
                </text>
              </svg>
            </div>
          </div>
          <div className={classes.article_area}>
            <div className={classes.article_carousel_area}>
              <VerticalCarousel />
            </div>
            <div className={classes.latest_article_area}>
              <p className={classes.latest_article_area_title}>Bài mới nhất</p>
              {articlesData.map((article) => {
                return (
                  <ArticleVertical
                    key={article.id}
                    articleItem={article}
                  ></ArticleVertical>
                );
              })}
            </div>
          </div>
          <div className={classes.after_hero_section} />
        </div>
      )}
    </div>
  );
};
