import { createNavbar } from "../Component/Navbar.js";

document.addEventListener("DOMContentLoaded", createNavbar);

window.onload = async function () {
  const cart = await getCart();

  const tbody = document.getElementById("cart-body");
  cart.forEach((product) => {
    const row = createProductRow(product);
    tbody.appendChild(row);
  });

  const orderButton = document.getElementById("order-button");
  orderButton.addEventListener("click", orderProducts);
};

async function getCart() {
  const response = await fetch("http://localhost:8080/api/cart/");
  return await response.json();
}

function createProductRow(product) {
  const tr = document.createElement("tr");

  const imgTd = document.createElement("td");
  const img = document.createElement("img");
  img.src = product.image;
  imgTd.appendChild(img);

  const titleTd = document.createElement("td");
  titleTd.textContent = product.title;

  const priceTd = document.createElement("td");
  priceTd.textContent = product.price;

  const deleteTd = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = "삭제";
  button.addEventListener("click", () => deleteProduct(product, tr));
  deleteTd.appendChild(button);

  tr.appendChild(imgTd);
  tr.appendChild(titleTd);
  tr.appendChild(priceTd);
  tr.appendChild(deleteTd);

  return tr;
}

async function deleteProduct(product, row) {
  const response = await fetch(`http://localhost:8080/cart/?productId=${product.id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    row.remove();
  }
}
async function orderProducts() {
  window.location.href = "./OrderInfo.html";
}
