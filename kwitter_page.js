var firebaseConfig = {
      apiKey: "AIzaSyA0k-GA3RaJ1z60dTwVGi3t2uSLXOW6mBY",
      authDomain: "kwitter-1b976.firebaseapp.com",
      databaseURL: "https://kwitter-1b976.firebaseio.com",
      projectId: "kwitter-1b976",
      storageBucket: "kwitter-1b976.appspot.com",
      messagingSenderId: "753855729343",
      appId: "1:753855729343:web:72847896deb7516594000a",
      measurementId: "G-MD5TGJSDY6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("Room Name");
console.log(roomName);


function send(){
   message = document.getElementById("message").value;
   firebase.database().ref(roomName).push({
     name: userName,
     likes: 0,
     message: message

   });
   document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        var namee = message_data["name"];
        var messagee = message_data["message"];
        var likes = message_data["likes"];

        var namePlace = "<h4>" + namee + " " + "<img src='tick.png' class='user_tick'></h4>";
        var messagePlace = "<h4 class='message_h4'>" + messagee + "</h4>";
        var likeButton = "<button class='btn btn-primary' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
        var span = "<span class='glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span></button><hr>";
        var row = namePlace + messagePlace + likeButton + span;
        document.getElementById("output").innerHTML += row;






//End code
      } });  }); }
getData();

function updateLike(message_id){
  console.log("CLicked on like button: " + message_id + " " + "times!");
  var buttonIdd = message_id;
  var likeee = document.getElementById(buttonIdd).value;
  var updatedLike = Number(likeee) + 1;
  console.log(updatedLike);

  firebase.database().ref(roomName).child(message_id).update({
    likes: updatedLike
  });
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("Room Name");
      window.location = "index.html";
}
