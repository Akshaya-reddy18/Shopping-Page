// Sample data for products 
const products = [ 
    { id: 1, name: 'Product 1', price: 1000.00, image: 'images/image1.jpg' }, 
    { id: 2, name: 'Product 2', price: 280.00, image: 'images/image2.jpg' }, 
    { id: 3, name: 'Product 3', price: 1500.00, image: 'images/image3.jpg' }, 
]; 
 
document.addEventListener('DOMContentLoaded', () => { 
    // Load products in the catalog page 
    if (document.querySelector('.product-grid')) { 
        loadProducts(); 
    } 
 
    // Add to cart functionality 
    document.body.addEventListener('click', (e) => { 
        if (e.target.classList.contains('add-to-cart')) { 
            addToCart(e.target.dataset.id); 
        } 
    }); 
 
    // Load cart items in the cart page 
    if (document.querySelector('.cart-items')) { 
        loadCart(); 
    } 
}); 
 
function loadProducts() { 
    const productGrid = document.querySelector('.product-grid'); 
    products.forEach(product => { 
        const productItem = document.createElement('div'); 
        productItem.classList.add('product-item'); 
        productItem.innerHTML = ` 
            <img src="${product.image}" alt="${product.name}"> 
            <h3>${product.name}</h3> 
            <p>Rs ${product.price.toFixed(2)}</p> 
     <button class="add-to-cart" data-id="${product.id}">Add to Cart</button> 
        `; 
        productGrid.appendChild(productItem); 
    }); 
} 
 
function addToCart(id) { 
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    const product = products.find(p => p.id == id); 
    cart.push(product); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(`${product.name} added to cart`); 
} 
 
function loadCart() { 
    const cartItems = document.querySelector('.cart-items'); 
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    cartItems.innerHTML = ''; 
    cart.forEach(product => { 
        const cartItem = document.createElement('div'); 
        cartItem.classList.add('cart-item'); 
        cartItem.innerHTML = ` 
            <img src="${product.image}" alt="${product.name}"> 
<h3>${product.name}</h3> 
<p>$${product.price.toFixed(2)}</p> 
`; 
cartItems.appendChild(cartItem); 
}); 
}