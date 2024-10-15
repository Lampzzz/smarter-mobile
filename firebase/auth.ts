import { router } from "expo-router";
import { addDoc, collection } from "@firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

import { auth, db } from "./config";
import { uploadFile } from "./storage";
import { User } from "@/types/type";

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
      // auth_id: userCredential.user.uid,
      photo: photoURL,
      ...userData,
    });

    // await login(data.contactInfo, data.password);
  } catch (error: any) {
    console.error(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.replace("/home");
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    router.replace("/sign-in");
  } catch (error) {
    console.error(error);
  }
};
