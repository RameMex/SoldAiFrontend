<template>
    <div class="container">
        <chat-header class="header"></chat-header>
        <section-pokemon-chat class="sectionPokemon"></section-pokemon-chat>
        <chat-messages class="messages"></chat-messages>
        <chat-form class="form"></chat-form>
        <pokemon-info class="pokemonInfo">
        </pokemon-info>
        <answers-bot></answers-bot>

    </div>
  
</template>

<script>
import ChatForm from './bottomChat/chatForm.vue';
import ChatMessages from './chatMessages/chatMessages.vue';
import ChatHeader from './chatHeader/chatHeader.vue';
import SectionPokemonChat from './sectionPokemonChat/sectionPokemonChat.vue';
import PokemonInfo from './pokemonInfo/pokemonInfo.vue';

import { onMounted, provide,ref } from 'vue';
export default {
    name:'ChatApp',
    components:{
        ChatForm,
        ChatMessages,
        ChatHeader,
        SectionPokemonChat,
        PokemonInfo,
    },
    setup(){
        const messagesList = ref([]);
        const userName = ref('UserName');
        const dtoPokemon =ref([{imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}])
        const pokemonList = ref([]);
        provide('messagesList', messagesList);
        provide('userName',userName);
        provide('pokemonList',pokemonList);
        provide('dtoPokemon',dtoPokemon);
    }
}
</script>

<style>

.container{
    background-color: #19212c;
    height: 100vh;
    margin: 0px;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2/20fr 1/20fr 15/20fr 2/20fr ;
    grid-template-areas:
        'header'
        'sectionPokemon'
        'messages'
        'form';
}
.pokemonInfo{
    grid-area: pokemonInfo;
}
.sectionPokemon{
    grid-area: sectionPokemon;
    height: 5vh;
}
.header{
    grid-area: header;
}
.messages{
    grid-area: messages;
}
.form{
    grid-area: form;
}
@media (min-width: 500px) {
    .container{
        grid-template-columns: 1fr 10fr 3fr ;
        grid-template-areas: 
        'sectionPokemon header pokemonInfo '
        'sectionPokemon messages pokemonInfo'
        'sectionPokemon form pokemonInfo'
        ;
    }

    .sectionPokemon{
    grid-area: sectionPokemon;
    height: 100vh;
}
}
</style>