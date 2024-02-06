/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/
/* First Solution
const textPlaceholder = document.getElementById("content");

 function textChanger() {
  textPlaceholder.textContent = "Hello, World!";
}

Second Solution

const textChanger = () => {
  const textPlaceholder = document.getElementById("content");
  textPlaceholder.textContent = "Hello World!";
};      Third Solution below ||*/

const textChanger = () => {
  document.getElementById("content").textContent = "Hello World!";
};

/*
const textChanger = () => 
  (document.getElementById("content").textContent = "Hello World!");

*/
/*Preffered one 
function textChanger() {
  const textPlaceholder = document.getElementById("content");
  textPlaceholder.textContent = "Hello World!";}
  */
