const CAJA = document.querySelector(".caja");

for (let k = 0; k < 10; k++) {
  const BOTON=document.createElement("button");
  BOTON.textContent=`Boton ${k+1}`;
  BOTON.classList.add("bt"+k);
  CAJA.appendChild(BOTON);
  BOTON.addEventListener("click",saludar);
}

function saludar() {
  alert("Hola");
}
