import { ArticleItem } from "../../interface/ArticleItem";
import classes from "./Article.module.scss";
import {
  convertFirebaseTimestampToDate,
  getArticleTags,
  truncateText,
} from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectArticlesTagCollection } from "../../features/articleTagCollection/articlesTagCollectionSlice";
import { ArticleTag } from "../ArticleTag/ArticleTag";

// Modify Article component to receive props
export const Article = ({ articleItem }: { articleItem: ArticleItem }) => {
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

  return (
    <div className={classes.article}>
      <img src={articleItem.img} alt="articleItem_img"></img>
      <div className={classes.article_content}>
        <div className={classes.author}>
          <p className={classes.author_name}>{articleItem.author}</p>
          <span className={classes.dot}>•</span>
        </div>
        <p className={classes.article_title}>{articleItem.title}</p>
        <p className={classes.article_content}>
          {truncateText(articleItem.content, 20)}
        </p>

        <div className={classes.article_tags}>
          {articleTags.map((tag) => {
            return <ArticleTag name={tag.toString()} />;
          })}
        </div>
        <div className={classes.article_footer}>
          <p className={classes.views}>{articleItem.views / 1000}N lượt xem</p>
          <p className={classes.dot}>•</p>
          <p className={classes.date}>{publish_date}</p>
        </div>
      </div>
    </div>
  );
};
