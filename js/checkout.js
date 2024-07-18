// Exercise 6
//Cargar todo el DOM antes de pasar la función
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  form.addEventListener("submit", validate);
});

function validate(event) {
  event.preventDefault();
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  //Reseteo mensajes de error
  errorName.style.display = "none";
  errorEmail.style.display = "none";
  errorAddress.style.display = "none";
  errorLastN.style.display = "none";
  errorPassword.style.display = "none";
  errorPhone.style.display = "none";

  //Expresiones regulares para validar
  const soloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
  const soloNumeros = /^[0-9]+$/;
  const emailInput = /\S+@\S+\.\S+/;
  const letrasYNumeros = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;

  // Validate fields entered by the user: name, phone, password, and email
  if (
    fName.value.trim() === "" ||
    fName.length < 3 ||
    !soloLetras.test(fName.value)
  ) {
    errorName.style.display = "block";
    fName.style.border = "1px solid red";
    error++;
  } else {
    fName.style.border = "1px solid green";
  }

  if (
    fLastN.value.trim() === "" ||
    fLastN.length < 3 ||
    !soloLetras.test(fLastN.value)
  ) {
    errorLastN.style.display = "block";
    fLastN.style.border = "1px solid red";
    error++;
  } else {
    fLastN.style.border = "1px solid green";
  }

  if (fAddress.value.trim() === "" || fAddress.length < 3) {
    errorAddress.style.display = "block";
    fAddress.style.border = "1px solid red";
    error++;
  } else {
    fAddress.style.border = "1px solid green";
  }

  if (
    fPhone.value.trim() === "" ||
    fPhone.length < 3 ||
    !soloNumeros.test(fPhone.value)
  ) {
    errorPhone.style.display = "block";
    fPhone.style.border = "1px solid red";
    error++;
  } else {
    fPhone.style.border = "1px solid green";
  }

  if (
    fPassword.value.trim() === "" ||
    fPassword.length < 3 ||
    !letrasYNumeros.test(fPassword.value)
  ) {
    errorPassword.style.display = "block";
    fPassword.style.border = "1px solid red";
    error++;
  } else {
    fPassword.style.border = "1px solid green";
  }

  if (
    fEmail.value.trim() === "" ||
    fEmail.length < 3 ||
    !emailInput.test(fEmail.value)
  ) {
    errorEmail.style.display = "block";
    fEmail.style.border = "1px solid red";
    error++;
  } else {
    fEmail.style.border = "1px solid green";
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
