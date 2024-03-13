const formulario = document.querySelector(".formu");

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

console.log(nombre);
console.log(email);
console.log(mensaje);

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(e);
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const { nombre, email, mensaje } = datos;

  if (nombre == "" || email == "" || mensaje == "") {
    mensajeEnviar("Todos los campos son obligatorios", "error");
    return;
  }
  mensajeEnviar("Mensaje enviado correctamente", "ok");
});

const mensajeEnviar = (mensaje, clase) => {
  const mostrar = document.createElement("p");
  mostrar.textContent = mensaje;
  mostrar.classList.add(clase);
  formulario.appendChild(mostrar);
  setTimeout(() => {
    mostrar.remove();
  }, 2000);
};
