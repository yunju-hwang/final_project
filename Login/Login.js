import { createNavbar } from '../Component/Navbar.js';
document.addEventListener('DOMContentLoaded', createNavbar);

let isLoggedIn = false;


async function login(email, password) {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      alert('Invalid username or password');
      return;
    }
  
    const { accessToken, refreshToken, accessTokenExpiresIn } = await response.json();
  
    // 로그인 성공 후 토큰을 저장하고 메인 페이지로 이동
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessTokenExpiresIn', accessTokenExpiresIn);
    //로그인 상태를 true로 변경하고 Navbar를 업데이트
   
    isLoggedIn = true;
    createNavbar(isLoggedIn);
    window.location.href = '../Main/Main.html';
  }
  
  const usernameInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const loginButton = document.querySelector('#login-button');
  
  loginButton.addEventListener('click', () => {
    login(usernameInput.value, passwordInput.value);
  });
  

