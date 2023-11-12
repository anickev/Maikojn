function checkform(){
    let email = document.getElementById("Email")
    let pass = document.getElementById("Pass")
    let error1 = document.getElementById("emaile")
    let error2 = document.getElementById("passe")
    if(email.value!=""){
        error1.innerHTML = ""
    }
    else{
        error1.innerHTML = "Error"
        email.focus();
        return false;
    }
    if(pass.value!=""){
        if(pass.value.length>30){
            error2.innerHTML = "Please below 30 characters"
            pass.focus();
            return false;
        }
        else{
            error2.innerHTML = ""
        }
    }
    else{
        error2.innerHTML = "Error"
        pass.focus();
        return false;
    }   
    window.location.href = "index.html"


}