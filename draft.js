
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDdz31mjFj8wCcPaKVZngH9FRGDhNmaFUo",
      authDomain: "tst12345-df8d2.firebaseapp.com",
      projectId: "tst12345-df8d2",
      storageBucket: "tst12345-df8d2.appspot.com",
      messagingSenderId: "46702297344",
      appId: "1:46702297344:web:d9ff8a7615cb95df7bf3e5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
    user_names= localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_names + "!";


    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name "
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_room.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_room.html";
      }

     
