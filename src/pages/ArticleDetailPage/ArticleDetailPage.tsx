import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectArticlesCollection } from "../../features/articleCollection/articlesCollectionSlice";
import { selectCompanyCollection } from "../../features/companyCollection/companyCollectionSlice";
import classes from "./ArticleDetailPage.module.scss";
import { convertFirebaseTimestampToDate } from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";

export const ArticleDetailPage = () => {
  // Access the params object using useParams hook
  const { articleId } = useParams();

  // Get the company data from the store
  const articlesData = useSelector(selectArticlesCollection);
  const articleItem = articlesData.find((article) => article.id === articleId);

  const publish_date = articleItem?.publish_date
    ? convertFirebaseTimestampToDate(
        articleItem?.publish_date as Timestamp,
        "format_monthname_dd_yyyy"
      )
    : null;

  // Get the company data from the store
  const companyData = useSelector(selectCompanyCollection);

  const background_carousel =
    companyData.length > 0 ? companyData[0].background_carousel : "";

  // Inline style for background image
  const heroSectionStyle = {
    backgroundImage: `url(${background_carousel})`,
    backgroundSize: "cover", // Adjust this as needed
    backgroundPosition: "center", // Adjust this as needed
  };

  return (
    <div className={classes.article_container}>
      <div className={classes.hero_section} style={heroSectionStyle} />
      <div className={classes.article_area}>
        <p className={classes.article_title}>{articleItem?.title}</p>
        <p className={classes.article_title_sub}>
          by {articleItem?.author} in on {publish_date}
        </p>
        <img
          className={classes.article_img}
          src={articleItem?.img}
          alt="article_img"
        ></img>
        <div
          className={classes.article_content}
          dangerouslySetInnerHTML={{ __html: articleItem?.content ?? "" }}
        />
      </div>
      <div className={classes.after_hero_section} />
    </div>
  );
};
