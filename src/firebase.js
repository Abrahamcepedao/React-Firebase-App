import * as firebase  from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOJcAEk_OGMf1NOOWdGMmC7gcla93UD1o",
    authDomain: "react-crud-8b3e5.firebaseapp.com",
    databaseURL: "https://react-crud-8b3e5.firebaseio.com",
    projectId: "react-crud-8b3e5",
    storageBucket: "react-crud-8b3e5.appspot.com",
    messagingSenderId: "567867266749",
    appId: "1:567867266749:web:c16866a6353f45de5d49d4"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

// export DataBase reference
export default fireDb.database().ref();