import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMr7X4LUNhsN_c70tkAraVogtSAdfd380",
    authDomain: "infinite-83908.firebaseapp.com",
    projectId: "infinite-83908",
    storageBucket: "infinite-83908.appspot.com",
    messagingSenderId: "1036893456324",
    appId: "1:1036893456324:web:50f1d9fc11aea7bc208691"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);