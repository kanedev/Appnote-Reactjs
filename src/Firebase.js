 import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDA6mQCsSig4g90WiTSX7Mc1t9-yb7MGMk",
    authDomain: "tuto-reactjs.firebaseapp.com",
    databaseURL: "https://tuto-reactjs.firebaseio.com",
    projectId: "tuto-reactjs",
    storageBucket: "tuto-reactjs.appspot.com",
    messagingSenderId: "336610780928",
    appId: "1:336610780928:web:7058c0a1003279b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
//   firebase.database().ref('students').set(
// [{
// name : 'walid',
// age : 34,
// ville : 'Paris'

// },{
//     name : 'walid',
//     age : 34,
//     ville : 'Paris'
    
//     }]).then(

//         console.log("Added")
//     );

// firebase.database().ref('students').remove().then(
//     console.log("removed")
//        );


firebase.database().ref('students').set(
    {
    name : 'walid',
    age : 34,
    ville : 'Paris'
    
    }).then(
    
            console.log("Added")
        );