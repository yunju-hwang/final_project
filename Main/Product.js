import { createNavbar } from '../Component/Navbar.js';
      
document.addEventListener('DOMContentLoaded', createNavbar);

window.onload = async function() {
   
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  
    // json-server에서 제품 정보를 가져옴
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const product = await response.json();
  
    // 제품 정보를 화면에 표시
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').textContent = product.price;
  };
  