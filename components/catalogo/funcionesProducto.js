function resaltarProducto(produ) {
    // Agregar evento para resaltar con un color al hacer clic
    produ.addEventListener('click', () => {
        produ.classList.toggle("resaltado"); // Agrega o quita la clase resaltado
    });
}
function eliminarProducto(){
    let div_eliminar = document.createElement('div');
    div_eliminar.className = "eliminar-p";

    return div_eliminar;
}

export {resaltarProducto, eliminarProducto}