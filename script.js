let cart = [];
let total = 0;

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');

    // Clear existing items
    cartList.innerHTML = '';

    // Populate the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update total
    totalSpan.textContent = total.toFixed(2);
}

function checkout() {
    // Implement the checkout logic (e.g., redirect to payment gateway)
    alert('Checkout functionality is not implemented in this example.');
}
