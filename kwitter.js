function login(){
    var userName = document.getElementById("username").value;
    localStorage.setItem("userName",userName);

    window.location = "kwitter_room.html";
}