/**
 * Actividad 2: Callbacks y JSON
 * Proyecto: Gestión de una Biblioteca de Libros
 */

// 1. Datos iniciales de libros en formato JSON
let biblioteca = {
  "libros": [
    { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
    { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true },
    { "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "genero": "Novela clásica", "disponible": false }
  ]
};

// 2. Función para simular la lectura de datos con callback (simula lectura de archivo JSON)
function leerDatos(callback) {
  setTimeout(() => {
    // Clonamos los datos para evitar mutaciones accidentales directas durante la lectura
    const datosCopiados = JSON.parse(JSON.stringify(biblioteca));
    callback(null, datosCopiados);
  }, 1000);
}

// 3. Función para mostrar todos los libros en consola
function mostrarLibros(callback) {
  console.log("Leyendo inventario desde el almacenamiento...");
  leerDatos((error, datos) => {
    if (error) {
      console.error("❌ Error al leer los datos:", error);
      if (callback) callback(error);
      return;
    }

    console.log("=================== INVENTARIO DE LIBROS ===================");
    datos.libros.forEach((libro, index) => {
      const estado = libro.disponible ? "🟢 Disponible" : "🔴 Prestado";
      console.log(`${index + 1}. "${libro.titulo}" de ${libro.autor} | Género: ${libro.genero} | Estado: ${estado}`);
    });
    console.log("============================================================");

    if (callback) callback(null, datos.libros);
  });
}

// 4. Función para agregar un nuevo libro (simula escritura en archivo con callback)
function agregarLibro(titulo, autor, genero, disponible = true, callback) {
  console.log(`⏳ Guardando nuevo libro: "${titulo}"...`);
  setTimeout(() => {
    // Validación básica
    if (!titulo || !autor || !genero) {
      const errorMsg = "Todos los campos (título, autor, género) son obligatorios.";
      console.error(`❌ Error al agregar: ${errorMsg}`);
      if (callback) callback(new Error(errorMsg));
      return;
    }

    const nuevoLibro = { titulo, autor, genero, disponible };
    biblioteca.libros.push(nuevoLibro);
    console.log(`✅ Libro agregado con éxito: "${nuevoLibro.titulo}"`);

    if (callback) callback(null, nuevoLibro);
  }, 1000);
}

// 5. Función para cambiar la disponibilidad de un libro (simula actualización con callback)
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
  console.log(`⏳ Actualizando disponibilidad de: "${titulo}" a ${nuevoEstado ? 'Disponible' : 'Prestado'}...`);
  setTimeout(() => {
    const libro = biblioteca.libros.find(
      (item) => item.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (!libro) {
      const errorMsg = `No se encontró el libro con título "${titulo}".`;
      console.error(`❌ ${errorMsg}`);
      if (callback) callback(new Error(errorMsg));
      return;
    }

    libro.disponible = nuevoEstado;
    const estadoTexto = nuevoEstado ? "Disponible" : "Prestado";
    console.log(`✅ Disponibilidad actualizada: "${libro.titulo}" ahora está ${estadoTexto}`);

    if (callback) callback(null, libro);
  }, 1000);
}

// ==========================================
// Demostración del flujo asincrónico encadenado con Callbacks
// ==========================================
console.log("🚀 Iniciando sistema de gestión de biblioteca...");

// Paso A: Mostramos los libros iniciales
mostrarLibros((err) => {
  if (err) return;

  // Paso B: Agregamos un nuevo libro
  agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, (err) => {
    if (err) return;

    // Paso C: Prestamos el libro "1984" (cambiamos disponible a false)
    actualizarDisponibilidad("1984", false, (err) => {
      if (err) return;

      // Paso D: Devolvemos "Don Quijote de la Mancha" (cambiamos disponible a true)
      actualizarDisponibilidad("Don Quijote de la Mancha", true, (err) => {
        if (err) return;

        // Paso E: Mostramos el inventario final actualizado
        mostrarLibros(() => {
          console.log("🎉 Flujo de operaciones con callbacks finalizado con éxito.");
        });
      });
    });
  });
});