<template>
    <div class="containerChatMessages">
        <div v-for="(message,index) in messagesList" :key="index">
            <message v-bind:message="message"></message>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
import Message from './message.vue'
export default {
    name:'ChatMessages',
    components:{
        Message
    },
    setup(){
        const messagesList = inject('messagesList')
        return{
            messagesList
        }
    }

}
</script>

<style>
.containerChatMessages{
    
    overflow-y:auto;
    height: 75vh;
    background-color: #f0f2f5;
}
.containerChatMessages::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
.containerChatMessages::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.containerChatMessages::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.containerChatMessages::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}

/* Cambiamos el fondo cuando esté en active o hover */
.containerChatMessages::-webkit-scrollbar-track:hover,
.containerChatMessages::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
.containerChatMessages::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
}
@media  (min-width: 500px) {
    .containerChatMessages{
        height: 80vh;
    }

}
</style>