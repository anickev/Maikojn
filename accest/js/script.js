function select(){
    let select = document.getElementById("textdown")
    if(select.style.display === "none"){
        select.style.display ="block"
    }
    else{
        select.style.display = "none"
    }
}
function option1(){
    let transtext = document.getElementsByTagName("button")[1]
    transtext.innerHTML =  'All items';
}
function option2(){
    let transtext = document.getElementsByTagName("button")[1]
    transtext.innerHTML =  'Clothings';
}
function option3(){
    let transtext = document.getElementsByTagName("button")[1]
    transtext.innerHTML =  'Toys';
}
function option4(){
    let transtext = document.getElementsByTagName("button")[1]
    transtext.innerHTML =  'Decorations';
}
