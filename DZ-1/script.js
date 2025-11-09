
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const trafficLightBtn = document.getElementById("trafficLightBtn");
const content = document.getElementById("content");

// 1) ИЗМЕНЕНИЕ ФОНА ===
changeBackgroundBtn.addEventListener("click", () => {
  const color = prompt("Введите цвет (например: red, blue, green, yellow):")?.toLowerCase();
  const validColors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "black", "white"];

  content.innerHTML = "<h2 id='title'>Измените цвет фона</h2>";

  const title = document.getElementById("title");

  if (validColors.includes(color)) {
    document.body.style.backgroundColor = color;
    title.innerText = `Фон изменён на ${color}`;
  } else {
    title.innerText = "Ошибка! Введите корректный цвет.";
  }
});

// 2) СВЕТОФОР ===
trafficLightBtn.addEventListener("click", () => {
  content.innerHTML = `
    <div class="traffic-light">
      <div id="red" class="light"></div>
      <div id="yellow" class="light"></div>
      <div id="green" class="light"></div>
    </div>
    <div id="text">Введите цвет</div>
  `;

  const color = prompt("Введите цвет: Красный, Желтый или Зеленый")?.toLowerCase();
  const red = document.getElementById("red");
  const yellow = document.getElementById("yellow");
  const green = document.getElementById("green");
  const text = document.getElementById("text");

  if (color === "красный") {
    red.style.background = "red";
    text.innerText = "STOP";
  } else if (color === "желтый") {
    yellow.style.background = "yellow";
    text.innerText = "WAIT";
  } else if (color === "зеленый") {
    green.style.background = "green";
    text.innerText = "GO";
  } else {
    text.innerText = "Ошибка! Введите: Красный, Желтый или Зеленый.";
  }
});
