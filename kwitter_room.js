//Añade los enlaces de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWiuNxHcfezK0_7_tn4gcgXZ3h198ABN4",
  authDomain: "kwitter-c7627.firebaseapp.com",
  databaseURL: "https://kwitter-c7627-default-rtdb.firebaseio.com",
  projectId: "kwitter-c7627",
  storageBucket: "kwitter-c7627.firebasestorage.app",
  messagingSenderId: "267279462962",
  appId: "1:267279462962:web:d448b14ae5e12f0e3b822b"
};

firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
