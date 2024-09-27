import { Alert } from "react-native";

export const formatDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export const ErrorHandler = (error: any) => {
  if (error instanceof Error) {
    console.log(error.message);
    Alert.alert("Error", error.message);
    throw new Error(error.message);
  } else {
    console.log("An unknown error occurred");
    throw new Error(String(error));
  }
};
