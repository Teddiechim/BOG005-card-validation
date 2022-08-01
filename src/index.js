import validator from "./validator.js";
let secondWindow = document.getElementById("secondWindow");

secondWindow.classList.add("hideWindow");

function toBuy() {
  let secondWindow = document.getElementById("secondWindow");

  secondWindow.classList.remove("hideWindow");
}

let arrayHover = document.getElementsByClassName("hoverBuy");

for (let i = 0; i < arrayHover.length; i++) {
  arrayHover[i].addEventListener("click", toBuy);
}

function hideModal() {
  let secondWindow = document.getElementById("secondWindow");

  secondWindow.classList.add("hideWindow");
}

document.getElementById("iconClose").addEventListener("click", hideModal);

// Funcionalidad Tarjeta

let number = "";
function maskNumber(e) {
  if (e.target.value.length < number.length) {
    number = number.slice(0, -1);
    let numberMasked = validator.maskify(number);
    document.getElementById("inputNumber").value = numberMasked;
  } else {
    number = number + e.target.value.charAt(e.target.value.length - 1);
    let numberMasked = validator.maskify(number);
    document.getElementById("inputNumber").value = numberMasked;
  }
}

document.getElementById("inputNumber").addEventListener("input", maskNumber);

function validateCard() {
  if (validator.isValid(number)) {
    alert("La tarjeta es válida.");
  } else {
    alert("La tarjeta es inválida");
  }
}

document
  .getElementById("checkoutButtom")
  .addEventListener("click", validateCard);
