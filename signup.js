let email = document.getElementById("email");
let error = document.getElementById("error");
function validate()
{
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}
email.onfocus = function(){
  document.getElementById("error").style.display = "block";
}
email.onblur = function(){
  document.getElementById("error").style.display = "none";
}


//password validation
var myInput = document.getElementById("password");
var messages = document.getElementById("messages");
<<<<<<< HEAD
var passexp =/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
function passwordvalidates(){

  if(passexp.test(myInput.value)){
    messages.innerHTML = "Password strength is Strong";
    messages.style.color = "green";
    myInput.style.borderColor ="green";
    return true;
  }
  else if(myInput.value.length >4 && (myInput.value.length <8)){
    messages.innerHTML = "Password strength is medium";
    messages.style.color = "orange";
    myInput.style.borderColor ="orange";
  }
  else{
  messages.innerHTML = "Password Strength is weak";
  messages.style.color = "red";
  myInput.style.borderColor ="red";
    return false;
  }
  
}

=======

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
//strength
  var weak = /[A-Z]/g;
  var medium = /[A-Z][a-z]/g;
  if(myInput.value.match("")){
    messages.innerHTML = "Enter Password";
  }
  if(myInput.value.match(weak)){
    messages.innerHTML = "Password is to weak";
    messages.style.color = "red";
    
  }
  if(myInput.value.match(medium)){
    messages.innerHTML = "Password strength is medium";
    messages.style.color = "orange"; 
  }
  if(myInput.value.length >= 8){
    messages.innerHTML = "Password is strong";
    messages.style.color = "green"; 
  } 
}
>>>>>>> 657a225a8c2297430aa2bd7c63b3c91fe982ff94
myInput.onfocus = function(){
  document.getElementById("messages").style.display = "block";
}
myInput.onblur = function(){
  document.getElementById("messages").style.display = "none";
}

<<<<<<< HEAD


=======
>>>>>>> 657a225a8c2297430aa2bd7c63b3c91fe982ff94
//confirm password
var confirmmessage = document.getElementById("confirmmessage");
var confirmpassword = document.getElementById("confirmpassword");

<<<<<<< HEAD
 function confirmpasswords() {
=======
confirmpassword.onkeyup = function() {
>>>>>>> 657a225a8c2297430aa2bd7c63b3c91fe982ff94
  if(confirmpassword.value!=myInput.value){
    confirmmessage.innerHTML = "Passwords not matched";
    confirmmessage.style.color = "red";
  }
  else if(confirmpassword.value=myInput.value){
    confirmmessage.innerHTML = "Password matched";
    confirmmessage.style.color = "green";
  }
}
confirmpassword.onfocus = function(){
  document.getElementById("confirmmessage").style.display = "block";
}
confirmpassword.onblur = function(){
  document.getElementById("confirmmessage").style.display = "none";
}

//Phone number validation

<<<<<<< HEAD
var phoneno = /\b\d{3}[-. ]?\d{3}[-. ]?\d{4}\b/g
var phonemessage = document.getElementById("phonemessage");
var phone = document.getElementById("phone");

function numbervalidates(){

  if(phoneno.test(phone.value)){
    phonemessage.innerHTML = "Valid Number";
=======
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phonemessage = document.getElementById("phonemessage");
var phone = document.getElementById("phone");

phone.onkeyup = function validates(){

  if(phoneno.test(phone.value)){
    phonemessage.innerHTML = "Valid Phone Number";
>>>>>>> 657a225a8c2297430aa2bd7c63b3c91fe982ff94
    phonemessage.style.color = "green";
    return true;
  }
  else{
<<<<<<< HEAD
  phonemessage.innerHTML = "Invalid number";
=======
  phonemessage.innerHTML = "Invalid Phone number";
>>>>>>> 657a225a8c2297430aa2bd7c63b3c91fe982ff94
  phonemessage.style.color = "red";
    return false;
  }
}
phone.onfocus = function(){
  document.getElementById("phonemessage").style.display = "block";
}
phone.onblur = function(){
  document.getElementById("phonemessage").style.display = "none";
}

