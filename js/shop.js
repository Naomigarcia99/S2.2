// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  let producto = products.find((e) => e.id === id);
  let productoExiste = cart.find((e) => e.id === id);

  if (productoExiste) {
    productoExiste.cantidad++;
  } else {
    cart.push({ ...producto, cantidad: 1 });
  }

  return cart;
}

console.log(buy(3));

// Exercise 2
function cleanCart() {
  cart = [];

  return cart;
}

//console.log(cleanCart());

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].cantidad;
  }
  return total.toFixed(2);
}

console.log(calculateTotal());

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let subtotalWithDiscount = 0;

  let oli = cart.find((e) => e.id === 1);
  let pasteles = cart.find((e) => e.id === 3);

  if (oli && oli.cantidad >= 3) {
    let precioOli = oli.price * 0.8;
    oli.price = precioOli;
  }

  if (pasteles && pasteles.cantidad >= 10) {
    let precioPasteles = pasteles.price * 0.7;
    pasteles.price = precioPasteles;
  }

  for (let i = 0; i < cart.length; i++) {
    subtotalWithDiscount += cart[i].price * cart[i].cantidad;
  }

  return subtotalWithDiscount;
}

console.log(applyPromotionsCart());

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let cartList = document.getElementById("cart_list");
  let totalPrice = document.getElementById("total_price");
  cartList.innerHTML = "";

  cart.forEach(
    (e) =>
      (cartList.innerHTML += `
    <tr>
      <th scope = "row">${e.name}</th>
      <td>$${e.price}</td>
      <td>${e.cantidad}</td>
      <td>$${(e.price * e.cantidad).toFixed(2)}</td>
    </tr>
    `)
  );

  totalPrice.innerHTML = calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
