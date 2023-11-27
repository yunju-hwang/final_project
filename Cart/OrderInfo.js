import { createNavbar } from "../Component/Navbar.js";

window.onload = async function() {
    createNavbar();
    
    const addresses = await getAddresses();
    const addressCards = document.getElementById('address-cards');

    addresses.forEach(address => {
        const card = createAddressCard(address);
        addressCards.appendChild(card);
    });
};

async function getAddresses() {
    const response = await fetch('http://localhost:3000/users');
    return await response.json();
}

function createAddressCard(address) {
    const card = document.createElement('div');
    card.className = 'address-card';

    const name = document.createElement('p');
    name.textContent = address.name;
    card.appendChild(name);

    const street = document.createElement('p');
    street.textContent = address.street;
    card.appendChild(street);

    const city = document.createElement('p');
    city.textContent = address.city;
    card.appendChild(city);

    const postalCode = document.createElement('p');
    postalCode.textContent = address.postalCode;
    card.appendChild(postalCode);

    return card;
}
