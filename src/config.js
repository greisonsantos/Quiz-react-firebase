import Firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = {
    apiKey: "AIzaSyAYS-xH-CiaLlhmrNSiXa6YG5mJ9odnCuk",
    authDomain: "quiz-a9247.firebaseapp.com",
    databaseURL: "https://quiz-a9247.firebaseio.com",
    projectId: "quiz-a9247",
    storageBucket: "quiz-a9247.appspot.com",
    messagingSenderId: "696807281461"
  };
   const db = firebase.database(firebaseInfo)
   const config= Rebase.createClass(db)


export default config
