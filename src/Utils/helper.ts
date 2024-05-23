// src/utils.ts

import { Timestamp } from "firebase/firestore"; // Import Timestamp type

export const convertFirebaseTimestampToDate = (timestamp: Timestamp | null) => {
  // Check for null or invalid timestamp
  if (!timestamp || !timestamp.seconds) {
    return null; // Handle invalid timestamps gracefully
  }

  // Extract seconds and nanoseconds
  const seconds = timestamp.seconds;
  const nanoseconds = timestamp.nanoseconds; // Default to 0 if not provided

  // Create a JavaScript Date object from seconds
  const date = new Date(seconds * 1000);

  // Format the date as dd/mm/yyyy with leading zeros
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
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
