const firebaseConfig = {
    apiKey: "AIzaSyDXL0ZZGqerU7KaqZDjSEe4SYsq3tC5uXY",
    authDomain: "kwitter-17345.firebaseapp.com",
    databaseURL: "https://kwitter-17345-default-rtdb.firebaseio.com",
    projectId: "kwitter-17345",
    storageBucket: "kwitter-17345.appspot.com",
    messagingSenderId: "849573996350",
    appId: "1:849573996350:web:1aed5dda17564aa0c9ae6f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
