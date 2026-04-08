
<img width="1880" height="907" alt="{E9756685-3DF0-4E6E-ABD1-A8FF0AAA724C}" src="https://github.com/user-attachments/assets/fe6cda06-9ca3-42d2-8673-ba6e42a697a7" />

🍳 API- Buscador de Recetas

Aplicación web que permite buscar recetas en tiempo real a partir de un ingrediente, consumiendo la API pública de TheMealDB y mostrando los resultados dinámicamente sin recargar la página.

🚀 Descripción

Este proyecto implementa una experiencia de búsqueda interactiva donde el usuario puede ingresar un ingrediente y obtener recetas relacionadas de forma rápida y fluida.

La aplicación consume la API externa:

👉 https://www.themealdb.com/api/json/v1/1/filter.php?i=[ingrediente
]

y renderiza dinámicamente los resultados en pantalla.


Búsqueda Funcional de Recetas

✔️ Se previene la recarga de la página al enviar el formulario
✔️ Se captura el valor del input de búsqueda
✔️ Se realiza una petición asíncrona con fetch
✔️ Uso de async/await para manejo de la API

Renderizado Dinámico de Resultados

✔️ El contenedor inicia vacío (sin contenido hardcodeado)
✔️ Se generan tarjetas dinámicamente por cada receta
✔️ Uso de template literals (ES6+)
✔️ Extracción de datos con destructuring
✔️ Limpieza de resultados anteriores antes de una nueva búsqueda

 Manejo de Búsquedas sin Resultados

✔️ Se detecta cuando meals es null
✔️ Se muestra un mensaje claro al usuario:

"Lo sentimos, no se encontraron recetas. Intenta con otro ingrediente."

🛠️ Tecnologías utilizadas
HTML5
CSS3 / Bootstrap
JavaScript (ES6+)
Fetch API
TheMealDB API

⚙️ Requisitos Técnicos

✔️ Código JavaScript centralizado en app.js
✔️ Uso de let y const
✔️ Arrow functions
✔️ Template literals
✔️ Destructuring
✔️ Manejo de asincronía con async/await
✔️ Manipulación del DOM (inputs, renderizado, limpieza)

📦 Instalación y uso
Clonar el repositorio:
git clone https://github.com/clauubrand/API-Buscador-de-recetas.git
Abrir el proyecto:
cd API-Buscador-de-recetas
Ejecutar:

Abrir el archivo index.html en el navegador.

🧩 Funcionamiento
El usuario ingresa un ingrediente en el input
Se intercepta el evento submit
Se realiza una petición a la API con fetch
Se procesan los datos recibidos
Se renderizan tarjetas dinámicamente en el DOM

🖼️ Estructura de Renderizado

Cada receta se muestra como una tarjeta que incluye:
Nombre de la receta
Imagen
Estilos basados en Bootstrap

⚡ Manejo de estados
Estado	Comportamiento
Búsqueda válida	Muestra recetas
Nueva búsqueda	Limpia resultados anteriores
Sin resultados	Muestra mensaje informativo

📁 Estructura del proyecto
📦 API-Buscador-de-recetas
 ┣ 📜 index.html
 ┣ 📜 styles.css
 ┣ 📜 app.js
 ┗ 📜 README.md
🌐 API utilizada
TheMealDB (API pública de recetas)
👨‍💻 Autor

Claudio Melo

GitHub: https://github.com/clauubrand
📄 Entregable

📌 Repositorio público en GitHub con la aplicación completamente funcional.

⭐ Conclusión

Este proyecto demuestra el uso de:

Consumo de APIs externas
Programación asíncrona moderna
Manipulación dinámica del DOM
Buenas prácticas con JavaScript ES6+
