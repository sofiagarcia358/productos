import { producto } from "./itemProducto.js";
import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";
import { dataProducto } from "./data.js";

const imagenesProductos = {
    "haburguesa": "https://laopinion.com/wp-content/uploads/sites/3/2025/01/clasica-hamburguesa-burger-king-como-hacerla-en-casa_shutterstock_2476088505.jpg",
    "pizza": "https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg",
    "Tacos": "https://images.squarespace-cdn.com/content/v1/6001f6e8b4d633626a2e4273/1623713054757-TSWPQ9Y46VWMKEWPLR2F/1.jpg",
    "papas fritas": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJgNu-6lnFUh3p6BFqEbCNAOqFcaMdDU5kh6onbzWBAQ99PlCvMb9-7TMiBLyZdIVhJQ&usqp=CAU",
    "banderillas": "https://www.cocinadelirante.com/sites/default/files/images/2024/03/receta-de-banderillas-con-queso.jpg",
    "fetuccini": "https://www.aheadofthyme.com/wp-content/uploads/2020/08/shrimp-fettuccine-alfredo-pasta-bake-5.jpg",
    "lasagna": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ITfi02rHLgzvQV30rKZm00Ye0dy9gnoiq10sKDCw6agzwGJ7U-ILD0ys9cr_Il_fGUg&usqp=CAU",
    "cabatini": "https://www.pizzahut.com.gt/static/media/images/images/jpg/10_14-10-2024-10-03_MD.jpg",
    "Croisant": "https://images.getrecipekit.com/v1608585894_13_vjwdhl.jpg?aspect_ratio=16:9&quality=90&auto_optimize=medium",
    "Tiramisú": "https://www.recetas-italia.com/base/stock/Recipe/tiramisu/tiramisu_web.jpg.webp"
};

function cargarProductos() {
    let contenedor = document.createElement('div');
    contenedor.className = "cargaProductos";

    dataProducto.forEach(nombreProducto => {
        let imagenSrc = imagenesProductos[nombreProducto] || "./img/default.jpg";
        let product = producto(nombreProducto, imagenSrc);

        let contenedorProducto = document.createElement('div');
        contenedorProducto.className = "Producto";
        
        contenedorProducto.appendChild(product);
        eliminarProducto(product); 
        resaltarProducto(product);

        contenedor.appendChild(contenedorProducto);
    });

    return contenedor;
}

export { cargarProductos };
