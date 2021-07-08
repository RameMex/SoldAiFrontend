<template>
    <div class="containerSectionPokemonChat">
        <div class="containerImgPokemon" v-for="(pokemon,index) in pokemonList" :key="index">
            <div @click="takeInfoPokemon(pokemon)">
                <img class="imgPokemon" :src="pokemon.imgUrl" :alt="pokemon">
            </div>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name:'SectionPokemonChat',
    setup(){
        const pokemonList = inject('pokemonList')
        const dtoPokemon = inject('dtoPokemon')
        async function takeInfoPokemon(pokemon){
            console.log(dtoPokemon)
            const fetchPokeApi = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.name).then(res => res.json())
            const pokemonInfo = {
                name:pokemon.name,
                imgUrl:pokemon.imgUrl,
                stats:fetchPokeApi.stats,
                abilities:fetchPokeApi.abilities,
                moves:fetchPokeApi.moves,
                types:fetchPokeApi.types,
                height:fetchPokeApi.height,
                weight:fetchPokeApi.weight
            }
            dtoPokemon.value.shift()
            dtoPokemon.value.push(pokemonInfo)
            console.log(dtoPokemon)
        }
        return {
            pokemonList,
            takeInfoPokemon
        }
    }
}
</script>

<style scoped>
.containerSectionPokemonChat{
    background-color: #19212c;
    overflow-y: auto;
}
.imgPokemon{
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
}
.containerImgPokemon{
    width: 100%;
    height: auto;
    display: flex;            /* new */
    align-items: flex-start;      /* new */
    justify-content: center;  
}
.containerSectionPokemonChat::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
.containerSectionPokemonChat::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.containerSectionPokemonChat::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.containerSectionPokemonChat::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}

/* Cambiamos el fondo cuando esté en active o hover */
.containerSectionPokemonChat::-webkit-scrollbar-track:hover,
.containerSectionPokemonChat::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
.containerSectionPokemonChat::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
}

</style>