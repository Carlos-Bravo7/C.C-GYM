let pokemon1, pokemon2;
let name1, name2;
let ataque1, ataque2;
let defensa1, defensa2;
let vida1, vida2;
let ataqueesp1, ataqueesp2;
let defensaesp1, defensaesp2;
let velocidad1, velocidad2;


function combatep(){
    let id = Math.round(Math.random()*(800-1)+parseInt(1));;
    let id2 = Math.round(Math.random()*(800-2)+parseInt(1));;
    pokemon1 = document.getElementById("poke1");
    name1 = document.getElementById("nombre1");
    pokemon2 = document.getElementById("poke2");
    name2 = document.getElementById("nombre2");
    tipo1 = document.getElementById("tipo1");
    tipo2 = document.getElementById("tipo2");
    vida1 = document.getElementById("vida1");
    vida2 = document.getElementById("vida2");
    ataque1 = document.getElementById("ataque1");
    ataque2 = document.getElementById("ataque2");
    ataqueesp1 = document.getElementById("ataqueesp1");
    ataqueesp2 = document.getElementById("ataqueesp2");
    defensa1 = document.getElementById("defensa1");
    defensa2 = document.getElementById("defensa2");
    defensaesp1 = document.getElementById("defensaesp1");
    defensaesp2 = document.getElementById("defensaesp2");
    velocidad1 = document.getElementById("velocidad1");
    velocidad2 = document.getElementById("velocidad2");
    BuscarDatos(pokemon1,name1,tipo1,vida1,ataque1,defensa1,ataqueesp1,defensaesp1,velocidad1,id);
    BuscarDatos(pokemon2,name2,tipo2,vida2,ataque2,defensa2,ataqueesp2,defensaesp2,velocidad2,id2);
}

function BuscarDatos(contenedor,nombre,tipo,vida,ataque,defensa,ataque_esp,defensa_esp,velocidad,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      tipo.innerHTML = "tipo: " + data.types[0].type.name;
      vida.innerHTML = "Hp: " + data.stats[0].base_stat;
      ataque.innerHTML = "Ataque: " + data.stats[1].base_stat;
      defensa.innerHTML = "Defensa: " + data.stats[2].base_stat;
      ataque_esp.innerHTML = "Ataque especial: " + data.stats[3].base_stat;
      defensa_esp.innerHTML = "Defensa especial: " + data.stats[4].base_stat;
      velocidad.innerHTML = "Velocidad: " + data.stats[5].base_stat;
     })
}



window.onload = combatep;