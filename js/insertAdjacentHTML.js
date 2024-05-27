const CAJA = document.querySelector(".caja");

for (let k = 0; k < 10; k++) {
//   CAJA.insertAdjacentHTML("beforeend", `<button>Boton ${k+1}</button>`);
//   CAJA.insertAdjacentHTML("afterbegin", `<button>Boton ${k+1}</button>`);
// // Pone fuera de la caja arriba de 1 al 10  
// CAJA.insertAdjacentHTML("beforebegin", `<button>Boton ${k+1}</button>`);
// Pone fuera de la caja debajo de 10 al 1
CAJA.insertAdjacentHTML("afterend", `<button class="bt${k}">Boton ${k+1}</button>`);
  document.querySelector(".bt"+k).addEventListener("click", saludar);
}

function saludar() {
  alert("Hola");
}
