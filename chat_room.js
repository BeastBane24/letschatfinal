// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCtxTnyxwFTdpUDcPTbhx5BPmGDag-gEEg",
    authDomain: "newproject-27d6f.firebaseapp.com",
    databaseURL: "https://newproject-27d6f-default-rtdb.firebaseio.com",
    projectId: "newproject-27d6f",
    storageBucket: "newproject-27d6f.appspot.com",
    messagingSenderId: "966834842432",
    appId: "1:966834842432:web:2f900bdf689829177ae8a5"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    

function addRoom()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
     
    window.location = "chat_room.html";
    
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.getItem("room_name", name);
    window.location = "lets_chat_page.html";
}