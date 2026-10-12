var opacitybtn = document.getElementById("opacitybtn");
var thebiggest = document.querySelector(".the-biggest");
var increase = document.getElementById("btn-in");
var increase2 = document.getElementById("btn-in2");
var increase3 = document.getElementById("btn-in3");
var increase4 = document.getElementById("btn-in4");
var increase5 = document.getElementById("btn-in5");
var increase6 = document.getElementById("btn-in6");
var first = document.querySelector(".first");
var apply = document.getElementById("apply");
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var word = document.getElementById("word");
var order = document.getElementById("order");
var word2 = document.getElementById("word2");
var startbtn = document.getElementById("start-btn");
var countainers2 = document.querySelector(".countainers2");
var countainers = document.querySelector(".countainers");
var cart = document.getElementById("cart");
var countainer1 = document.querySelectorAll(".countainer1");
var cart = document.getElementById("cart");
var startbtn = document.getElementById("start-btn");
var thebiggest = document.querySelector(".the-biggest");
var icon = document.getElementById("icon");
var cart2 = document.querySelector(".cart");
var checkout = document.getElementById("checkout");
var thep = document.getElementById("thep");
let DeleteAll = document.getElementById("DeleteAll");
let Delete = document.getElementById("Delete");
let profile = document.getElementById("profile");
let card = document.querySelector(".card");
let submit = document.getElementById("submit");
let productName = document.getElementById("productName");
let productCatogary = document.getElementById("productCatogary");
let productPrice = document.getElementById("productPrice");
let spanl = document.getElementById("spanl");
let bigProfile = document.querySelector(".big-profile");
let iconb = document.querySelector(".iconb");
let iconb2 = document.querySelector(".iconb2");
let biginfo = document.querySelector(".big-info");
let ii = document.getElementById("ii");
let myname = document.getElementById("my-name");
let phone = document.getElementById("phone");
let Email = document.getElementById("E-mail");
let ip = document.getElementById("ip");
let info = document.querySelector(".info");

let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let orderMessage = "";

if (
  localStorage.getItem("ProductName") == "" &&
  localStorage.getItem("productCatogary") == "" &&
  localStorage.getItem("productPrice") == ""
) {
  iconb2.addEventListener("click", function () {
    bigProfile.style.display = "none";
    card.style.display = "block";
  });
}

if (
  localStorage.getItem("ProductName") !== "" &&
  localStorage.getItem("productCatogary") !== "" &&
  localStorage.getItem("productPrice") !== ""
) {
  iconb2.innerHTML = "View Your profile";
  iconb2.addEventListener("click", function () {
    bigProfile.style.display = "none";
    biginfo.style.display = "block";
  });
}

iconb.addEventListener("click", function () {
  card.style.display = "block";
  bigProfile.style.display = "none";
  biginfo.style.display = "none";
  info.style.marginLeft = "300px";
});

ii.addEventListener("click", function () {
  biginfo.style.display = "none";
  bigProfile.style.display = "flex";
});

ip.addEventListener("click", function () {
  bigProfile.style.display = "none";
  thebiggest.style.display = "block";
});

profile.addEventListener("click", function () {
  thebiggest.style.display = "none";
  card.style.display = "block";
  if (
    localStorage.getItem("ProductName") !== "" &&
    localStorage.getItem("productCatogary") !== "" &&
    localStorage.getItem("productPrice") !== ""
  ) {
    card.style.display = "none";
    bigProfile.style.display = "flex";
  }

  if (
    localStorage.getItem("productName") == "" &&
    localStorage.getItem("ptoductCatogary") == "" &&
    localStorage.getItem("productPrice") == ""
  ) {
    bigProfile.style.display = "none";
    card.style.display = "block";
  }
});

submit.addEventListener("click", function () {
  localStorage.setItem("ProductName", `${productName.value}`);
  localStorage.setItem("productCatogary", `${productCatogary.value}`);
  localStorage.setItem("productPrice", `${productPrice.value}`);
  card.style.display = "none";
  thebiggest.style.display = "block";
  alert("Welcome to VibeWear");
  spanl.innerHTML = localStorage.getItem("ProductName");
  phone.innerHTML = localStorage.getItem("productCatogary");
  Email.innerHTML = localStorage.getItem("productPrice");
  myname.innerHTML = localStorage.getItem("ProductName");
});

