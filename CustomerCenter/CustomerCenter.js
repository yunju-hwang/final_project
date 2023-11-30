import { createNavbar } from '../Component/Navbar.js';
      
document.addEventListener('DOMContentLoaded', createNavbar);



window.onload = function() {
    fetch('http://localhost:8080/inquiry/list')
      .then(response => response.json())
      .then(posts => {
        const tableBody = document.querySelector('tbody');
        posts.forEach(post => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${post.id}</td>
            <td><a href="./NoticeRead.html?id=${post.id}">${post.title}</a></td>
            <td>${post.views}</td>
            <td>${post.date}</td>
          `;
          tableBody.appendChild(row);
        });
      });
  }
  