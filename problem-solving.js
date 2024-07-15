

//ANSWER FOR PROBLEM NO.1//


  // CODE ER SOLUTION NICHER EITA//

  function scopeTest() {
    let letVariable = "I am let";  
    const constVariable = "I am const";  
  
    if (true) {
      var varVariable = "I am var";
    }
  
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
  
  scopeTest();
  
  //AR EITAR SOLUTION UPORER CODE KARON letVariable abong constVariable if er vetor work korte parena tai ami ui duitake if thake ber kore anechi//


//ANSWER FOR PROBLEM NO.2//

function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); 
console.log(greet("Bob", "Welcome")); 


//ANSWER FOR PROBLEM NO.3//

function sum(...numbers) {
  
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

//ANSWER FOR PROBLEM NO.4//

 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 const array3 = [7, 8, 9];
 
const mergedArray = [...array1, ...array2, ...array3];

 console.log(mergedArray)

 
 //ANSWER FOR PROBLEM NO.5//

 const name = "John";
 const age = 30;

 const person = {
  name, 
  age, 
  greet() { 
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`; 
  }
}; 

console.log(person.greet());

  //ANSWER FOR PROBLEM NO.6//

  const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

//ANSWER FOR PROBLEM NO.7//

const Name = "Alice";
const Age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 


//ANSWER FOR PROBLEM NO.8//

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 }
];

for (const student of students) {
  console.log(`${student.name} - ${student.grade}`);
}

//ANSWER FOR PROBLEM NO.9//

const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (const innerArray of nestedArrays) {
  let sum = 0; 

  for (const num of innerArray) {
    sum += num; 
  }

  console.log(`Sum of elements: ${sum}`);
}


//ANSWER FOR PROBLEM NO.10//

const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); 



