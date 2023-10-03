// 1- Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

console.log(document.title);

newPageTitle = "Generasion 1 pokimon";
document.querySelector("h2#gen-1").textContent = newPageTitle;

// 2- Cambia el color de fondo de la primera generación de Pokimon.



function changeBackground() {

    let color = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
    color[0].style.backgroundColor = "green";

console.log(color);
}

changeBackground()

// 3- Imprime por consola la URL de la página.
console.log(location.href);
// 4- Imprime por consola el dominio de la página.
console.log(location.pathname);
// 5- Imprime todos los nodos de imagen.
const elements = [...document.querySelectorAll("img")];
elements.map
console.log(elements)

//6- Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
let images = document.querySelectorAll("img")

images.forEach(element => {
    console.log(element);
    element.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
});

// 7 Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
let arrayNuevo = Array.from(document.getElementsByClassName("infocard-lg-data text-muted").getElementsByClassName("itype flying"))
for(indice in arrayNuevo){
    arrayNuevo[indice].style.backgroundColor = "blue";
}