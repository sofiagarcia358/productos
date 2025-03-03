function producto(nombreProducto, imagenSrc) {
    let produ = document.createElement('div');
    produ.className = "item-p";

    let img = document.createElement('img'); // Crear imagen
    img.className = "imagen";
    img.src = imagenSrc || "./img/default.jpg"; // Usa la imagen asignada o default
    img.alt = nombreProducto;

    let nombre = document.createElement('div'); // Crear el nombre del producto
    nombre.className = "nombre";
    nombre.innerText = nombreProducto; // Asignar el texto con el nombre

    produ.appendChild(img); // Agregar imagen
    produ.appendChild(nombre); // Agregar nombre debajo de la imagen

    let precio = document.createElement('span');
    precio.innerText = "Q. 00.00";
    precio.className = "Precio";
    produ.appendChild(precio);

    let eliminar = document.createElement('button');
    eliminar.className = "eliminar";
    eliminar.innerText = "Eliminar";

    eliminar.addEventListener('click', () => {
        produ.remove(); // Elimina el producto del DOM
    });
    produ.appendChild(eliminar);

    return produ;
}

export { producto };
