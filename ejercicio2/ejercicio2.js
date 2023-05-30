const calcularMultiplos = (numero) => {
  let multiplos = [];
  let resultado = 0;
  let contador = 1;
  while (resultado <= 100) {
    resultado = numero * contador;
    multiplos.push(resultado);
    contador++;
  }  
  multiplos.pop();
  console.log("*************************")
  console.log("EJERCICIO 2 - OBTENER LOS MÚLTIPLOS DE UN NUMERO");
  console.log(`Los multiplos de ${numero} son: [${multiplos}]`);
  console.log("FIN EJERCICIO 2")
  console.log("*************************")
  resultado2.innerHTML = `Los multiplos de ${numero} son: [${multiplos}]`;
}

const toggleDisplay2 = () => {
  const div = document.querySelector("#ejercicio2");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

const inputNumero = document.getElementById("inputNumero2");
const resultado2 = document.getElementById("resultado2");
const buttonCalcular = document.getElementById("calcular2");
buttonCalcular.addEventListener("click", (event) => {
  const numero = parseInt(inputNumero.value);
  calcularMultiplos(numero);
})