startbtn.addEventListener("click", function () {
  thebiggest.style.display = "none";
  cart.style.display = "flex";
  cart2.style.display = "block";
});

icon.addEventListener("click", function () {
  cart.style.display = "none";
  cart2.style.display = "none";
  thebiggest.style.display = "block";
});

opacitybtn.addEventListener("click", function () {
  document.getElementById("Trending-Streetwear").scrollIntoView({
    behavior: "smooth",
  });
});

DeleteAll.addEventListener("click", function () {
  cart.innerHTML = "";
  counter = 0;
  first.innerHTML = counter;
  counter12 = 0;
  total1.innerHTML = counter12;
  updateTotal();
});

counter = 0;
counter2 = 0;
counter12 = 0;
let total1 = document.getElementById("total-items");
increase.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter2 == 0) {
    cart.insertAdjacentHTML(
      "beforeend",
      `
    <div class="countainer1">
      <img
        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
        alt=""
      />
      <h2>Urban Creator Tee</h2>
      <p>Pure premium cotton with minimal design aesthetic.</p>

      <div class="price">
        <div class="min1">
          <i id="min1" class="fa-solid fa-circle-minus"></i>
          <h2 id="num1">1</h2>
          <i id="pls1" class="fa-solid fa-circle-plus"></i>
        </div>

        <h2>150 EGP</h2>
        <i class="fa-solid fa-trash delete-item"></i>
      </div>
    </div>
  `,
    );
  }
  let min1 = document.getElementById("min1");
  let pls1 = document.getElementById("pls1");
  let num1 = document.getElementById("num1");
  counter2++;
  num1.innerHTML = counter2;
  console.log(counter2);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Urban Creator Tee - 150 EGP\n`;
  alert("Product added to cart successfully!");
});

counter3 = 0;
increase2.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter3 == 0) {
    cart.innerHTML += `
          <div class="countainer1">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w =600&q=80"
            alt=""
          />
          <h2>Core Cozy Hoodie</h2>
          <p>Double-lined cozy fleece ideal for chilly evenings.</p>
          <div class="price">
            <div class = "min2">
              <i id="min2" class="fa-solid fa-circle-minus"></i>
              <h2 id="num2">1</h2>
              <i id="pls2" class="fa-solid fa-circle-plus"></i>
            </div>
            <h2>350 EGP</h
          </div>
                      <i class="fa-solid fa-trash delete-item"></i>
        </div>
  `;
  }

  let num2 = document.getElementById("num2");
  counter3++;
  num2.innerHTML = counter3;
  console.log(counter3);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Core Cozy Hoodie - 350 EGP\n`;
  alert("Product added to cart successfully!");
  let min2 = document.getElementById("min2");
  let pls2 = document.getElementById("pls2");
});

