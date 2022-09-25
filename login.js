//Email validation

function validate()
{
    let email = document.getElementById("email");
    let error = document.getElementById("error");
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
var messages = document.getElementById("message");
var passexp =/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
 function passwordvalid() {

  if(passexp.test(myInput.value)){
    messages.innerHTML = "Valid password";
    messages.style.color = "green";
    myInput.style.borderColor ="green";
    return true;
  }
  else{
  messages.innerHTML = "Invalid password";
  messages.style.color = "red";
    return false;
  }
}





