function resaltarProducto(){
    let div_resaltar = document.createElement('div');
    div_resaltar.className = "resaltar-p";

    return div_resaltar;
}
function eliminarProducto(){
    let div_eliminar = document.createElement('div');
    div_eliminar.className = "eliminar-p";

    return div_eliminar;
}

export {resaltarProducto, eliminarProducto}