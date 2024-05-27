import { ArticleCollection } from "../../interface/ArticleCollection";
import classes from "./Article.module.scss";
import { convertFirebaseTimestampToDate } from "../../Utils/helper";
import { Timestamp } from "firebase/firestore";

// Modify Article component to receive props
export const Article = ({
  articleItem,
}: {
  articleItem: ArticleCollection;
}) => {
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
        <p className={classes.article_content}>{articleItem.content}</p>
        <div className={classes.article_footer}>
          <p className={classes.views}>{articleItem.views / 1000}N lượt xem</p>
          <p className={classes.dot}>•</p>
          <p className={classes.date}>{publish_date}</p>
        </div>
      </div>
    </div>
  );
};
