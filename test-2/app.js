function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}



class Product {
  constructor(name, image, price, description, rating) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
    this.rating = rating;
  }

  addToCart() {
    const cart = getCart();
    if (!cart.some(p => p.name === this.name)) {
      cart.push(this);
      saveCart(cart);
    }
  }

  removeFromCart() {
    const cart = getCart().filter(p => p.name !== this.name);
    saveCart(cart);
  }

  renderCard() {
    const div = document.createElement("div");
    div.className = "card";

    const inCart = getCart().some(p => p.name === this.name);

    div.innerHTML = `
      <img src="${this.image}" alt="${this.name}">
      <h3>${this.name}</h3>
      <p><b>Цена:</b> ${this.price} сом</p>
      <p>${this.description}</p>
      <p><b>Рейтинг:</b> ⭐ ${this.rating}</p>
      <button class="${inCart ? "remove" : ""}">
        ${inCart ? "Убрать из корзины" : "В корзину"}
      </button>
    `;

    div.querySelector("button").onclick = () => {
      if (inCart) this.removeFromCart();
      else this.addToCart();

      renderProducts(); 
    };

    return div;
  }
}

let products = [];



async function loadProducts() {
  const res = await fetch("products.json");
  const data = await res.json();

  products = data.map(
    p => new Product(p.name, p.image, p.price, p.description, p.rating)
  );

  if (document.getElementById("products")) {
    renderProducts();
  }
  if (document.getElementById("cart-items")) {
    renderCart();
  }
}

function renderProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";
  products.forEach(p => container.appendChild(p.renderCard()));
}

function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const countEl = document.getElementById("cart-count");
  const sumEl = document.getElementById("cart-sum");

  const cart = getCart();

  itemsContainer.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>${item.price} сом</p>
    `;

    itemsContainer.appendChild(div);
  });

  countEl.textContent = cart.length;
  sumEl.textContent = cart.reduce((acc, p) => acc + p.price, 0);

  document.getElementById("buy-btn").onclick = () => {
    alert("Успешно куплено!");
    saveCart([]);
    renderCart();
  };
}

loadProducts();
