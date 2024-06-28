var firebaseConfig = {
      apiKey: "AIzaSyAY36zNzhUQs-d86gWCE1D8XRZrhBizrD0",
      authDomain: "letschatwebapp-c92d6.firebaseapp.com",
      databaseURL: "https://letschatwebapp-c92d6-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-c92d6",
      storageBucket: "letschatwebapp-c92d6.appspot.com",
      messagingSenderId: "831918287586",
      appId: "1:831918287586:web:9ba95cbff199f32591ccbb",
      measurementId: "G-2DHFK7987H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();

function send() {
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like: 0
   });

   document.getElementById("msg").value = "";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
         window.location = "index.html";
}
