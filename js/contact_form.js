window.onload = function(){
  var mainForm = document.getElementById("mainForm");
  mainForm.onsubmit = function(e){
    e.preventDefault();
    alert("form submit prevented");
  }
}

window.onload = function(){
  var mainForm = document.getElementById("mainForm");
  mainForm.onsubmit = function(e){
    e.preventDefault();
    alert("form submit prevented");
  }
}

// Couldn't effect the last instruction

function isBlank(inputField){
  if (inputField.value==""){
  return true;
  }
  return false;
}


function makeRed(inputDiv){
  inputDiv.style.backgroundColor="#AA0000";
  inputDiv.parentNode.style.backgroundColor="#AA0000";
  inputDiv.parentNode.style.color="#FFFFFF";
}


mainForm.onsubmit = function(e){
  var requiredInputs = document.querySelectorAll(".required");
  for (var i=0; i < requiredInputs.length; i++){
    if(isBlank(requiredInputs[i]) ){
      e.preventDefault();
      requiredInputs[i].style.backgroundColor="#AA0000";
    } 
  }
  var email = document.getElementById("email");
  if(! isValidEmail(email.value)){
    e.preventDefault();
    email.style.backgroundColor="#AA0000";
    email.parentNode.style.backgroundColor="#AA0000";
    email.parentNode.style.color="#FFFFFF";
  }
}


requiredInputs[i].parentNode.style.backgroundColor="#AA0000";
requiredInputs[i].parentNode.style.color="#FFFFFF";

var requiredInputs = document.querySelectorAll(".required");
for (var i=0; i < requiredInputs.length; i++){
  requiredInputs[i].onfocus = function(){
    this.style.backgroundColor = "#EEEE00";
  } 
}

function isValidEmail(email){
       var dotPos = email.lastIndexOf(".");//get the position of the last
  
       var atPos =  email.lastIndexOf("@");//get the position of the

       if ( dotPos + 2 >= email.length ){
           return false;
       }
       if ( atPos + 2 > dotPos ){
           return false;
       }
       if( atPos < 1){
           return false;
       }
return true;
}


 

