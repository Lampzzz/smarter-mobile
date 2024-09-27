import { getDownloadURL, uploadBytes, ref } from "@firebase/storage";

import { storage } from "./config";
import { ErrorHandler } from "@/lib/utils";

export const uploadFile = async (path: string, uri: string) => {
  try {
    const fileRef = ref(storage, `${path}/${path}${Date.now()}`);
    const response = await fetch(uri);
    const fileBlob = await response.blob();

    await uploadBytes(fileRef, fileBlob);

    const downloadURL = await getDownloadURL(fileRef);

    return downloadURL;
  } catch (error) {
    ErrorHandler(error);
  }
};
