const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyAn7JjHWo4b1V8RJA7AkkojYcs5fdhkt6o",
  authDomain: "quizapp-a52ab.firebaseapp.com",
  databaseURL: "https://quizapp-a52ab-default-rtdb.firebaseio.com",
  projectId: "quizapp-a52ab",
  storageBucket: "quizapp-a52ab.appspot.com",
  messagingSenderId: "272134491353",
  appId: "1:272134491353:web:8f7c2af7fceeea523482c8"
};

class BaseStore {
  constructor(props) {
    // workaround to prevent initializing multiple times
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebase.firestore.setLogLevel('debug');
    }

    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
  }
}

export default BaseStore;
