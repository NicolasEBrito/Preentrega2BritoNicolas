   //construccion y primeros pokemones
   function Datos(pokemon) {
        this.tipo = pokemon.tipo;
        this.nombre = pokemon.nombre;
        this.atk = pokemon.atk;
    }
    const pokedex = [];
    const Leafeon = new Datos({ nombre: "Leafeon", tipo: "Planta", atk: 100 });
    const Vaporeon = new Datos({ nombre: "Vaporeon", tipo: "Agua", atk: 100 });
    const Flareon = new Datos({ nombre: "Flareon", tipo: "Fuego", atk: 100 });
    pokedex.push(Leafeon);
    pokedex.push(Vaporeon);
    pokedex.push(Flareon);
    
    //Funciones de ataques
    function ataqueEfectivo(n1) {
        return n1 * 2;
    }
    function ataqueDebil(n1) {
        return n1 / 2;
    }
  document.addEventListener("DOMContentLoaded", function() {
    let selectAtaque = document.getElementById("select1");
    let selectDefensa = document.getElementById("select2");
    let calcularAtaqueBtn = document.getElementById("calcularAtaque");
  
    calcularAtaqueBtn.addEventListener("click", function() {
      let pokemonAtk = selectAtaque.value; 
      let pokemonDef = selectDefensa.value; 
      let ataquePokemon;
      let defensaPokemon;
  
      // Encontrar el Pokémon correspondiente según el valor seleccionado
      for (let pokemon of pokedex) {
        if (pokemon.nombre === pokemonAtk) {
          ataquePokemon = pokemon;
        }
        if (pokemon.nombre === pokemonDef) {
          defensaPokemon = pokemon;
        }
      }

      // Verificar si se encontraron los Pokémon seleccionados
      if (!ataquePokemon) {
        alert("Pokemon atacante inválido");
        return; 
      }

      if (!defensaPokemon) {
        alert("Pokemon defensor inválido");
        return; 
      }

      let tipoAtaque = ataquePokemon.tipo;
      let tipoDef = defensaPokemon.tipo;
      let ataque = 0;
  
      if ((tipoAtaque === "Fuego" && tipoDef === "Planta") || 
          (tipoAtaque === "Planta" && tipoDef === "Agua") || 
          (tipoAtaque === "Agua" && tipoDef === "Fuego")) {
        ataque = ataqueEfectivo(ataquePokemon.atk);
        alert("El ataque será de " + ataque + " puntos de daño");
      } else if ((tipoAtaque === "Fuego" && tipoDef === "Agua") || 
                 (tipoAtaque === "Planta" && tipoDef === "Fuego") || 
                 (tipoAtaque === "Agua" && tipoDef === "Planta")) {
        ataque = ataqueDebil(ataquePokemon.atk);
        alert("El ataque será de " + ataque + " puntos de daño");
      } else {
        ataque = ataquePokemon.atk;
        alert("El ataque será de " + ataque + " puntos de daño");
      }
    });
  });
  //la idea es que en el proyecto final se puedan ver cards o fotos de los pokemones una vez seleccionados en el select
  //Consulta de pokemon al azar
  azar.addEventListener('click', ()=>{
    const pokemonAleatorio = pokedex[Math.floor(Math.random() * pokedex.length)];
    alert("El Pokémon al azar es: " + pokemonAleatorio.nombre)});
    //también debería verse el pokemon seleccionado y probablemente en el proyecto finalizado esto no sea un alert
//consulta de ataque
    let pkConsulta = document.getElementById("consultaPk");
    let consultaBtn = document.getElementById("buscarPk");
    //busqueda del pokemon será añadido al proyecto final
   /* consultaBtn.addEventListener('click', ()=>{
      let pkConsulta = pkConsulta.value
        for (let consultado of pokedex){
if (consultado.nombre===pkConsulta){
    alert("el ataque de " + pkConsulta + " es de " + consultado.ataque+ " puntos de daño")
}
        }
    })*/
    