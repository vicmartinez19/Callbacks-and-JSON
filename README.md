## Módulo 3: Callbacks y Manejo de Formato JSON

### 📖 Descripción del Proyecto
Aplicación de consola en Node.js para gestionar el inventario de libros de una biblioteca, utilizando objetos JSON para modelar la información y **callbacks asincrónicos** para simular operaciones de lectura y escritura en almacenamiento diferido con `setTimeout`.

### 🎯 Objetivos Cubiertos
- [x] Estructurar la información de los libros en formato JSON (`titulo`, `autor`, `genero`, `disponible`).
- [x] Simular lectura de base de datos JSON mediante la función `leerDatos(callback)`.
- [x] Listar libros formateados en consola con `mostrarLibros()`.
- [x] Agregar nuevos libros asincrónicamente con `agregarLibro(...)`.
- [x] Actualizar el estado de préstamo/devolución con `actualizarDisponibilidad(...)`.
- [x] Manejo de errores con el patrón de callback estilo Node.js: `callback(error, resultado)`.

### 🚀 Cómo Ejecutar
En la terminal, ejecuta:
```bash
node LibraryManagement.js
```