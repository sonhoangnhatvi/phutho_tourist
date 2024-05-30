// src/utils.ts

import { Timestamp } from "firebase/firestore"; // Import Timestamp type

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

interface Articles {
  id: string;
  author: string;
  content: string;
  publish_date: Date;
  tags: number[];
  title: string;
  views: number;
}

// Ham lay danh sach 3 bai viet moi nhat
export const getNewArticles = (articles: Articles[]) => {
  return articles.slice(0, 3);
};
