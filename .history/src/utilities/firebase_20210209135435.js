import "firebase/auth";
import firebase from "firebase/app";
import 'fir'

const firebaseConfig = {
    // Firebase Config
    apiKey: "AIzaSyBe00p4W4EFMvz7pLyJpuTVDB_6xT1qzL8",
    authDomain: "vue-login-pro.firebaseapp.com",
    projectId: "vue-login-pro",
    storageBucket: "vue-login-pro.appspot.com",
    messagingSenderId: "314753680679",
    appId: "1:314753680679:web:722802dcea4202fb9c5502"
     
  };
  firebase.initializeApp(firebaseConfig);
  
export default firebase;