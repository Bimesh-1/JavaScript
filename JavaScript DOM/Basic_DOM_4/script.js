const form = document.querySelector(".form-container");

const priceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type = "checkbox"]'); //it is checking all//
  const priceBanner = document.querySelector("#totalPrice");
  let totalAmount = parseInt(typeSelect.value);

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }

  priceBanner.textContent = `$${totalAmount}`;
};

form.addEventListener("change", priceCalc);
