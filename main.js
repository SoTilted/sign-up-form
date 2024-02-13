passwordInputs=document.getElementsByName('password')
errorText=document.getElementsByClassName('error-text')

for (password of passwordInputs){
    password.addEventListener('keyup',()=>{
        console.log(passwordInputs[0].value,passwordInputs[1].value)
        if(passwordInputs[0].value===passwordInputs[1].value && passwordInputs[0].value!='')  {
            passwordInputs[0].classList.remove('error')
            passwordInputs[1].classList.remove('error')
            errorText[0].textContent='';
        }
        else {
            passwordInputs[0].classList.add('error')
            passwordInputs[1].classList.add('error')
            errorText[0].textContent='*Passwords do not match';
        }
    });
    
}
