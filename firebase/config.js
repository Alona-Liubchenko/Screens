import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD0h5dlJOq_OEwK7ZWOrctPO1iaECV3kyc",
//   authDomain: "screens-8ad3a.firebaseapp.com",
//   projectId: "screens-8ad3a",
//   storageBucket: "screens-8ad3a.appspot.com",
//   messagingSenderId: "207549155690",
//   appId: "1:207549155690:web:593a2e4001377b83c0bd13",
//   measurementId: "G-S416Y4GG29",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAz8UeWM_ueyJ-Uz3bSFQ4VBqTABGJxRcU",
  authDomain: "posts-4d05b.firebaseapp.com",
  projectId: "posts-4d05b",
  storageBucket: "posts-4d05b.appspot.com",
  messagingSenderId: "646936144489",
  appId: "1:646936144489:web:5517021e376d632cd050f8",
  measurementId: "G-1W5ZGNR3CC",
};

// Initialize Firebase
// const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase.initializeApp(firebaseConfig);
// export default db;
