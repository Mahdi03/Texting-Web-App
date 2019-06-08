var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn === null) {
    window.location.replace("login.html");
} else {
    alert("You have been logged in automatically...enjoy!!");
}
//maybe add more functionality to this later