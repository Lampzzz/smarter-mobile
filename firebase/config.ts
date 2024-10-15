import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth, initializeAuth } from "@firebase/auth";

const config: FirebaseConfig = {
  apiKey: "AIzaSyBNTcylkleqkKwu8M47Z1S7mo3J5zyI8lU",
  authDomain: "smarter-293ff.firebaseapp.com",
  projectId: "smarter-293ff",
  storageBucket: "smarter-293ff.appspot.com",
  messagingSenderId: "651315340090",
  appId: "1:651315340090:android:37b388c0cf90367489a603",
  measurementId: "",
};

const app = initializeApp(config);
const db = getFirestore(app);
const storage = getStorage(app);
let auth: any = getAuth(app);

// try {
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//   });
// } catch (error: any) {
//   if (error.code === "auth/already-initialized") {
//     auth = getAuth(app);
//   } else {
//     throw error;
//   }
// }

export { app, db, auth, storage };
