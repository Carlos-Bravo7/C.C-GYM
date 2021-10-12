let pokemon1,pokemon2;
let nombre1,nombre2;

window.onload = inicio;

function inicio(){
  pokemon1 = document.getElementById("poke_01");
  pokemon2 = document.getElementById("poke_02");
  nombre1 = document.getElementById("nombre_1");
  nombre2 = document.getElementById("nombre_2");
  traerDatos(pokemon1,nombre1,4);
  traerDatos(pokemon2,nombre2,3);
}

function traerDatos(contenedor,nombre,id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(data => {
    contenedor.src = data.sprites.other.dream_world.front_default; 
    nombre.innerHTML = data.name;
   })
}