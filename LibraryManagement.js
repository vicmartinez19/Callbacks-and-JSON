// Datos iniciales de libros en formato JSON
let biblioteca = {
  "libros": [
    { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
    { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
  ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
  setTimeout(() => {
    // Aquí simulas leer el JSON con un retraso de 1 segundo
    callback(biblioteca);
  }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
  leerDatos((datos) => {
    console.log("Inventario de libros:");
    datos.libros.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
    });
  });
}

// Ejecución inicial de prueba
mostrarLibros();