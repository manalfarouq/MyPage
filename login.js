
let form = document.querySelector('form'); 
const container=document.getElementsByClassName('container');
const container1=document.getElementsByClassName('container1');
 user = form.querySelector('.user');
 uInput = user.querySelector('input');
 password = form.querySelector('.password');
 pInput = password.querySelector('input');


$(document).ready(function(){
    $(".container1").hide();
});


function CON()
{
$(document).ready(function(){
    $(".container1").hide();
    $(".container").show();
})};

 function CON1()
 {
$(document).ready(function(){
    $(".container").hide();
    $(".container1").show();
})};

 form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form for submitting*/
    if(uInput.value == ""){ // if user is empty;
    user.classList.add("shake", "error");
    }
    if(pInput.value == ""){ // if password is empty;
    password.classList.add("shake", "error");}

    setTimeout(() => {//remove shake class after 500ms
        user.classList.remove("shake");
        password.classList.remove("shake");
},500);

uInput.onkeyup = ()=>{checkuser();}

function checkuser(){
    if(uInput.value ==""){//if user is empty
  user.classList.add("error");
  user.classList.remove("valid");
    }
    else{
       user.classList.remove("error");
       user.classList.add("valid");
    }
}
 
 pInput.onkeyup = ()=>{checkPass();}
function checkPass(){
    if(pInput.value ==""){//if pass is empty
   password.classList.add("error");
   password.classList.remove("valid");
    }
    else{
        password.classList.remove("error");
      password.classList.add("valid");
    }
}
//If error class not contains in user and password then user has entered proper details
if(!user.classList.contains("error") && !password.classList.contains("error")){
    window.location.href = "#";//remove that # and put the url where you want to submit the form data
 console.log("Form Submitted!");
}

}
/*
function setFormMessage(FormElement, type, message){
    const messageElement =FormElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message==success", "form__message==error");
    messageElement.classList.add('form__message--$(type)');
}

document.addEventListener("DOMContentLoaded", ()=>{
  const loginForm = document.querySelector("#login");
  const createAccuntForm = document.querySelector("#createAccount");

loginForm.addEventListener("submit", e=> {
    e.preventDefault();

    setFormMessage(loginForm, "error", "Invalid username/password combination");
});
});

document.querySelectorAll(".foinp").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "signupUsername" && e.target.value.lenght > 0 && e.target.value.lenght < 10){
            setInputElement, "Username must be at least 8 caracters in lenght"
        };
    })

})*/

/*
let userpass =document.getElementsByClassName("userpass");
let muser=  document.getElementsByClassName("muser");
let mpwd = document.getElementsByClassName("mpwd");

function verify(){
    if(document.form1.user.value=="" && document.form1.pwd.value==""){
        userpass.innerHTML = '<p>user and password invalid</p>';
    }
    else if(document.form1.user.value==""){
        muser.innerHTML = '<p>user invalid</p>';
    }
    
    else if(document.form1.pwd.value==""){
        mpwd.innerHTML = '<p>password invalid</p>';
    }
    }
     
    function verify1(){
    if(document.form2.full.value=="" && document.form2.pwd.value==""){
       userpass.innerHTML = '<p>user and password invalid</p>';
    }
    else if(document.form2.full.value==""){
        muser.innerHTML = '<p>user invalid</p>';
    }
    
    else if(document.form2.pwd.value==""){
        mpwd.innerHTML = '<p>password invalid</p>';
}
}
*/


