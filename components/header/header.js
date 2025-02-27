function mostrarMenu(){
    let header = document.createElement('div');
    header.className = "header";

    let logo = document.createElement('img');
    logo.src = "https://thumbs.dreamstime.com/b/s-logo-letter-flock-birds-flying-disintegrating-s-logo-letter-flying-flock-birds-disintegrating-101871501.jpg";
    logo.className = "logo";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "productos Marcados";
    header.appendChild(h1);

    let circulo = document.createElement('div');
    circulo.className = "circulo";
    circulo.innerText = 5;
    header.appendChild(circulo);

   
    return header;

}
export {mostrarMenu}