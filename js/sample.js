const thisIsButton = document.getElementsByClassName('login-btn')[0];

thisIsButton.addEventListener('click', function() {
  const password = document.getElementById('password').value;
  const rePassword = document.getElementById('re-password').value;

  if (!password) {
    alert('비밀번호를 입력해주세요!');
    return;
  }
  
  if (!rePassword) {
    alert('비밀번호 확인을 입력해주세요!');
    return;
  }
  
  if (password !== rePassword) {
    alert('비밀번호가 맞지 않습니다!');
    return;
  }
  
  alert('로그인 성공!!');
});

const thisIsPw = document.getElementById('password');
const thisIsCode = document.getElementById('code');

thisIsPw.addEventListener('keydown', function(event) {
  thisIsCode.innerHTML = event.keyCode;
  console.log(event); 
});

const thisIsRePw = document.getElementById('re-password');

thisIsRePw.addEventListener('keyup', function(event) {
  const password = thisIsPw.value;
  const rePassword = thisIsRePw.value;
  console.log(password);
  console.log(rePassword);
  
  const pCheck = document.getElementsByClassName('alert')[0];
  if (password !== rePassword) {
    console.log('일치하지 않음');
    pCheck.innerHTML = "비밀번호가 일치하지 않습니다";
  } else {
    console.log('빈 문구');
    pCheck.innerHTML = "";
  }
});