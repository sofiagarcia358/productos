import { mostrarMenu } from "./components/header/header.js";
import { cargarProductos } from "./components/catalogo/catalogo.js";

let Dom = document.querySelector("#root");

function iniciarApp(){

    let div = document.createElement('div');
    div.className = "contenedor";

    div.appendChild(mostrarMenu());
    div.appendChild(cargarProductos);

    return div;
}
Dom.appendChild(iniciarApp());