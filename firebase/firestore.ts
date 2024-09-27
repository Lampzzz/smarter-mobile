import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
  limit,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "@firebase/firestore";

import { db } from "./config";
import { uploadFile } from "./storage";

export const getUserData = async (uid: string) => {
  try {
    const userQuery = query(
      collection(db, "users"),
      where("auth_id", "==", uid),
      limit(1)
    );
    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
      return { id: userSnapshot.docs[0].id, ...userSnapshot.docs[0].data() };
    }

    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    }

    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
