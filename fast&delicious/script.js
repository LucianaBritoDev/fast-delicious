let cartItems = [];
const buttons = document.querySelectorAll(".order-button");
const cart = document.querySelector(".cart");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const menuItem = button.parentElement;
    const itemName = menuItem.querySelector("h3").textContent;
    const itemPrice = menuItem.querySelector(".price").textContent;

    cartItems.push({
      name: itemName,
      price: itemPrice,
    });

    button.textContent = "Added!";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);

    cart.style.animation = "bounce 0.5s";
    setTimeout(() => {
      cart.style.animation = "";
    }, 500);
  });
});

cart.addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let total = 0;
  let message = "Your Order:\n\n";

  cartItems.forEach((item) => {
    message += `${item.name} - ${item.price}\n`;
    total += parseFloat(item.price.replace("$", ""));
  });

  message += `\nTotal: $${total.toFixed(2)}`;
  alert(message);
});
