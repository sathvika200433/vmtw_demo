let cart = [];
let cartCount = 0;
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeModal = document.querySelector(".close");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function() {
    const productName = this.getAttribute("data-product");
    const productPrice = parseFloat(this.getAttribute("data-price"));
    
    // Add product to the cart
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    
    // Update cart button
    cartBtn.textContent = `Cart (${cartCount})`;

    // Update modal content
    updateCartModal();
  });
});

cartBtn.addEventListener("click", function() {
  cartModal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
  cartModal.style.display = "none";
});

function updateCartModal() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  
  totalPrice.textContent = total.toFixed(2);
}

document.getElementById("checkoutBtn").addEventListener("click", function() {
  alert("Proceeding to checkout!");
  // You can implement a real checkout system here
  cart = [];
  cartCount = 0;
  cartBtn.textContent = "Cart (0)";
  cartModal.style.display = "none";
});
