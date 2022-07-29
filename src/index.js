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

function saveNumber(e) {}

document.getElementById("inputNumero").addEventListener("input", saveNumber);

function maskNumber(e) {
  console.log(e);
  let number = validator.maskify(e.target.value);
  document.getElementById("inputNumero").value = number;
}

document.getElementById("inputNumero").addEventListener("input", maskNumber);

function validateCard(e) {
  let numberCard = document.getElementById("inputNumero").value;
  validator.isValid(numberCard);
  alert(numberCard);
  if (validator.isValid(numberCard)) {
    alert("La tarjeta es válida.");
  } else {
    alert("La tarjeta es inválida");
  }
}

document
  .getElementById("checkoutBoton")
  .addEventListener("click", validateCard);
