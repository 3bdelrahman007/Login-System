var signUpInputName = document.querySelector('#signUpInputName');
var signUpInputEmail = document.querySelector("#signUpInputEmail");
var signUpInputPassword = document.querySelector("#signUpInputPassword");
var emailRepeatedWarning = document.querySelector("#emailRepeatedWarning");
var signUpBtn = document.querySelector("#signUpBtn");

var usersList = JSON.parse(localStorage.getItem('usersList')) || [];



signUpBtn.addEventListener("click", function(){
    if(!isEmailRepeated()){
        var user = {
            name : signUpInputName.value,
            email : signUpInputEmail.value,
            password : signUpInputPassword.value,
        }

        usersList.push(user);
        setLocalStorage(usersList)
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
            emailRepeatedWarning.classList.remove("d-none");
            emailRepeatedWarning.classList.replace("text-success", "text-danger")

            return true;
        }
        
    }
    return false;
}

function setLocalStorage(list) {
    localStorage.setItem("usersList", JSON.stringify(list));
}
