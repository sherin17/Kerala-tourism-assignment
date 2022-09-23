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
myInput.onfocus = function(){
  document.getElementById("messages").style.display = "block";
}
myInput.onblur = function(){
  document.getElementById("messages").style.display = "none";
}

//confirm password
var confirmmessage = document.getElementById("confirmmessage");
var confirmpassword = document.getElementById("confirmpassword");

confirmpassword.onkeyup = function() {
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

var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phonemessage = document.getElementById("phonemessage");
var phone = document.getElementById("phone");

phone.onkeyup = function validates(){

  if(phoneno.test(phone.value)){
    phonemessage.innerHTML = "Valid Phone Number";
    phonemessage.style.color = "green";
    return true;
  }
  else{
  phonemessage.innerHTML = "Invalid Phone number";
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

