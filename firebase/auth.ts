import { addDoc, collection } from "@firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

import { ErrorHandler } from "@/lib/utils";
import { auth, db } from "./config";
import { uploadFile } from "./storage";
import { router } from "expo-router";

export const register = async (data: User) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.contactInfo,
      data.password
    );

    const { password, photo, ...userData } = data;

    const photoURL = await uploadFile("photo", photo);

    await addDoc(collection(db, "users"), {
      auth_id: userCredential.user.uid,
      photo: photoURL,
      ...userData,
    });

    await login(data.contactInfo, data.password);
  } catch (error: unknown) {
    ErrorHandler(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    ErrorHandler(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    router.replace("/sign-in");
  } catch (error) {
    ErrorHandler(error);
  }
};
