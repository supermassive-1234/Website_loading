//free to copy,edit.
const signInButton=document.querySelector("#sign-in-btn");
const signUpButton=document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");
const usernameInputField=document.getElementById('usernameInput');
const emailInputField=document.getElementById('emailInput');
const passwordInputField=document.getElementById('passwordInput');

const nameErrorText=document.getElementById('errorText');
const emailErrorText=document.getElementById('EmailErrorText');
const passwordErrorText=document.getElementById('passwordErrorText');

signUpButton.addEventListener('click',()=>{
  container.classList.add("sign-up-mode");
});
signInButton.addEventListener('click',()=>{
  container.classList.remove("sign-up-mode");
});

function validateName(){
  if(usernameInputField.value==='' || usernameInputField.value===' '){
    nameErrorText.style.color='red';
    nameErrorText.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`+' '+'Required field.';
 } else{
  nameErrorText.style.color='green';
  nameErrorText.innerHTML= `<i class="fa-solid fa-circle-check"></i>`+''+'Valid username has been entered.';
  setTimeout(function(){
  nameErrorText.style.display='none';
                        },3000);
};
};

function validateEmail(){
  if(!emailInputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ){
    emailErrorText.style.color='red';
    emailErrorText.innerHTML= `<i class="fa-solid fa-circle-xmark "></i>`+' '+'Invalid email address has been entered.';
    
}else{
    emailErrorText.style.color='green';
    emailErrorText.innerHTML=`<i class="fa-solid fa-circle-check"></i>`+''+'Valid email has been entered.';
    setTimeout(function(){
      emailErrorText.style.display='none';
    },3000);
}
}
function validatePassword(){
  if(passwordInputField.value.length <=6 || passwordInputField.value===''){
    passwordErrorText.style.color='red';
    passwordErrorText.innerHTML= `<i class="fa-solid fa-circle-xmark "></i>`+' '+'Too weak password.';
    
}else if(!passwordInputField.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
    passwordErrorText.style.color='red';
    passwordErrorText.innerHTML= `<i class="fa-solid fa-circle-xmark "></i>`+' '+'Check again.enter a valid one.';
}else{
  passwordErrorText.style.color='green';
  passwordErrorText.innerHTML=`<i class="fa-solid fa-circle-check"></i>`+''+'Strong password.';
  setTimeout(function(){
    passwordErrorText.style.display='none';
  },3000)
}
}























 