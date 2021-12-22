import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB04OGufyQ9r8gHlomnGkLriDYieTk1OEY",
    authDomain: "la-boutique-del-anteojo-db.firebaseapp.com",
    projectId: "la-boutique-del-anteojo-db",
    storageBucket: "la-boutique-del-anteojo-db.appspot.com",
    messagingSenderId: "561208864230",
    appId: "1:561208864230:web:5b35404076d04c4eebba27",
    measurementId: "G-CLFSG7MBLW"
});

export const auth = firebase.auth();

export default {firebaseApp, auth};