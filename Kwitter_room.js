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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose:" adding room name"
   });

         localStorage.getItem("room_name", room_name);

         window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
