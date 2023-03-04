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
//YOUR FIREBASE LINKS
 
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 
 function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
             
       document.getElementById("msg").value = "";
      }
 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


