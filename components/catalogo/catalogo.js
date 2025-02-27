import { producto } from "./itemProducto.js";
import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";
import { dataProducto } from "./data.js";

function cargarProductos(){
    let product = document.createElement('div');
    product.className = "cargaProducto";

    product.appendChild(producto());
    product.appendChild(eliminarProducto());
    product.appendChild(resaltarProducto())

  


    

    return product;

}
export {cargarProductos};