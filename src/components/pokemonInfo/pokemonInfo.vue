<template>
    <div class="containerPokemonInfo">
        <img class="imgPokeInfo" :src="dtoPokemon[0].imgUrl">
        <h3>        Tamaño {{dtoPokemon[0].height}} - Peso {{dtoPokemon[0].weight}}</h3>
        <h1>Estadisticas</h1>
        <div v-for="(stat,index) in dtoPokemon[0].stats" :key="index">
            <h3>{{stat.stat.name}} - {{stat.base_stat}} </h3> 
        </div>
        <h1>Habilidades</h1>
        <div v-for="(ability,index) in dtoPokemon[0].abilities" :key="index">
            <h3>{{ability.ability.name}}</h3>
        </div>
        <h1>Movimientos</h1>
        <div v-for="(move,index) in dtoPokemon[0].moves" :key="index">
            <h3>{{move.move.name}}</h3>
        </div>
        <h1 >Tipo</h1>
        <div v-for="(type,index) in dtoPokemon[0].types" :key="index">

            <h3>{{type.type.name}}</h3>
        </div>
    </div>
</template>

<script>
import {inject, watchEffect,watch} from 'vue'
export default {
    name:'PokemonInfo',
    setup(){
        const dtoPokemon = inject('dtoPokemon')
        /*const pokemonInfo = {
                name:pokemon.name,
                imgUrl:pokemon.imgUrl,
                stats:fetchPokeApi.stats,
                abilities:fetchPokeApi.abilities,
                moves:fetchPokeApi.moves,
                types:fetchPokeApi.types,
                height:fetchPokeApi.height,
                weight:fetchPokeApi.weight
            }*/
        return {
            dtoPokemon
        }
    }
}
</script>

<style>
.containerPokemonInfo{
    height: 100vh;
    background-color: #19212c;
    overflow-y:auto;
}
.containerPokemonInfo::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
.containerPokemonInfo::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.containerPokemonInfo::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.containerPokemonInfo::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}

/* Cambiamos el fondo cuando esté en active o hover */
.containerPokemonInfo::-webkit-scrollbar-track:hover,
.containerPokemonInfo::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
.containerPokemonInfo::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
}
h3 {
    color: white;
}
.imgPokeInfo{
    width: 80%;
}
</style>