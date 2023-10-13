// let myArray = [1, "Rayhan", 2, 3, 4, "Kalam", 5, true];

// let secondArray = ["Sakib", "Tamim", "Hature Singh", "Papon"];

// const jointArray = myArray.concat(secondArray);

// let firstNumber = 5;
// let secondNumber = 3;

// let sum = firstNumber % secondNumber;

// console.log(sum);

// <, > <=, >=, ==, ===, != !==, !, || &&

// let a = 10;
// let b = 10;

// let ripon = "Graduate";

// console.log();

// let sum = 12 + 12;
// console.log(sum);

// let firstNumber = parseFloat(prompt("Enter Your First Number"));

// let secondNumber = parseFloat(prompt("Enter Your Second Number"));
// console.log(firstNumber + secondNumber);

// let myAge = 17;

// if (myAge >= 18)
// {
//   console.log("Voter");
// }

// else {
//   console.log("Non Voter");
// }

// let math = 53;

// if (math < 33) {
//   console.log("Tumi Fail");
// } else if (math >= 33 ) {
//   console.log("Tumi Pass");
// }
// else if (math >= 50) {
//   console.log("Tumi D");
// } else {
//   console.log("Tumi Exam Daw nai");
// }

// let myAge = 20;

// let age =
//   myAge > 20 || myAge == 20
//     ? "Adult"
//     : myAge < 16
//     ? "Teen"
//     : myAge < 17
//     ? "Young"
//     : "old";
// console.log(age);

function greetings(name, age) {
  let info = "Your Name is " + name + " " + "Your Age " + age;
  return info;
}

function sum(firstNumber, seconNumber, thirdNumber) {
  let sum = firstNumber + seconNumber + thirdNumber;

  return sum;
}
let get = greetings("Ashik", 23);
console.log(get);

console.log(sum(12, 34, 56));
