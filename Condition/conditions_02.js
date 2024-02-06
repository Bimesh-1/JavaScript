/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

//getTemperature(Number(prompt("What is the current temperature?")));

function getTemperature() {
  let promptInput = Number(prompt("Give me a number"));
  console.log(typeof promptInput);
}

function getTemperature(temp) {
  if (temp < 15) {
    console.log("They should wear a jacket");
  } else {
    console.log("You are good to go");
  }
}

let example = prompt("What is the current temperature?");
let number = Number(example);
getTemperature(Number);

getTemperature = prompt("What is the current temperature?");
