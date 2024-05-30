import { ArticleTagIF } from "../../interface/ArticleTagIF";
import classes from "./ArticleTag.module.scss";

export const ArticleTag = ({ name }: ArticleTagIF) => {
  return (
    <div className={classes.container}>
      <p className={classes.name}>{name}</p>
    </div>
  );
};
