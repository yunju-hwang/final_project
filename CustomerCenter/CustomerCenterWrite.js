import { createNavbar } from '../Component/Navbar.js';
      
document.addEventListener('DOMContentLoaded', createNavbar);



const form = document.getElementById('post-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const writeName = "사용자 이름";  // 실제 구현에서는 로그인한 사용자의 이름을 사용해야 한다
    const date = new Date().toISOString();

    const post = {
        title,
        content,
        writeName,
        date
    };

    fetch('http://localhost:8080/api/inquiry/', {  // JSON Server의 주소를 입력하세요.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + "사용자 토큰"  // 실제 구현에서는 로그인한 사용자의 토큰을 사용해야 합니다.
        },
        body: JSON.stringify(post)
    }).then(response => {
        if (response.ok) {
            alert('게시글이 성공적으로 작성되었습니다.');
        } else {
            alert('게시글 작성에 실패했습니다.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
