var firebaseConfig = {
    apiKey: "AIzaSyBD2jpGWtnCRNXkRnJKtrubCle5uC7If6k",
    authDomain: "kwitter-8339a.firebaseapp.com",
    databaseURL: "https://kwitter-8339a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8339a",
    storageBucket: "kwitter-8339a.appspot.com",
    messagingSenderId: "636775835639",
    appId: "1:636775835639:web:126504f6ac1ff02b81b0f2"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
 username = document.getElementById("user_name").value;
 firebase.database().ref("/").child(username).update({ 
     purpose:"addinguser"
 }
 );
}