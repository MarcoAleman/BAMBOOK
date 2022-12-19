import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAB9RZOQhFTk8FCmKvQPHoiw0a1S3GWEC0",
  authDomain: "bambook-cff11.firebaseapp.com",
  projectId: "bambook-cff11",
  storageBucket: "bambook-cff11.appspot.com",
  messagingSenderId: "174886715854",
  appId: "1:174886715854:web:bb36ccc7b4ea963bfb6b9f",
  measurementId: "G-CMYDH8CNJZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app};