const counterBtn = document.getElementById("counterBtn");
const coordsBtn = document.getElementById("coordsBtn");
const content = document.getElementById("content");

//  СЧЁТЧИК 
counterBtn.addEventListener("click", () => {
  content.innerHTML = `
    <h2>Счётчик</h2>
    <div class="counter">
      <button id="decrement">-</button>
      <span id="value">0</span>
      <button id="increment">+</button>
    </div>
  `;

  const value = document.getElementById("value");
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  let count = 0;

  increment.addEventListener("click", () => {
    count++;
    value.textContent = count;
    value.style.color = "green";
  });

  decrement.addEventListener("click", () => {
    if (count > 0) {
      count--;
      value.textContent = count;
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});

//  КООРДИНАТЫ 
coordsBtn.addEventListener("click", () => {
  content.innerHTML = `
    <h2>Координаты курсора</h2>
    <div id="box">
      <p id="coords">X: 0, Y: 0</p>
    </div>
  `;

  const box = document.getElementById("box");
  const coords = document.getElementById("coords");

  box.addEventListener("mousemove", (event) => {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    coords.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
  });

  box.addEventListener("mouseleave", () => {
    coords.textContent = "Курсор вне блока";
  });
});
