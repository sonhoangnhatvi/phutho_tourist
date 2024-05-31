// src/utils.ts

import { Timestamp } from "firebase/firestore"; // Import Timestamp type
import { ArticleItem } from "../interface/ArticleItem";
import { ArticleTagCollection } from "../interface/ArticleTag";

export const convertFirebaseTimestampToDate = (
  timestamp: Timestamp | null,
  format: "formatddmmyyyy" | "format_monthname_dd_yyyy" = "formatddmmyyyy"
) => {
  // Check for null or invalid timestamp
  if (!timestamp || !timestamp.seconds) {
    return null; // Handle invalid timestamps gracefully
  }

  // Extract seconds and nanoseconds
  const seconds = timestamp.seconds;

  // Create a JavaScript Date object from seconds
  const date = new Date(seconds * 1000);

  if (format === "formatddmmyyyy") {
    // Format the date as "dd/mm/yyyy"
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } else if (format === "format_monthname_dd_yyyy") {
    // Format the date as "Tháng Một 01, 2019"
    const monthNames = [
      "Tháng Một",
      "Tháng Hai",
      "Tháng Ba",
      "Tháng Tư",
      "Tháng Năm",
      "Tháng Sáu",
      "Tháng Bảy",
      "Tháng Tám",
      "Tháng Chín",
      "Tháng Mười",
      "Tháng Mười Một",
      "Tháng Mười Hai",
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
  } else {
    throw new Error("Invalid format specified");
  }
};

// Hàm loại bỏ dấu (diacritics)
export const removeDiacritics = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Hàm loại bỏ khoảng trắng
export const removeWhitespaces = (str: string): string => {
  return str.replace(/\s+/g, "");
};

// Hàm kết hợp cả hai
export const normalizeString = (str: string): string => {
  return removeWhitespaces(removeDiacritics(str));
};

// REGION : Ham lay danh sach viet moi nhat
// Function to compare two publish_date objects
const comparePublishDate = (
  a?: { seconds: number; nanoseconds: number },
  b?: { seconds: number; nanoseconds: number }
): number => {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  if (a.seconds !== b.seconds) {
    return a.seconds - b.seconds;
  }
  return a.nanoseconds - b.nanoseconds;
};

// Function to sort articles
const sortArticlesByPublishDate = (articles: ArticleItem[]): ArticleItem[] => {
  return articles.sort((a, b) => {
    return comparePublishDate(a.publish_date, b.publish_date);
  });
};

export const getNewArticles = (
  articles: ArticleItem[],
  numberOfArticles: number
) => {
  return sortArticlesByPublishDate(articles).slice(0, numberOfArticles);
};

// END REGION

// Get articleTags
// Function to get array of article_tag_name from ArticleTagCollection based on tags array in ArticleCollection
export function getArticleTags(
  articleItem: ArticleItem,
  articleTagCollection: ArticleTagCollection[]
): string[] {
  const articleTags: string[] = [];

  // console.log(
  //   "articleCollection.tags[0]",
  //   typeof articleCollection.tags[0],
  //   articleCollection.tags[0]
  // );

  // console.log(
  //   "articleTagCollection.tags[0]",
  //   typeof articleTagCollection[0].id,
  //   articleTagCollection[0].id
  // );

  // Iterate through tags array in each ArticleCollection item
  articleItem.tags.forEach((tag) => {
    // Find corresponding article_tag_name from ArticleTagCollection
    const articleTag = articleTagCollection.find(
      (tagItem) => parseInt(tagItem.id) === tag
    );
    // If articleTag is found, add its name to articleTags array
    if (articleTag) {
      articleTags.push(articleTag.article_tag_name);
    }
  });
  return articleTags;
}

// Get truncateText
export const truncateText = (text: string, maxWords: number): string => {
  const words = text.split(" ");

  if (words.length <= maxWords) {
    return text;
  }

  const truncatedText = words.slice(0, maxWords).join(" ") + "...";
  return truncatedText;
};

// Get Related articles
export const relatedArticles = (
  articles: ArticleItem[],
  articleTags: ArticleTagCollection[]
): ArticleItem[] => {
  const tagIds = articleTags.map((tag) => parseInt(tag.id, 10));

  return articles.filter((article) =>
    article.tags.some((tag) => tagIds.includes(tag))
  );
};