counter4 = 0;
increase3.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter4 == 0) {
    cart.innerHTML += `
          <div class="countainer1">
          <img
            src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=cro p&w=600&q=80 "
            alt=""
          />
          <h2>Street Vibe Cap</h2>
          <p>Structured fit profile with adjustable strap</p>
          <div class="price">
            <div class = "min3">
              <i id="min3" class="fa-solid fa-circle-minus"></i>
              <h2 id="num3">1</h2>
              <i id="pls3" class="fa-solid fa-circle-plus"></i>
            </div>
            <h2>90 EGP</h2>
            <i class="fa-solid fa-trash delete-item"></i>
          </div>
        </div>
  `;
  }

  let num3 = document.getElementById("num3");
  counter4++;
  num3.innerHTML = counter4;
  console.log(counter4);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Street Vibe Cap - 90 EGP\n`;
  alert("Product added to cart successfully!");
  let min3 = document.getElementById("min3");
  let pls3 = document.getElementById("pls3");
});

counter5 = 0;
increase4.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter5 == 0) {
    cart.innerHTML += `
          <div class="countainer1">
          <img
            src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w =600&q=80 "
            alt=""
          />
          <h2>Structured fit profile with adjustable strap</h2>
          <p>Wind-resistant jacket with smart internal storage.</p>
          <div class="price">
            <div class = "min4">
              <i id="min4" class="fa-solid fa-circle-minus"></i>
              <h2 id="num4">1</h2>
              <i id="pls4" class="fa-solid fa-circle-plus"></i>
            </div>
            <h2>450 EGP</h

          </div>
                      <i class="fa-solid fa-trash delete-item"></i>
        </div>
  `;
  }
  let min4 = document.getElementById("min4");
  let pls4 = document.getElementById("pls4");
  let num4 = document.getElementById("num4");
  counter5++;
  num4.innerHTML = counter5;
  console.log(counter5);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Wind-resistant Jacket - 450 EGP\n`;
  alert("Product added to cart successfully!");
});

