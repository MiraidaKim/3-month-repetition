const students = [
  { id: 1, name: "Tom", age: 18, city: "Bishkek", grades: [5, 4, 3, 5], hobbies: ["football", "gaming"], isGraduated: false },
  { id: 2, name: "Anna", age: 20, city: "Osh", grades: [3, 2, 4, 3], hobbies: ["reading", "painting", "yoga"], isGraduated: true },
  { id: 3, name: "Bob", age: 19, city: "Karakol", grades: [5, 5, 5, 4], hobbies: [], isGraduated: false },
  { id: 4, name: "Lisa", age: 22, city: "Bishkek", grades: [4, 5, 5, 5], hobbies: ["volleyball", "travel"], isGraduated: true },
  { id: 5, name: "John", age: 21, city: "Talas", grades: [2, 3, 2, 4], hobbies: ["movies", "football"], isGraduated: false },
  { id: 6, name: "Mila", age: 23, city: "Osh", grades: [5, 4, 4, 5], hobbies: ["reading", "cooking"], isGraduated: true },
  { id: 7, name: "Alex", age: 19, city: "Naryn", grades: [3, 3, 4, 3], hobbies: ["music", "football"], isGraduated: false },
  { id: 8, name: "Kate", age: 20, city: "Bishkek", grades: [4, 4, 5, 5], hobbies: ["dance", "photography"], isGraduated: true },
  { id: 9, name: "Nick", age: 18, city: "Talas", grades: [5, 5, 4, 5], hobbies: ["gaming", "reading"], isGraduated: false },
  { id: 10, name: "Sara", age: 21, city: "Osh", grades: [4, 5, 3, 4], hobbies: ["travel", "yoga"], isGraduated: true }
];

const container = document.getElementById("studentsContainer");


function renderStudents(arr) {
  container.innerHTML = "";
  arr.forEach(student => {
    const avg = (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2);
    const statusColor = student.isGraduated ? "green" : "red";

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3><span class="status ${statusColor}"></span>${student.name}</h3>
      <p><strong>Возраст:</strong> ${student.age}</p>
      <p class="city"><strong>Город:</strong> ${student.city}</p>
      <p><strong>Оценки:</strong> ${student.grades.join(", ")}</p>
      <p><strong>Средний балл:</strong> ${avg}</p>
      <p class="hobbies"><strong>Хобби:</strong> ${student.hobbies.length ? student.hobbies.join(", ") : "нет"}</p>
    `;
    container.appendChild(card);
  });
}

renderStudents(students);


document.getElementById("searchBtn").addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const index = students.findIndex(s => s.name.toLowerCase() === input);
  if (index !== -1) {
    alert(Индекс студента: ${index});
  } else {
    alert("Пользователь не найден");
  }
});


const names = students.map(s => s.name);
console.log("Массив имён:", names);


const youngStudents = students.filter(s => s.age <= 19);
console.log("Студенты не старше 19 лет:", youngStudents);


const simplified = students.map(s => ({
  id: s.id,
  name: s.name,
  grade: (s.grades.reduce((a, b) => a + b, 0) / s.grades.length).toFixed(2)
}));
console.log("ID, имя и средний балл:", simplified);


const ages = students.map(s => s.age);
const diff = Math.max(...ages) - Math.min(...ages);
console.log("Разница в возрасте:", diff, "лет");


const graduatedCount = students.filter(s => s.isGraduated).length;
console.log("Количество выпускников:", graduatedCount);


const reversed = [...students].reverse();
console.log("Перевёрнутый массив:", reversed);