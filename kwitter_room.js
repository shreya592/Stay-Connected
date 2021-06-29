
//ADD YOUR FIREBASE LINKS HERE ⬇️
var firebaseConfig = {
  apiKey: "AIzaSyBezOllVsmLfHDCv0EdraOEn0GH81rhYH0",
  authDomain: "stay-connected-8b7d7.firebaseapp.com",
  projectId: "stay-connected-8b7d7",
  storageBucket: "stay-connected-8b7d7.appspot.com",
  messagingSenderId: "892339189409",
  appId: "1:892339189409:web:d3e66210b39c57bc83e2e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    
user_names= localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!"

  

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

//Functions

function logout()
    {
      
      window.location="index.html";  
    }

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name "
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_room.html";
    }

    function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_room.html";
      }



