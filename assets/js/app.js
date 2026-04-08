
class Receta {
    
    constructor({ strMeal, strMealThumb, idMeal }) {
        this.nombre = strMeal;
        this.imagen = strMealThumb;
        this.id = idMeal;
    }


    render() {
        return `
            <div class="col-12 col-md-6 col-lg-4 fade-in">
                <div class="card h-100 shadow-sm">
                    <img src="${this.imagen}" class="card-img-top" alt="${this.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text text-muted">ID: ${this.id}</p>
                        <a href="https://www.themealdb.com/meal/${this.id}" target="_blank" class="btn btn-primary w-100 mt-auto">Ver Detalles</a>
                    </div>
                </div>
            </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias al DOM
    const searchForm = document.getElementById('searchForm');
    const searchInput = searchForm.querySelector('input');
    const recipesContainer = document.getElementById('recipesContainer');


    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevenir recarga

        const ingrediente = searchInput.value.trim();

        if (ingrediente) {
            await buscarRecetas(ingrediente);
        } else {
            alert("Por favor, ingresa un ingrediente para buscar.");
        }
    });

    // Función Asíncrona para obtener datos
    async function buscarRecetas(ingrediente) {
      
        recipesContainer.innerHTML = `
            <div class="col-12 text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </div>`;

        try {
            // Fetch usando Async/Await
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
            const respuesta = await fetch(url);
            
         
            const { meals } = await respuesta.json();

            renderizarResultados(meals);

        } catch (error) {
            console.error("Error en la petición:", error);
            mostrarMensaje("Hubo un error al conectar con el servidor. Intenta más tarde.");
        }
    }


    function renderizarResultados(listaRecetas) {
     
        recipesContainer.innerHTML = '';

    
        if (!listaRecetas) {
            mostrarMensaje("Lo sentimos, no se encontraron recetas con ese ingrediente. Intenta con otro (ej: chicken, beef, potato).");
            return;
        }

  
        listaRecetas.forEach(datosReceta => {
            const receta = new Receta(datosReceta);
            recipesContainer.innerHTML += receta.render();
        });
    }


    function mostrarMensaje(texto) {
        recipesContainer.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info shadow-sm" role="alert">
                    ${texto}
                </div>
            </div>
        `;
    }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});