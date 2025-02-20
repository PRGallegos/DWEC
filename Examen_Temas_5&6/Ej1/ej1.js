// Espera a que el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", async () => {
    // Donde se verán los productos
    const container = document.getElementById("products-container");

    // Intenta solicitar a la API y procesar datos
    try {
        // Solicitud a la API
        const response = await fetch("https://dummyjson.com/products");

        const data = await response.json();

        // Filtra los productos
        const filteredProducts = data.products.filter(product => product.price < 100);

        // Itera sobre cada producto filtrado.
        filteredProducts.forEach(product => {
            // Crea un elemento div para representar la tarjeta del producto.
            const productCard = document.createElement("div");

            // Añade una clase CSS a la tarjeta del producto para aplicar estilos.
            productCard.classList.add("product-card");

            // Define el contenido HTML de la tarjeta del producto.
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}"> <!-- Muestra la imagen del producto -->
                <h2>${product.title}</h2> <!-- Muestra el título del producto -->
                <p>${product.description}</p> <!-- Muestra la descripción del producto -->
                <p><strong>Price: $${product.price}</strong></p> <!-- Muestra el precio del producto -->
            `;
            container.appendChild(productCard);
        });
    } catch (error) {
        // Si ocurre un error durante la solicitud o el procesamiento, se captura aquí.
        console.error("Error fetching data:", error);

        // Muestra un mensaje de error en el contenedor en caso de fallo.
        container.innerHTML = "<p>Error loading products.</p>";
    }
});