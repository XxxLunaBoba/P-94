
//ADD YOUR FIREBASE LINKS
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

  

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}