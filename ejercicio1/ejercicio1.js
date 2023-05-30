const toggleDisplay1 = () => {
  const div = document.querySelector("#ejercicio1");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
const resultado1 = document.getElementById("resultado1");
const randomParImpar = () => {
  console.log("*************************")
  console.log("EJERCICIO 1 - GENERAR NUMERO RANDOM Y DETERMINAR SI ES PAR O IMPAR");
  const arregloRandoms = []
  const arregloPares = []
  for (let i = 0; i < 5; i++) {
    const numero = Math.floor(Math.random() * 100);
    arregloRandoms.push(numero);
  }
  console.log(`Los numeros random son: [${arregloRandoms}]`)
  arregloRandoms.forEach(numero => {
    if (numero % 2 === 0) {
      console.log(`El numero ${numero} es par`);
      arregloPares.push({ numero: numero, par: "par" });
    } else {
      console.log(`El numero ${numero} es impar`);
      arregloPares.push({ numero: numero, par: "impar" });
    }
  })

  resultado1.innerHTML = `
  Los numeros random son: [${arregloRandoms}] 
  <br> 
  ${arregloPares.map(elemento => {
    return `El numero ${elemento.numero} es ${elemento.par}`
  }).join("<br>")}
  `;
  
  console.log("FIN EJERCICIO 1")
  console.log("*************************")
}

const calcular1 = document.getElementById("calcular1");
calcular1.addEventListener("click", () => {
  randomParImpar();
})