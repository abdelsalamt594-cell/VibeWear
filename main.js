const $ = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

const cart = byId("cart");
const cartPage = $(".cart");
const homePage = $(".the-biggest");
const first = $(".first");
const totalItems = byId("total-items");
const subtotalElement = byId("subtotal");
const totalElement = byId("total-amount");
const inp1 = byId("inp1");
const inp2 = byId("inp2");

const products = [
  {
    button: "btn-in",
    id: "num1",
    name: "Urban Creator Tee",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
  {
    button: "btn-in2",
    id: "num2",
    name: "Core Cozy Hoodie",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
  {
    button: "btn-in3",
    id: "num3",
    name: "Street Vibe Cap",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
  {
    button: "btn-in4",
    id: "num4",
    name: "Wind-resistant Jacket",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
  {
    button: "btn-in5",
    id: "num5",
    name: "Modern Cargo Joggers",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
  {
    button: "btn-in6",
    id: "num6",
    name: "Retro Court Sneakers",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    quantity: 0,
  },
];

function updateTotal() {
  let subtotal = 0;
  let items = 0;

  products.forEach((product) => {
    subtotal += product.quantity * product.price;
    items += product.quantity;
  });

  const discount = inp1.value.trim().toUpperCase() === "VIBE20" ? 0.2 : 0;

  totalItems.textContent = items;
  subtotalElement.textContent = `${subtotal} EGP`;
  totalElement.textContent = `${(subtotal * (1 - discount)).toFixed(2)} EGP`;

  first.textContent = items;
}

function renderCart() {
  cart.innerHTML = "";

  products.forEach((product) => {
    if (product.quantity === 0) return;

    cart.insertAdjacentHTML(
      "beforeend",
      `
        <div class="countainer1">
          <img src="${product.image}" alt="${product.name}" />
          <h2>${product.name}</h2>
          <div class="price">
            <div class="min1">
              <i class="fa-solid fa-circle-minus" data-action="minus" data-id="${product.id}"></i>
              <h2 id="${product.id}">${product.quantity}</h2>
              <i class="fa-solid fa-circle-plus" data-action="plus" data-id="${product.id}"></i>
            </div>
            <h2>${product.price} EGP</h2>
            <i class="fa-solid fa-trash delete-item" data-action="delete" data-id="${product.id}"></i>
          </div>
        </div>
      `,
    );
  });

  updateTotal();
}

// Add products
products.forEach((product) => {
  byId(product.button).addEventListener("click", () => {
    product.quantity++;
    renderCart();
    alert("Product added to cart successfully!");
  });
});

// Plus, minus, and delete buttons inside the cart
cart.addEventListener("click", (e) => {
  const button = e.target.closest("[data-action]");
  if (!button) return;

  const product = products.find((item) => item.id === button.dataset.id);

  if (!product) return;

  const action = button.dataset.action;

  if (action === "plus") {
    product.quantity++;
  } else if (action === "minus") {
    product.quantity--;
  } else if (action === "delete") {
    product.quantity = 0;
  }

  product.quantity = Math.max(0, product.quantity);
  renderCart();
});

// Delete all products
byId("DeleteAll").addEventListener("click", () => {
  products.forEach((product) => {
    product.quantity = 0;
  });

  renderCart();
});

// Discount code
byId("apply").addEventListener("click", () => {
  const word = byId("word");

  if (inp1.value.trim().toUpperCase() === "VIBE20") {
    word.textContent = "Success! Your 20% discount has been applied.";
    word.style.color = "green";
  } else {
    word.textContent = "Please enter a valid discount code.";
    word.style.color = "orange";
  }

  updateTotal();
});

// Open and close the cart
byId("start-btn").addEventListener("click", () => {
  homePage.style.display = "none";
  cartPage.style.display = "block";
});

byId("icon").addEventListener("click", () => {
  cartPage.style.display = "none";
  homePage.style.display = "block";
});

byId("checkout").addEventListener("click", () => {
  const word2 = byId("word2");
  const items = products.reduce((sum, p) => sum + p.quantity, 0);

  if (items === 0) {
    word2.textContent = "Your cart is empty. Please add products first.";
    word2.style.color = "orange";
    return;
  }

  if (!inp2.value.trim()) {
    word2.textContent = "Please enter your delivery address.";
    word2.style.color = "orange";
    return;
  }

  word2.textContent = "Your order is ready for checkout.";
  word2.style.color = "green";
  homePage.style.display = "none";
  cartPage.style.display = "block";
});

// Place order through WhatsApp
byId("order").addEventListener("click", () => {
  const items = products.filter((p) => p.quantity > 0);
  const thep = byId("thep");

  if (items.length === 0) {
    thep.textContent = "Your cart is empty! Add products first.";
    thep.style.color = "orange";
    return;
  }

  if (!inp2.value.trim()) {
    alert("Please enter your delivery address.");
    return;
  }

  const name = localStorage.getItem("ProductName");

  if (
    !name ||
    !localStorage.getItem("productCatogary") ||
    !localStorage.getItem("productPrice")
  ) {
    cartPage.style.display = "none";
    $(".card").style.display = "block";
    return;
  }

  const subtotal = items.reduce((sum, p) => sum + p.quantity * p.price, 0);

  const discount = inp1.value.trim().toUpperCase() === "VIBE20" ? 0.2 : 0;

  const finalTotal = subtotal * (1 - discount);

  const orderMessage = items
    .map((p) => `• ${p.name} - ${p.quantity} x ${p.price} EGP`)
    .join("\n");

  const message = `Hello VibeWear!

New Order
Name: ${name}

Address:
${inp2.value.trim()}

Products:
${orderMessage}

Subtotal: ${subtotal} EGP
Discount: ${discount * 100}%
Total: ${finalTotal.toFixed(2)} EGP

Thank you!`;

  window.open(
    `https://wa.me/201013491070?text=${encodeURIComponent(message)}`,
    "_blank",
  );
});

// Explore collection
byId("opacitybtn").addEventListener("click", () => {
  byId("Trending-Streetwear").scrollIntoView({
    behavior: "smooth",
  });
});

// Profile elements
const card = $(".card");
const bigProfile = $(".big-profile");
const bigInfo = $(".big-info");

function showProfile() {
  homePage.style.display = "none";
  cartPage.style.display = "none";
  card.style.display = "none";
  bigInfo.style.display = "none";
  bigProfile.style.display = "flex";

  byId("spanl").textContent = localStorage.getItem("ProductName") || "";
}

byId("profile").addEventListener("click", () => {
  if (localStorage.getItem("ProductName")) {
    showProfile();
  } else {
    homePage.style.display = "none";
    card.style.display = "block";
  }
});

byId("submit").addEventListener("click", () => {
  const name = byId("productName").value.trim();
  const phone = byId("productCatogary").value.trim();
  const email = byId("productPrice").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in all profile fields.");
    return;
  }

  localStorage.setItem("ProductName", name);
  localStorage.setItem("productCatogary", phone);
  localStorage.setItem("productPrice", email);

  byId("spanl").textContent = name;
  byId("my-name").textContent = name;
  byId("phone").textContent = phone;
  byId("E-mail").textContent = email;

  card.style.display = "none";
  bigProfile.style.display = "flex";

  alert("Welcome to VibeWear!");
});

$(".iconb2").addEventListener("click", () => {
  bigProfile.style.display = "none";
  bigInfo.style.display = "block";

  byId("my-name").textContent = localStorage.getItem("ProductName") || "";
  byId("phone").textContent = localStorage.getItem("productCatogary") || "";
  byId("E-mail").textContent = localStorage.getItem("productPrice") || "";
});

byId("ii").addEventListener("click", () => {
  bigInfo.style.display = "none";
  bigProfile.style.display = "flex";
});

$(".iconb").addEventListener("click", () => {
  bigInfo.style.display = "none";
  card.style.display = "block";
});

byId("ip").addEventListener("click", () => {
  bigProfile.style.display = "none";
  homePage.style.display = "block";
});

// Load saved profile information
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("ProductName");
  const phone = localStorage.getItem("productCatogary");
  const email = localStorage.getItem("productPrice");

  if (name && phone && email) {
    byId("spanl").textContent = name;
    byId("my-name").textContent = name;
    byId("phone").textContent = phone;
    byId("E-mail").textContent = email;
  }

  renderCart();
});
