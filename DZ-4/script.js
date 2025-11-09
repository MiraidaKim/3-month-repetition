// МАССИВ ЧИСЕЛ 
let numbers = [10, 0, 5, 3, 7];
console.log("Исходный массив:", numbers);

numbers.push(15);
console.log("После добавления в конец:", numbers);

numbers.shift();
console.log("После удаления из начала:", numbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Чётные числа:", evenNumbers);

const multiplied = numbers.map(num => num * 5);
console.log("Умноженные на 5:", multiplied);

const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log("Среднее арифметическое:", avg);

const sorted = [...numbers].sort((a, b) => a - b);
console.log("Отсортированные по возрастанию:", sorted);


// МАССИВ ПЕРСОНАЖЕЙ 
const characters = [
  { name: "Сьюзан Майер", age: 38, role: "иллюстратор" },
  { name: "Линетт Скаво", age: 42, role: "менеджер в сфере рекламы" },
  { name: "Бри Ван де Камп", age: 45, role: "Домохозяйка" },
  { name: "Габриэль Солис", age: 36, role: "супермодель" },
  { name: "Иди Бритт", age: 40, role: "агент по недвижимости" },
  { name: "Майк Дельфино", age: 41, role: "сантехник" },
  { name: "Том Скаво", age: 43, role: "владелец пицерии" },
  { name: "Карлос Солис", age: 44, role: "бизнесмен" },
  { name: "Джули Мэйер", age: 20, role: "студент" },
  { name: "Эндрю Ван де Камп", age: 18, role: "студент" }
];

const names = characters.map(person => person.name);
console.log("Имена персонажей:", names);

const descriptions = characters.map(p => `${p.name} - ${p.role}`);
console.log("Описания:", descriptions);



const oldest = characters.reduce((a, b) => a.age > b.age ? a : b);
const youngest = characters.reduce((a, b) => a.age < b.age ? a : b);
console.log("Самый старший:", oldest.name, "-", oldest.age);
console.log("Самый младший:", youngest.name, "-", youngest.age);



const ageDiff = oldest.age - youngest.age;
console.log("Разница в возрасте:", ageDiff);


const hasMinor = characters.some(p => p.age < 18);
console.log("несовершеннолетние:", hasMinor);


const over20 = characters.filter(p => p.age > 20);
console.log("Персонажи старше 20:", over20.map(p => p.name));
