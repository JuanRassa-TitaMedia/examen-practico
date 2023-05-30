5. Nuevos jugadores (50 ptos).
  5.1. Clase persona con propiedades nombre, apellido y edad
    5.1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la persona.
    5.1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
  5.2. La clase jugador hereda de persona e incluye la propiedad de posición
    5.2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles de persona y los de jugador.
    5.2.2. El constructor recibe y asigna posición a los atributos internos.
  5.3. Clase entrenador hereda de persona y agrega años de experiencia y el id de federación.
    5.3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles de persona y entrenador.
    5.3.2. El constructor recibe y asigna posición a los atributos internos.
    5.3.3. En el constructor configurar para que si no se recibe un id de federación este asigne un número aleatorio de 5 dígitos.
  5.4. Clase equipo tiene las propiedades de entrenador y jugadores
    5.4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien).
    5.4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los jugadores.
  5.5. ¡Probemos!
    5.5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición (Portero, Defensa , Medio y Delantero).
    5.5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
    5.5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el funcionamiento de jerarquía.