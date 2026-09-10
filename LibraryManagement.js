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
    callback(biblioteca);
  }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros(callback) {
  leerDatos((datos) => {
    console.log("--- Inventario de libros ---");
    datos.libros.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
    });
    if (callback) callback();
  });
}

// Función para agregar un nuevo libro simulando persistencia asincrónica
function agregarLibro(titulo, autor, genero, disponible = true, callback) {
  const nuevoLibro = { titulo, autor, genero, disponible };
  console.log(`Guardando nuevo libro: "${titulo}"...`);
  setTimeout(() => {
    biblioteca.libros.push(nuevoLibro);
    console.log(`Libro "${titulo}" agregado correctamente.`);
    if (callback) callback(nuevoLibro);
  }, 1000);
}

// Ejecución de prueba encadenando lectura y adición
mostrarLibros(() => {
  agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
    mostrarLibros();
  });
});