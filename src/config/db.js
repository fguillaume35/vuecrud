import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCkbwzDGx6GKBvyREtBBskAsatPcJ8UiLw",
    authDomain: "vuecrud-80396.firebaseapp.com",
    databaseURL: "https://vuecrud-80396.firebaseio.com",
    projectId: "vuecrud-80396",
    storageBucket: "vuecrud-80396.appspot.com",
    messagingSenderId: "190469394279"
  };
    
let app = Firebase.initializeApp(config)
export const db= app.database()