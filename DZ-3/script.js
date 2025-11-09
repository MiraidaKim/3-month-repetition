{
    /*
    <li>
        <input type="checkbox" />
        <span> 2 </span>
        <button> x </button>
    </li>
    */
}

// preventDefault


const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const createTask = (e) => {
  e.preventDefault();

  // li
  const li = document.createElement("li");



  //чекбокс
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.append(checkbox);

  const span = document.createElement("span");
  span.innerText = input.value;
  li.append(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  li.append(deleteBtn);

  todoList.append(li);

  input.value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });




  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");

      alert(`Задача “${span.innerText}” успешно выполнена`);
    } else {
      li.classList.remove("completed");
    }
  });
};


form.addEventListener("submit", createTask);
