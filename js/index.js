const CAJA=document.querySelector(".caja");

CAJA.innerHTML+=`<button>Aceptar</button>`;
document.querySelector("button").addEventListener("click",saludar);
// CAJA.innerHTML+=`<button>Cancelar</button>`;

function saludar(){
       alert("Hola");
}