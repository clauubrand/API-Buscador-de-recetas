
<img width="1880" height="907" alt="{E9756685-3DF0-4E6E-ABD1-A8FF0AAA724C}" src="https://github.com/user-attachments/assets/fe6cda06-9ca3-42d2-8673-ba6e42a697a7" />

🍳 API - Buscador de Recetas

📄 Descripción

Aplicación web que permite buscar recetas en tiempo real a partir de un ingrediente, consumiendo la API pública de TheMealDB.

Entrega una experiencia dinámica sin recargar la página, mostrando resultados de forma rápida e interactiva mediante JavaScript moderno.
---
🚀 Funcionalidades
🔎 Búsqueda de Recetas
Se previene la recarga de la página al enviar el formulario
Se captura el valor del input de búsqueda
Se realiza una petición asíncrona con fetch
Uso de async/await para consumir la API
🧩 Renderizado Dinámico
El contenedor inicia vacío (sin contenido hardcodeado)
Se generan tarjetas dinámicamente por cada receta
Uso de template literals (ES6+)
Extracción de datos con destructuring
Limpieza de resultados antes de cada nueva búsqueda
⚠️ Manejo de Errores
Detección cuando meals es null
Mensaje al usuario:
Lo sentimos, no se encontraron recetas. Intenta con otro ingrediente.
⚙️ Funcionamiento
El usuario ingresa un ingrediente
Se intercepta el evento submit
Se realiza la petición a la API
Se procesan los datos recibidos
Se renderizan las recetas en el DOM
🖼️ Renderizado

Cada receta se muestra como una tarjeta que incluye:

Nombre de la receta
Imagen
Estilos con Bootstrap
⚡ Manejo de Estados
Estado	Comportamiento
Búsqueda válida	Muestra recetas
Nueva búsqueda	Limpia resultados anteriores
Sin resultados	Muestra mensaje informativo
🛠️ Tecnologías
HTML5
CSS3 / Bootstrap
JavaScript (ES6+)
Fetch API
TheMealDB API
📌 Requisitos Técnicos
Código JavaScript centralizado en app.js
Uso de let y const
Arrow functions
Template literals
Destructuring
async/await
Manipulación del DOM
📦 Instalación

Clonar el repositorio:

git clone https://github.com/clauubrand/API-Buscador-de-recetas.git

Entrar al proyecto:

cd API-Buscador-de-recetas

Ejecutar:

Abrir el archivo index.html en el navegador.

📁 Estructura del Proyecto
API-Buscador-de-recetas
┣ 📜 index.html
┣ 📜 styles.css
┣ 📜 app.js
┗ 📜 README.md
🌐 API Utilizada

TheMealDB (API pública de recetas)

https://www.themealdb.com/api/json/v1/1/filter.php?i=[ingrediente]
📌 Entregable

Repositorio público en GitHub con la aplicación completamente funcional.

⭐ Conclusión

Este proyecto demuestra:

Consumo de APIs externas
Programación asíncrona moderna
Manipulación dinámica del DOM
Buenas prácticas con JavaScript ES6+
👨‍💻 Autor

Claudio Melo
GitHub: https://github.com/clauubrand
Este proyecto demuestra el uso de:

Consumo de APIs externas
Programación asíncrona moderna
Manipulación dinámica del DOM
Buenas prácticas con JavaScript ES6+
