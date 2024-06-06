var signUpInputName = document.querySelector('#signUpInputName');
var signUpInputEmail = document.querySelector("#signUpInputEmail");
var signUpInputPassword = document.querySelector("#signUpInputPassword");
var emailRepeatedWarning = document.querySelector("#emailRepeatedWarning");
var signUpBtn = document.querySelector("#signUpBtn");

var usersList = JSON.parse(localStorage.getItem('userslist')) || [];

signUpBtn.addEventListener("click", function(){
    if(!isEmailRepeated() & validation()){
        var user = {
            name: signUpInputName.value,
            email: signUpInputEmail.value,
            password: signUpInputPassword.value,
        }

        usersList.push(user);
        localStorage.setItem("userslist", JSON.stringify(usersList));
        
        console.log(usersList);

        emailRepeatedWarning.innerHTML = "Success";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-danger", "text-success");

        window.location.href = "index.html";
   }

})

function isEmailRepeated(){
    for (let i = 0; i < usersList.length; i++) {
        if(usersList[i].email.toLowerCase().includes(signUpInputEmail.value)){
            emailRepeatedWarning.innerHTML = "Email Already Exists";
            emailRepeatedWarning.classList.replace("d-none", "d-block");
            emailRepeatedWarning.classList.replace("text-success", "text-danger")

            return true;
        }
        
    }
    return false;

}

function validation(){

    var nameRegex = /^[a-z0-9_-]{3,15}$/;
    var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


    if(signUpInputName.value == '' || signUpInputEmail.value == '' || signUpInputPassword.value == ''){
        emailRepeatedWarning.innerHTML = "All inputs are required";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;

    }else if(nameRegex.test(signUpInputName.value) == false){
        emailRepeatedWarning.innerHTML = 'user name must be between 3 and 15 chars';
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;

    }else if(emailRegex.test(signUpInputEmail.value) == false){
        emailRepeatedWarning.innerHTML = 'invalid Email';
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;

    }else if(passwordRegex.test(signUpInputPassword.value) == false){
        emailRepeatedWarning.innerHTML = "password must be at Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character";
        emailRepeatedWarning.classList.replace("d-none", "d-block");
        emailRepeatedWarning.classList.replace("text-success", "text-danger");
        return false;
    }
    return true;
}




var togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function() {
    if (signUpInputPassword.type === 'password') {
        signUpInputPassword.type = 'text';
    } else {
        signUpInputPassword.type = 'password';
    }
});