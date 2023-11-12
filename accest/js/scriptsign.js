function checkform(){
    let email = document.getElementById("Email")
    let name = document.getElementById("Name")
    let pass = document.getElementById("Pass")
    let passconfirm= document.getElementById("Passconfirm")
    let error1 = document.getElementById("namee")
    let error2 = document.getElementById("passe")
    let error3 = document.getElementById("emaile")
    let error4 = document.getElementById("passconfirme")
    if (name.value!=""){
        if(name.value.length<8){
            error1.innerHTML = "Please enter more than 8 characters"
            name.focus();
            return false;
        }
        else{
            error1.innerHTML = ""
        }
    }
    else{
        error1.innerHTML = "Error"
        name.focus();
        return false;
    }
    if (email.value!=""){
        error3.innerHTML =""
    }
    else{
        error3.innerHTML = "Error"
        email.focus();
        return false;
    }
    if (pass.value!=""){
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
    if (passconfirm.value!=""){
        if(pass.value!=passconfirm.value){
            error4.innerHTML = "Error"
            passconfirm.focus();
            return false;
        }
        else{
            error4.innerHTML = ""
        }
    }
    else{
        error4.innerHTML = "Error"
        passconfirm.focus();
        return false;
    }
    window.location.href = "index.html"

}