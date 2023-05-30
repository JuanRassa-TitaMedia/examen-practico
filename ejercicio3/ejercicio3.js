const contarCaracter = (cadena, caracter) => {
  let contador = 0;
  for (const element of cadena) {
    if (element.toLowerCase() === caracter.toLowerCase()) {
      contador++;
    }
  }
  console.log("*************************")
  console.log("EJERCICIO 3 - CANTIDAD DE REPITICIÓN DE UN CARACTER");
  console.log(`La cantidad de veces que se repite el caracter "${caracter}" en la cadena "${cadena}" es: ${contador}`);
  console.log("FIN EJERCICIO 3")
  console.log("*************************")
  return `La cantidad de veces que se repite el caracter "${caracter}" en la cadena "${cadena}" es: ${contador}`;
}

const resultado3 = document.querySelector("#resultado3");
// resultado.innerHTML = contarCaracter("Hola como estas", "o");
const toggleDisplay3 = () => {
  const div = document.querySelector("#ejercicio3");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

const inputCadena = document.querySelector("#inputCadena3");
const inputCaracter = document.querySelector("#inputCaracter3");
const botonContar = document.querySelector("#contar3");
botonContar.addEventListener("click", () => {
  const cadena = inputCadena.value;
  const caracter = inputCaracter.value;
  resultado3.innerHTML = contarCaracter(cadena, caracter);
})
