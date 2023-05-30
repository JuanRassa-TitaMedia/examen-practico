const invertirArray = (array) => {
  let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  console.log("*************************")
  console.log("EJERCICIO 4 - INVERTIR ARRAY");
  console.log("El arreglo original es: " + array)
  console.log("El arreglo invertido es: " + arrayInvertido)
  console.log("FIN EJERCICIO 4")
  console.log("*************************")
  return arrayInvertido;
}
const resultado = document.querySelector("#resultado4");
const toggleDisplay4 = () => {
  const div = document.querySelector("#ejercicio4");
  console.log(div)
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}


const activarEjemplo1 = () => {
  const array1 = [23,5,34,56,98,"cadena",7];
  resultado.innerHTML = `El array invertido es: ${invertirArray(array1)}`;
}
const activarEjemplo2 = () => {
  const array2 = [true, "hola", 23, 45, "adios", false];
  resultado.innerHTML = `El array invertido es: ${invertirArray(array2)}`;
}
const activarEjemplo3 = () => {
  const array3 = [1,2,3,4,5,6,7,8,9,10]
  resultado.innerHTML = `El array invertido es: ${invertirArray(array3)}`;
}
const activarEjemplo4 = () => {
  const array4 = ["Es", 1, "ejemplo", "2", "4", "3", 345]
  resultado.innerHTML = `El array invertido es: ${invertirArray(array4)}`;
}