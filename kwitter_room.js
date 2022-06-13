
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDcVHP9tt7qvqKayq6VG_eBuWziQkKnhWA",
      authDomain: "kwitter-a0f67.firebaseapp.com",
      databaseURL: "https://kwitter-a0f67-default-rtdb.firebaseio.com",
      projectId: "kwitter-a0f67",
      storageBucket: "kwitter-a0f67.appspot.com",
      messagingSenderId: "491440970129",
      appId: "1:491440970129:web:3579347ed5fe007ddda230",
      measurementId: "G-EDT42EKLR4"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout () {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
{

}