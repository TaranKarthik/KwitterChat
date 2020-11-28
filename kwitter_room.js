



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
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var User_Name = localStorage.getItem("userName");
document.getElementById("username1").innerHTML = "Welcome, " + User_Name + " " + "!";


function addRoom(){
      RoomName = document.getElementById("add_Room").value;
      localStorage.setItem("Room Name",RoomName);
      firebase.database().ref("/").child(RoomName).update({
            purpose: "Adding Room Name"
      });
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start Code
                  console.log("The Room Names Are- " + Room_names);
                  row = "<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#" +  Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;


                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_Name",name);

      window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("Room Name");
      window.location = "index.html";
}
