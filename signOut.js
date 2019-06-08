var signOutButton = document.querySelector("#signOutButton");
signOutButton.onclick = function() {
    localStorage.removeItem("loggedIn");
    window.location.replace("login.html");
};