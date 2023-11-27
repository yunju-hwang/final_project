import { createNavbar } from '../Component/Navbar.js';
      
document.addEventListener('DOMContentLoaded', createNavbar);


async function fetchProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
  
   
    const productList = document.getElementById('product-list');
  
    // 각 상품에 대해 카드를 생성
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

     
  
      const img = document.createElement('img');
      img.src = product.image;
      card.appendChild(img);
  
      const title = document.createElement('h2');
      title.textContent = product.title;
      card.appendChild(title);
  
      const price = document.createElement('p');
      price.textContent = product.price;
      card.appendChild(price);

      card.addEventListener('click', () => {
        // Product.html 페이지로 이동
        window.location.href = `./Product.html?id=${product.id}`;
      });
  
      productList.appendChild(card);
   
    });
  }
  
  // 페이지 로드시 상품 정보를 가져옴
  window.onload = fetchProducts;
  