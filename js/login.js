const loginBtn = document.getElementsByClassName('btn-login')[0];
const idInput = document.getElementsByClassName('text-input')[0];
const passwordInput = document.getElementsByClassName('password-text-input')[0];

let idText = "";
let passwordText = "";

idInput.addEventListener("change", function(){
    idText = idInput.value;
    console.log('id changed', idText);

    if (idText.length > 0 || passwordText.length > 0){
        loginBtn.style.backgroundColor='#3897f0';
    }else{
        loginBtn.style.backgroundColor='#abd1f5';
    }
});

passwordInput.addEventListener("change", function(){
    passwordText = passwordInput.value;
    console.log('password changed', passwordText);

    if (idText.length > 0 || passwordText.length > 0){
        loginBtn.style.backgroundColor='#3897f0';
    }else{
        loginBtn.style.backgroundColor='#abd1f5';
    }
})


loginBtn.addEventListener('click', function() {
    console.log('click');
});