console.log("*************************")
console.log("EJERCICIO 5 - EQUIPO");

const toggleDisplay = () => {
  const div = document.querySelector("#ejercicio5");
  console.log(div)
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getDetalles() {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Apellido: ${this.apellido}`);
      console.log(`Edad: ${this.edad}`);
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad
      }
    }
}

class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }
  getDetalles() {
    super.getDetalles();
    console.log(`Posicion: ${this.posicion}`);
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      posicion: this.posicion
    }
  }
}

class Entrenador extends Persona {
  constructor(nombre, apellido, edad, tiempoExperencia, idFederacion = Math.floor(Math.random()*90000) + 10000) {
    super(nombre, apellido, edad);
    this.tiempoExperencia = tiempoExperencia;
    this.idFederacion = idFederacion;
  }
  getDetalles() {
    super.getDetalles();
    console.log(`Tiempo de experiencia (en años): ${this.tiempoExperencia}`);
    console.log(`Id de Federación: ${this.idFederacion}`);
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      tiempoExperencia: this.tiempoExperencia,
      idFederacion: this.idFederacion
    }
  }
}
class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }
  getDetalles() {
    console.log("Detalles del entrenador:");
    this.entrenador.getDetalles();

    console.log("\nDetalles de los jugadores:");
    for (let jugador of this.jugadores) {
        jugador.getDetalles();
      console.log("------------------");
    }
      return {
        entrenador: this.entrenador,
        jugadores: this.jugadores
      }
  }
}
    

const jugadores = [
  new Jugador("Lionel", "Messi", 33, "Delantero"),
  new Jugador("Luis", "Ospina", 36, "Portero"),
  new Jugador("Pibe", "Valderrama", 50, "Medio"),
  new Jugador("Nicolas", "Tagliafico", 28, "Defensor")
];

const entrenador = new Entrenador("Jose", "Pekerman", 71, 20);
const equipo = new Equipo(entrenador, jugadores);
console.log("EQUIPO: ", equipo.getDetalles())
console.log("FIN EJERCICIO 5")
console.log("*************************")

// Presentación de la info en el DOM:
const div = document.querySelector("#ejercicio5");
div.innerHTML = `
<h3>Entrenador</h3>
<table>
    <thead>
      <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
      <th>Tiempo de experiencia</th>
      <th>Id de Federación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>${equipo.entrenador.nombre}</td>
      <td>${equipo.entrenador.apellido}</td>
      <td>${equipo.entrenador.edad}</td>
      <td>${equipo.entrenador.tiempoExperencia}</td>
      <td>${equipo.entrenador.idFederacion}</td>
      </tr>
      </tbody>
      </table>
      <h3>Jugadores</h3>
  <table>
  <thead>
      <tr>
      <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Posición</th>
        </tr>
        </thead>
    <tbody>
    ${equipo.jugadores.map(jugador => `
        <tr>
        <td>${jugador.nombre}</td>
          <td>${jugador.apellido}</td>
          <td>${jugador.edad}</td>
          <td>${jugador.posicion}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;
