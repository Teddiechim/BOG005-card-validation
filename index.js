import validator from "./validator.js";
let segundaVentana = document.getElementById("segundaVentana");

segundaVentana.classList.add("esconder");

function comprar() {
  let segundaVentana = document.getElementById("segundaVentana");

  segundaVentana.classList.remove("esconder");
}

let arrayHover = document.getElementsByClassName("hoverComprar");

for (let i = 0; i < arrayHover.length; i++) {
  arrayHover[i].addEventListener("click", comprar);
}

function hideModal() {
  let segundaVentana = document.getElementById("segundaVentana");

  segundaVentana.classList.add("esconder");
}

document.getElementById("iconoCerrar").addEventListener("click", hideModal);

// Funcionalidad Tarjeta

let number = "";
function maskNumber(e) {
  if (e.target.value.length < number.length) {
    number = number.slice(0, -1);
    let numberMasked = validator.maskify(number);
    document.getElementById("inputNumero").value = numberMasked;
  } else {
    number = number + e.target.value.charAt(e.target.value.length - 1);
    let numberMasked = validator.maskify(number);
    document.getElementById("inputNumero").value = numberMasked;
  }
}

document.getElementById("inputNumero").addEventListener("input", maskNumber);

function validateCard(e) {
  let numberCard = document.getElementById("inputNumero").value;
  validator.isValid(numberCard);
  if (validator.isValid(numberCard)) {
    alert("La tarjeta es válida.");
  } else {
    alert("La tarjeta es inválida");
  }
}

document
  .getElementById("checkoutBoton")
  .addEventListener("click", validateCard);
