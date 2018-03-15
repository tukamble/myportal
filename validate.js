window.onload = function(){
    var submitbtn = document.getElementById("btnSubmit");
    submitbtn.onclick = function(){
        if(document.getElementById("fullname").value == ""){
            document.getElementById("fullnameError").innerHTML = "Enter your Name";
            return false;
        } else if(document.getElementById("email").value == ""){
            document.getElementById("emailError").innerHTML = "Enter your email";
            return false;
        } else if(document.getElementById("mobile").value == ""){
            document.getElementById("mobileError").innerHTML = "Enter your mobile";
            return false;
        } else if(document.getElementById("username").value == ""){
            document.getElementById("usernameError").innerHTML = "Enter your username";
            return false;
        } else if(document.getElementById("password").value == ""){
            document.getElementById("passwordError").innerHTML = "Enter your password";
            return false;
        } else {
            document.getElementById("fullnameError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("mobileError").innerHTML = "";
            document.getElementById("usernameError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";
            return true;
        }


    }

    var mobileInp = document.getElementById("mobile");
    mobileInp.onkeypress = function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57) {
            return true;
        }
        return false;
    }

    var emailInp = document.getElementById("email");
    emailInp.onblur = function(){
        //console.log(emailInp.value);
        if(!(emailInp.value.indexOf('@') > -1)) {
            document.getElementById("emailError").innerHTML = "Enter Proper email";
            document.getElementById("email").value = "";
        } else {
            document.getElementById("emailError").innerHTML = "";
        }

        if(!(emailInp.value.indexOf('.') > -1)) {
            document.getElementById("emailError").innerHTML = "Enter Proper email";
            document.getElementById("email").value = "";
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
    }
}