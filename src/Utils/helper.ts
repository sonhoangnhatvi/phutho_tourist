// src/utils.ts

import { Timestamp } from "firebase/firestore"; // Import Timestamp type
import { ArticleItem } from "../interface/ArticleItem";
import { ArticleCollection } from "../interface/ArticleCollection";
import { ArticleTagCollection } from "../interface/ArticleTagCollection";

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

// Ham lay danh sach 3 bai viet moi nhat
export const getNewArticles = (articles: ArticleItem[]) => {
  return articles.slice(0, 3);
};

// Get articleTags
// Function to get array of article_tag_name from ArticleTagCollection based on tags array in ArticleCollection
export function getArticleTags(
  articleCollection: ArticleCollection,
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
  articleCollection.tags.forEach((tag) => {
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

export const truncateText = (text: string, maxWords: number): string => {
  const words = text.split(" ");

  if (words.length <= maxWords) {
    return text;
  }

  const truncatedText = words.slice(0, maxWords).join(" ") + "...";
  return truncatedText;
};
