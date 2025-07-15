
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0qED3MIszxg5mSoaixEY4BN4OhWjcO84",
  authDomain: "login-email-454bb.firebaseapp.com",
  projectId: "login-email-454bb",
  storageBucket: "login-email-454bb.firebasestorage.app",
  messagingSenderId: "156399258698",
  appId: "1:156399258698:web:294bcad9365eb8624caab3"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);