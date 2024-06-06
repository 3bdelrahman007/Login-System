var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('userName').innerHTML = "Welcome " + username
}

var logOut = document.getElementById("homeLogOut");
logOut.addEventListener('click', function(){
    logout()
})

function logout() {
    localStorage.removeItem('sessionUsername');
    window.location.href = "index.html"
}