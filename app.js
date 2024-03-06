// Description: Juego del número secreto
var parrafo = document.getElementsByClassName("texto__parrafo");
var titulo = document.querySelector("h1");
let numeroSecreto = generaNumeroSecreto();
let numMax = 10;
let numMin = 1;
let contador = 1;


console.log(numeroSecreto);

function asignarTextElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorusuario").value);

  console.log(contador);

  if (numeroDeUsuario < numMin || numeroDeUsuario > numMax) {
    asignarTextElemento("p", "El número debe estar entre 1 y 10");
    parrafo[0].style.color = "red";
    return;
  } else if (isNaN(numeroDeUsuario)) {
    asignarTextElemento("p", "El valor ingresado no es un número");
    parrafo[0].style.color = "red";
    return;
  } else if (numeroSecreto !== numeroDeUsuario) {
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextElemento("p", "El número secreto es mayor");
      parrafo[0].style.color = "white";
    } else {
      asignarTextElemento("p", "El número secreto es menor");
      parrafo[0].style.color = "white";
    }
  } else if (numeroDeUsuario === numeroSecreto) {
    asignarTextElemento("h1", "¡Felicidades! Has adivinado el número secreto");
    asignarTextElemento("p", "El número secreto es " + numeroSecreto);
    titulo.style.color = "green";
  }
  contador++;
  if (contador > 4) {
    asignarTextElemento("h1", "¡Lo siento! Has agotado tus intentos");
    asignarTextElemento("p", "El número secreto era " + numeroSecreto);
    titulo.style.color = "red";
  }
  limpiarInputs();
  return;
}

function limpiarInputs() {
  document.getElementById("valorusuario").value = "";
  return;
}

function generaNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
  location.reload();
});

addEventListener("keypress", function (event) {
  if (event.key === "p") {
    location.reload();
  }
})

asignarTextElemento("h1", "Juego del número secreto!");
asignarTextElemento("p", "Indica un número del 1 al 10");
