import { ArticleItem } from "../../interface/ArticleItem";
import classes from "./ArticleVertical.module.scss";
import {
  convertFirebaseTimestampToDate,
  getArticleTags,
  stripHtmlTags,
  truncateText,
} from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectArticlesTagCollection } from "../../features/articleTagCollection/articlesTagCollectionSlice";
import { ArticleTag } from "../ArticleTag/ArticleTag";
import { marked } from "marked";
import DOMPurify from "dompurify";

// Modify Article component to receive props
export const ArticleVertical = ({
  articleItem,
}: {
  articleItem: ArticleItem;
}) => {
  // REGION collection Articles
  // Get the company data from the store
  const articlesTagData = useSelector(selectArticlesTagCollection);

  // End collection Articles

  // Get Article Tag Array
  const articleTags = getArticleTags(articleItem, articlesTagData);
  console.log("articleTags", articleTags);

  const publish_date = articleItem.publish_date
    ? convertFirebaseTimestampToDate(articleItem.publish_date as Timestamp)
    : "";

  const article_content = stripHtmlTags(
    marked(truncateText(articleItem.content, 20)).toString()
  );

  return (
    <div className={classes.article}>
      <img
        className={classes.img}
        src={articleItem.img}
        alt="articleItem_img"
      ></img>
      <div className={classes.article_content_area}>
        <p className={classes.article_title}>{articleItem.title}</p>
        <div
          className={classes.article_content}
          dangerouslySetInnerHTML={{
            __html: article_content,
          }}
        ></div>

        <div className={classes.article_footer}>
          <p className={classes.views}>{articleItem.views / 1000}N lượt xem</p>
          <p className={classes.dot}>•</p>
          <p className={classes.date}>{publish_date}</p>
        </div>
      </div>
    </div>
  );
};
