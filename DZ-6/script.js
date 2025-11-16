const student = {  
  name: "Ivan",  
  age: 21,  
  skills: ["js", "css"]  
};

const { name, age } = student;



const { skills: [skill1, skill2] } = student;



function printStudent({ name, age }) {
  return `Student ${name}, age ${age}`;
}



function sumAndMultiply(first, ...rest) {
  const sum = rest.reduce((acc, n) => acc + n, 0);
  return first * sum;
}



const arrayFirst = [4, 5, 6];
const arraySecond = [1, 2];
const arrayThird = [9, 10];
const arrayFourth = [3];
const arrayFiveth = [7, 8];

const result = [
  ...arraySecond,
  ...arrayFourth,
  ...arrayFirst,
  ...arrayFiveth,
  ...arrayThird
].sort((a, b) => a - b);



const output = document.getElementById("output");
output.textContent = `1. Name: ${name}, Age: ${age}
2. Skills: ${skill1}, ${skill2}
3. printStudent(): ${printStudent(student)}
4. sumAndMultiply(2, 3, 4, 5) = ${sumAndMultiply(2, 3, 4, 5)}
5. Spread result: ${result.join(', ')}`;
