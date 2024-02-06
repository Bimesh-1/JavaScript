/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
const button = document.querySelector("#addFruitBtn"); // ## for id in querySelector//
const input = document.querySelector("#fruitInput");

const addDetails = () => {
  const fruitInput = document.querySelector("#fruitInput");
  const fruitList = document.querySelector("#fruitList");

  if (fruitInput) {
    const newli = document.createElement("li");
    newli.textContent = fruitInput.value.trim();
    fruitList.appendChild(newli);
    fruitInput.value = " ";
  } else {
    alert("Please enter a fruit name");
  }
};

button.addEventListener("click", addDetails);
