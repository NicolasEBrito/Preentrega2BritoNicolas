let usuario = "nico";
let pass = "1234";
let login = false;

//Login
for (let i = 0; i <= 2; i++) {
    let usuarioIngreso = prompt("Ingrese su usuario");
    let passwordIngreso = prompt("Ingrese su password");
    if (usuarioIngreso == usuario && passwordIngreso == pass) {
        login = true;
        break;
    } else {
        alert("credenciales inválidas");
    }
}
//Función constructora de pokémons
function Datos(pokemon) {
    this.tipo = pokemon.tipo;
    this.nombre = pokemon.nombre;
    this.atk = pokemon.atk;
}

//Funciones de ataques
function ataqueEfectivo(n1) {
    return n1 * 2;
}
function ataqueDebil(n1) {
    return n1 / 2;
}
//Menú
if (login) {
    let opciones = parseInt(prompt("Bienvenido a la calculadora de daño pokémon! :\nEscriba 1 para usar la calculadora \nEscriba 2 para ver un pokémon al azar \nEscriba 3 para buscar el ataque de un Pokémon \nEscriba 4 para salir"));
    while (opciones !== 2 && opciones !== 1 && opciones !== 3 && opciones !== 4) {
        opciones = parseInt(prompt("Opción inválida. \nEscriba 1 para usar la calculadora \nEscriba 2 para ver un pokémon al azar \nEscriba 3 para buscar el ataque de un Pokémon \nEscriba 4 para salir"));
    }
//Pokemones de prueba, la idea es sumar más a futuro
    const pokedex = [];
    const Leafeon = new Datos({ nombre: "Leafeon", tipo: "Planta", atk: 100 });
    const Vaporeon = new Datos({ nombre: "Vaporeon", tipo: "Agua", atk: 100 });
    const Flareon = new Datos({ nombre: "Flareon", tipo: "Fuego", atk: 100 });
    pokedex.push(Leafeon);
    pokedex.push(Vaporeon);
    pokedex.push(Flareon);
//Después de reveer las clases y algunos otros videos, resolví que para las opciones del menú era más facil usar un switch que un if, ya que así no me daba el error de "se esperaba una declaracióin" que no podía resolver
    switch (opciones) {
        case 1:
            let pokemonAtk = parseInt(prompt("Elija el número del Pokémon atacante: \n1. Leafeon \n2. Vaporeon \n3. Flareon"));
            let pokemonDef = parseInt(prompt("Elija el número del Pokémon defensor: \n1. Leafeon \n2. Vaporeon \n3. Flareon"));
            let ataquePokemon;
            let defensaPokemon;

            switch (pokemonAtk) {
                case 1:
                    ataquePokemon = Leafeon;
                    break;
                case 2:
                    ataquePokemon = Vaporeon;
                    break;
                case 3:
                    ataquePokemon = Flareon;
                    break;
                default:
                    alert("Pokemon atacante inválido");
            }

            switch (pokemonDef) {
                case 1:
                    defensaPokemon = Leafeon;
                    break;
                case 2:
                    defensaPokemon = Vaporeon;
                    break;
                case 3:
                    defensaPokemon = Flareon;
                    break;
                default:
                    alert("Pokemon defensor inválido");
            }

            let tipoAtaque = ataquePokemon.tipo;
            let tipoDef = defensaPokemon.tipo;
            let ataque = 0;

            if (tipoAtaque == "Fuego" && tipoDef == "Planta" || tipoAtaque == "Planta" && tipoDef == "Agua" || tipoAtaque == "Agua" && tipoDef == "Fuego") {
                ataque = ataqueEfectivo(ataquePokemon.atk);
            } else if (tipoAtaque == "Fuego" && tipoDef == "Agua" || tipoAtaque == "Planta" && tipoDef == "Fuego" || tipoAtaque == "Agua" && tipoDef == "Planta") {
                ataque = ataqueDebil(ataquePokemon.atk);
            } else {
                ataque = ataquePokemon.atk;
            }
            alert("El ataque será de " + ataque + " puntos de daño");
            break;

        case 2:
            const pokemonAleatorio = pokedex[Math.floor(Math.random() * pokedex.length)];
            alert("El Pokémon al azar es: " + pokemonAleatorio.nombre);
            break;

        case 3:
            let nombrePokemon = prompt("Ingrese el nombre del Pokémon para saber su ataque base a nivel 50:");
            let pokemonElegido = pokedex.find(pokemon => pokemon.nombre === nombrePokemon);
            if (pokemonElegido) {
                alert("El ataque del Pokémon " + nombrePokemon + " es " + pokemonElegido.atk);
            } else {
                alert("No se encontró un Pokémon con ese nombre en la Pokédex.");
            }
            break;

        case 4:
            alert("Gracias por usar la calculadora de daño pokémon, vuelva pronto!");
            break;

        default:
            alert("Opción inválida.");
    }
} else {
    alert("Inténtelo nuevamente en 30 minutos");
}