var logInInputEmail = document.querySelector("#logInInputEmail");
var logInInputPassword = document.querySelector("#logInInputPassword");
var logInBTN = document.querySelector("#logInBTN");
var logInWarning = document.querySelector("#logInWarning");

var usersList = JSON.parse(localStorage.getItem('usersList')) || [];


(function(){
    if(localStorage.getItem("userslist")!== null){
        usersList = JSON.parse(localStorage.getItem("userslist"))
        console.log(usersList);
    }
})();

logInBTN.addEventListener('click', function(){
    if (validation()) {
        if (logIn()) {
            return true;
        }
        else {
            logInWarning.innerHTML = "email or password is not correct  ";
            logInWarning.classList.replace("d-none", "d-block");
            logInWarning.classList.replace("text-success", "text-danger");
        }
        
    }
})

function validation(){

    for (let i = 0; i < usersList.length; i++) {
        if(logInInputEmail.value == '' || logInInputPassword.value == ''){
            logInWarning.innerHTML = "all inputs are reuired"
            logInWarning.classList.replace("d-none", "d-block");
            logInWarning.classList.replace("text-success", "text-danger");
            return false;
    
        }
        
        return true;
        
    }
}

function logIn(){
    for (let i = 0; i < usersList.length; i++) {
        
        if(usersList[i].email.toLowerCase() == logInInputEmail.value.toLowerCase() && usersList[i].password == logInInputPassword.value){
            window.location.href = "home.html"
            localStorage.setItem('sessionUsername', usersList[i].name)
            console.log("finally");
            return true;
        }
        
    }
    return false;
}


var togglePasswordButton = document.getElementById('togglePassword');
togglePasswordButton.addEventListener('click', function() {
    if (logInInputPassword.type === 'password') {
        logInInputPassword.type = 'text';
    } else {
        logInInputPassword.type = 'password';
    }
});