counter6 = 0;
increase5.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter6 == 0) {
    cart.innerHTML += `
          <div class="countainer1">
          <img
            src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=cro p&w=600&q=80 "
            alt=""
          />
          <h2>Modern Cargo Joggers</h2>
          <p>Relaxed utility fit with elastic cuffs and deep pockets.</p>
          <div class="price">
            <div class = "min5">
              <i id="min5" class="fa-solid fa-circle-minus"></i>
              <h2 id="num5">1</h2>
              <i id="pls5" class="fa-solid fa-circle-plus"></i>
            </div>
            <h2>300 EGP</h2>
            <i class="fa-solid fa-trash delete-item"></i>
          </div>
        </div>
  `;
  }
  let pls5 = document.getElementById("pls5");
  let min5 = document.getElementById("min5");
  let num5 = document.getElementById("num5");
  counter6++;
  num5.innerHTML = counter6;
  console.log(counter6);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Modern Cargo Joggers - 300 EGP\n`;
  alert("Product added to cart successfully!");
});

counter7 = 0;
increase6.addEventListener("click", function () {
  counter++;
  first.innerHTML = counter;
  console.log(counter);
  console.log("abdelsalam");
  if (counter7 == 0) {
    cart.innerHTML += `
        <div class="countainer1">
          <img
            class="img6"
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w =600&q=80 "
            alt=""
          />
          <h2>Retro Court Sneakers</h2>
          <p>Timeless premium leather sneakers with durable rubber soles.</p>
          <div class="price">
            <div class = "min6">
              <i id="min6" class="fa-solid fa-circle-minus"></i>
              <h2 id="num6">1</h2>
              <i id="pls6" class="fa-solid fa-circle-plus"></i>
            </div>
            <h2>150 EGP</h2>
            <i class="fa-solid fa-trash delete-item"></i>
          </div>
          
        </div>
  `;
  }
  let min6 = document.getElementById("min6");
  let pls6 = document.getElementById("pls6");
  let num6 = document.getElementById("num6");
  counter7++;
  num6.innerHTML = counter7;
  console.log(counter7);
  counter12++;
  total1.innerHTML = counter12;
  orderMessage += `• Retro Court Sneakers - 150 EGP\n`;
  alert("Product added to cart successfully!");
});

cart.addEventListener("click", function (e) {
  if (e.target.id == "pls1") {
    counter++;
    first.innerHTML = counter;
    counter2++;
    document.getElementById("num1").innerHTML = counter2;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min1") {
    if (counter2 > 1) {
      counter2--;
      counter--;
      first.innerHTML = counter;
      counter12--;
      total1.innerHTML = counter12;
      document.getElementById("num1").innerHTML = counter2;
    }
    // } else if (counter2 == 1) {
    //   e.target.closest(".countainer1").remove();

    //   counter2 = 0;
    //   counter--;

    //   first.innerHTML = counter;
    //   console.log(counter);
    // }
  }

  if (e.target.id == "pls2") {
    counter++;
    first.innerHTML = counter;
    counter3++;
    document.getElementById("num2").innerHTML = counter3;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min2") {
    if (counter3 > 1) {
      counter3--;
      counter--;
      first.innerHTML = counter;
      counter12--;
      total1.innerHTML = counter12;
      document.getElementById("num2").innerHTML = counter3;
    } else if (counter3 == 1) {
      e.target.closest(".countainer2").remove();

      counter3 = 0;
      counter--;

      first.innerHTML = counter;
      console.log(counter);
    }
  }

  if (e.target.id == "pls3") {
    counter++;
    first.innerHTML = counter;
    counter4++;
    document.getElementById("num3").innerHTML = counter4;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min3") {
    if (counter4 > 1) {
      counter4--;
      counter--;
      first.innerHTML = counter;
      counter12--;
      total1.innerHTML = counter12;
      document.getElementById("num3").innerHTML = counter4;
    } else if (counter4 == 1) {
      e.target.closest(".countainer3").remove();

      counter4 = 0;
      counter--;

      first.innerHTML = counter;
      console.log(counter);
    }
  }

  if (e.target.id == "pls4") {
    counter++;
    first.innerHTML = counter;
    counter5++;
    document.getElementById("num4").innerHTML = counter5;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min4") {
    if (counter5 > 1) {
      counter5--;
      counter--;
      first.innerHTML = counter;
      counter12--;
      total1.innerHTML = counter12;
      document.getElementById("num4").innerHTML = counter5;
    } else if (counter5 == 1) {
      e.target.closest(".countainer4").remove();

      counter5 = 0;
      counter--;

      first.innerHTML = counter;
      console.log(counter);
    }
  }

  if (e.target.id == "pls5") {
    counter++;
    first.innerHTML = counter;
    counter6++;
    document.getElementById("num5").innerHTML = counter6;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min5") {
    if (counter6 > 1) {
      counter6--;
      counter--;
      first.innerHTML = counter;
      counter12--;
      total1.innerHTML = counter12;
      document.getElementById("num5").innerHTML = counter6;
    } else if (counter6 == 1) {
      e.target.closest(".countainer5").remove();

      counter6 = 0;
      counter--;

      first.innerHTML = counter;
      console.log(counter);
    }
  }

  if (e.target.id == "pls6") {
    counter++;
    first.innerHTML = counter;
    counter7++;
    document.getElementById("num6").innerHTML = counter7;
    counter12++;
    total1.innerHTML = counter12;
  }

  if (e.target.id == "min6") {
    if (counter7 > 1) {
      counter7--;
      counter--;
      first.innerHTML = counter;
      document.getElementById("num6").innerHTML = counter7;
      counter12--;
      total1.innerHTML = counter12;
    } else if (counter7 == 1) {
      e.target.closest(".countainer6").remove();

      counter7 = 0;
      counter--;

      first.innerHTML = counter;
      console.log(counter);
    }
  }
});

apply.addEventListener("click", function () {
  if (inp1.value.trim() == "VIBE20") {
    word.textContent = `🎉 Success! You have unlocked your 20% premium discount.`;
    word.style.color = "green";
  } else {
    word.innerHTML = "⚠️ Please write down a valid code first.";
    word.style.color = "orange";
  }
});

order.addEventListener("click", function () {
  if (
    counter > 0 &&
    inp2.value !== "" &&
    cart.innerHTML !== "" &&
    localStorage.getItem("ProductName") == "" &&
    localStorage.getItem("productCatogary") == "" &&
    localStorage.getItem("productPrice") == ""
  ) {
    cart2.style.display = "none";
    card.style.display = "block";
  } else {
    counter2++;
    if (counter == 0 && cart.innerHTML == "") {
      thep.textContent =
        "⚠️ Your cart is empty! Please add products before checking out.";
      thep.style.color = "orange";
    }
    if (inp2.value == "") {
      alert("⚠️ PLease enter a delivery address.");
    }
    if (
      counter > 0 &&
      inp2.value !== "" &&
      cart.innerHTML !== "" &&
      localStorage.getItem("ProductName") !== "" &&
      localStorage.getItem("productCatogary") !== "" &&
      localStorage.getItem("productPrice") !== ""
    ) {
      thep.textContent = `✅ Order completed successfully! Order Placed to [${inp2.value}]! `;
      thep.style.color = "green";
      alert(
        `✅ Order completed successfully! Order Placed to [${inp2.value}]! `,
      );
      cart.style.display = "none";
      cart2.style.display = "none";
      thebiggest.style.display = "block";
      setTimeout(function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setTimeout(function () {
          location.reload();
        }, 500);
      }, 1000);
      let phone = "201013491070";
      orderMessage = "";

      if (counter2 > 0) {
        orderMessage += `• Urban Creator Tee - ${counter2} x 150 EGP\n`;
      }

      if (counter3 > 0) {
        orderMessage += `• Core Cozy Hoodie - ${counter3} x 350 EGP\n`;
      }

      if (counter4 > 0) {
        orderMessage += `• Street Vibe Cap - ${counter4} x 90 EGP\n`;
      }

      if (counter5 > 0) {
        orderMessage += `• Wind-resistant Jacket - ${counter5} x 450 EGP\n`;
      }

      if (counter6 > 0) {
        orderMessage += `• Modern Cargo Joggers - ${counter6} x 300 EGP\n`;
      }

      if (counter7 > 0) {
        orderMessage += `• Retro Court Sneakers - ${counter7} x 150 EGP\n`;
      }
      let message = `Hello VibeWear 👋

  New Order
  Name = ${localStorage.getItem("ProductName")}

  Address:
  ${inp2.value}

  Products:
  ${orderMessage}

  With ${inp1.value} Discount

  Thank you ❤️`;

      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }
  }
});

checkout.addEventListener("click", function () {
  if (inp2.value == "" && cart.innerHTML == "") {
    word2.innerHTML =
      "⚠️ Your cart is empty! Please add products before checking out.";
    word2.style.color = "orange";
  }
  if (inp2.value !== "" && cart.innerHTML == "") {
    word2.innerHTML =
      "⚠️ Your cart is empty! Please add products before checking out.";
    word2.style.color = "orange";
  }
  if (inp2.value == "" && cart.innerHTML !== "") {
    word2.innerHTML = "⚠️ PLease enter a delivery address.";
    word2.style.color = "orange";
  }
  if (inp2.value !== "" && cart.innerHTML !== "") {
    thebiggest.style.display = "none";
    cart.style.display = "flex";
    cart2.style.display = "block";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("ProductName");
  let phoneNumber = localStorage.getItem("productCatogary");
  let email = localStorage.getItem("productPrice");

  if (name && phoneNumber && email) {
    spanl.textContent = name;
    myname.textContent = name;
    phone.textContent = phoneNumber;
    Email.textContent = email;
  }
});

document.querySelector("#cart").addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".delete-item");

  if (deleteBtn) {
    deleteBtn.closest(".countainer1").remove();
    counter12--;
    total1.innerHTML = counter12;
    counter--;
    first.innerHTML = counter;
    updateTotal();
  }
});

function updateTotal() {
  let subtotal = 0;

  const prices = {
    num1: 150,
    num2: 350,
    num3: 90,
    num4: 450,
    num5: 300,
    num6: 150,
  };

  document.querySelectorAll("#cart .countainer1").forEach((item) => {
    const quantityElement = item.querySelector('[id^="num"]');
    if (!quantityElement) return;

    const quantity = Number(quantityElement.textContent);
    subtotal += quantity * (prices[quantityElement.id] || 0);
  });

  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total-amount");

  if (!subtotalElement || !totalElement) {
    console.error("تأكد من وجود subtotal و total-amount في HTML");
    return;
  }

  const discountApplied = inp1.value.trim().toUpperCase() === "VIBE20";
  const total = discountApplied ? subtotal * 0.8 : subtotal;

  subtotalElement.textContent = subtotal + " EGP";
  totalElement.textContent = total.toFixed(2) + " EGP";
}
