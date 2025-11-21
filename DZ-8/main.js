const createInputElem = document.querySelector("#todo-input");
const createBtnElem = document.querySelector("#todo-form button");
const todoListElem = document.querySelector("#todo-list");
const searchElem = document.querySelector("#search");
const filtersElem = document.querySelectorAll(".filters button");
const themeToggle = document.querySelector("#theme-toggle");

let filter = "all";
let tasks = [];

class Task {
  constructor(name, isFinished, onUpdate) {
    this.name = name;
    this.isFinished = isFinished;
    this.onUpdate = onUpdate;
  }

  renderCard() {
    this.element = document.createElement("li");
    if (this.isFinished) this.element.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.isFinished;
    this.element.append(checkbox);

    const nameElem = document.createElement("span");
    nameElem.innerText = this.name;
    this.element.append(nameElem);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "x";
    this.element.append(deleteBtn);

    checkbox.addEventListener("change", () => this.markTask());
    deleteBtn.addEventListener("click", () => this.deleteTask());

    return this.element;
  }

  markTask() {
    this.isFinished = !this.isFinished;
    this.element.classList.toggle("completed");

    if (this.isFinished) {
      alert(`Задача "${this.name}" успешно выполнена!`);
    }

    this.onUpdate();
  }

  deleteTask() {
    tasks = tasks.filter((t) => t !== this);
    this.onUpdate();
  }
}

const renderTasks = () => {
  todoListElem.innerHTML = "";

  let filtered = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchElem.value.toLowerCase())
  );

  if (filter === "active") filtered = filtered.filter((t) => !t.isFinished);
  else if (filter === "completed") filtered = filtered.filter((t) => t.isFinished);

  filtered.forEach((task) => {
    if (!task.element) task.renderCard();
    todoListElem.append(task.element);
  });

  saveTasks();
};

const createTask = () => {
  if (!createInputElem.value.trim()) return;

  const task = new Task(createInputElem.value.trim(), false, renderTasks);
  task.renderCard();

  tasks.push(task);
  createInputElem.value = "";
  renderTasks();
};

const saveTasks = () => {
  const data = tasks.map((task) => ({
    name: task.name,
    isFinished: task.isFinished,
  }));
  localStorage.setItem("tasks", JSON.stringify(data));
};

const loadTasks = () => {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = data.map((item) => new Task(item.name, item.isFinished, renderTasks));
  tasks.forEach((t) => t.renderCard());
  renderTasks();
};

const loadTheme = () => {
  const saved = localStorage.getItem("theme") || "dark";
  document.body.className = saved;
  themeToggle.textContent = saved === "dark" ? "🌙" : "☀️";
};

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  document.body.className = newTheme;
  themeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", newTheme);
});

createBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
});

searchElem.addEventListener("input", renderTasks);

filtersElem.forEach((btn) =>
  btn.addEventListener("click", ({ target }) => {
    filter = target.dataset.filter;
    filtersElem.forEach((b) => b.classList.toggle("active", b === target));
    renderTasks();
  })
);

loadTheme();
loadTasks();
