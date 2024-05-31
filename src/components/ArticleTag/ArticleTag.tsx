import React from "react";
import classes from "./ArticleTag.module.scss";

interface ArticleTagProps {
  name: string;
}

export const ArticleTag: React.FC<ArticleTagProps> = ({ name }) => {
  return (
    <div className={classes.container}>
      <p className={classes.name}>{name}</p>
    </div>
  );
};
