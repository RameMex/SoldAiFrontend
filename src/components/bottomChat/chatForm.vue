<template>
    <div class="containerChatForm">
        <form @submit.prevent="sendMessage">
            <input type='text' class="inpuntBottom" v-model.trim="texto"  placeholder="   Aa">
                <img class="buttonSend" @click.prevent="sendMessage"  src="https://img.icons8.com/ios-glyphs/30/000000/filled-sent.png"/>

        </form>

    </div>
    
  
</template>

<script>
import {ref, inject, watchEffect, onMounted} from 'vue'
import json from '../../pokeApi.json'
export default {

    name: 'ChatForm',
    setup(){
        const dato = json
        const socket = inject('socket')
        const messageList = inject('messagesList')
        const userName = inject('userName')
        const pokemonList = inject('pokemonList')
        const texto = ref('')
        const ctxPokemon = ['Indefinido']
        const ctxTopic = ['Indefinido']
        function sendMessage() {
            clientMessage()
            socket.emit('messageReceived',ctxPokemon,ctxTopic,{
                id:Date.now,
                userName:userName,
                message:texto.value,

            },(ctxPokemonServer,ctxTopicServer,arg)=>{
                ctxPokemon.shift()
                ctxTopic.shift()
                ctxPokemon.push(ctxPokemonServer)
                ctxTopic.push(ctxTopicServer)
                console.log(arg)
                messageList.value.push(arg);
                console.log(messageList.value)
                for (const key in arg.pokemon) {
                    valor(arg.pokemon[key])
                }
                
            })
        }
        function clientMessage(){
            const clientMessage = {
                id:Date.now,
                userName:userName,
                message:texto.value,

            }
            messageList.value.push(clientMessage)
        }
        async function valor(pokemonServer){
            const valoress = pokemonList.value.filter((pokemon) => {return pokemonServer == pokemon.name} )
            if(valoress.length == 0){
                const imgPokemon = await fetchPokemon(pokemonServer)
                console.log(imgPokemon)
                const pokemonImgName = {name:pokemonServer, imgUrl: imgPokemon}
                pokemonList.value.push(pokemonImgName)
            }
        }
        async function fetchPokemon(pokemon){
            const pokeApiJson = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon).then(res => res.json())
            const imgPokemon = pokeApiJson.sprites.other.dream_world.front_default
            return imgPokemon
        }
        function filtro(){
            dato.results.filter((value)=> {return  value.name.toLowerCase().indexOf(texto.value.toLowerCase()) > -1}  )
            dato.results.push({name:'',url:''})
            dato.results.pop()
            console.log('nosseee')
        }


       /* watchEffect(()=>{
            
            console.log(pokeApi.results)
        })*/

        return{
            sendMessage,texto,dato,filtro
        }
    }
}
</script>

<style>
.containerChatForm{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    height: 10vh;
}
.inpuntBottom{
    width: 60%;
    height:35px ;
    border-radius: 30px;
}
.inpuntBottom:focus{
    outline: none;
}
input[type=text]{
    background-color: #f0f2f5;
    border:transparent;
    color: #606770;
}
form {
    display: flex;
    align-items: center;
    width: 66%;
}
.autocomplete-result{
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
}
.buttonSend{
    background-color: #2c9c9c;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-left: 10px;
}

</style>
