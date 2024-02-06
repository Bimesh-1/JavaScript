// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.//

let evenCount = 0;

for (numbers = 0; numbers < 20; numbers++) {
  let data = Number(prompt("Enter 4 numbers!"));
  if (data % 2 == 0) {
    evenCount++;
  }
}
console.log(evenCount);

/* let sum = 0;
let counter = 0;

do {
  let input = Number(prompt("Enter a number"));
  sum += input;
  counter++;
} while (counter !== 5);

console.log(`Áverage was ${sum / counter}`);  */
