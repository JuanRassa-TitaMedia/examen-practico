const convertirMayusculas = (texto) => {
  let textoPorPuntos = texto.split(".")
  let cadenaMayuscula = textoPorPuntos[0].toUpperCase();
  textoPorPuntos.shift()
  textoPorPuntos.unshift(cadenaMayuscula)
  textoPorPuntos.map((elemento, index) => {
    if (index > 0) {
      elemento.toLowerCase();
      let cadenaMinuscula = elemento.toLowerCase();
      textoPorPuntos[index] = cadenaMinuscula;
    }
  })
  let cadenaResultado = textoPorPuntos.join(".")
  console.log("*************************")
  console.log("EJERCICIO 6 - CONVERTIR CARACTERES EN MAYUSCULAS HASTA ENCONTRAR UN PUNTO");
  console.log(cadenaResultado)
  console.log("FIN EJERCICIO 6")
  console.log("*************************")
  resultado6.innerHTML = cadenaResultado;
}

const toggleDisplay6 = () => {
  const div = document.querySelector("#ejercicio6");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
const resultado6 = document.getElementById("resultado6");
const input6 = document.getElementById("input6");
const trigger6 = document.getElementById("trigger6");

trigger6.addEventListener("click", () => {
  const textoInput = input6.value;
  convertirMayusculas(textoInput);
})


const texto = "www.techacademy.com";

