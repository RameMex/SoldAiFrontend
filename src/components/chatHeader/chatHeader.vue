<template>
    <div class="containerHeader">  
        <input class="inputUsername" type="text" v-model.trim="userName" placeholder="Nombre">        
    </div>
  
</template>

<script>
import {inject,ref} from 'vue'
export default {
    name:'ChatHeader',
    setup(){
        const userName = inject('userName')

        return{
            userName
        }
    }
}
</script>

<style>
.containerHeader{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    height: 10vh;
    margin: 0px;
    padding: 0px;
    border-top-left-radius: 15px;
}
.inputUsername{
    height: 30px;
    font-size: 16px;
    border-radius:5px;
    grid-area: inputUserName;
    padding-right:5px;
}
input[type="text" i] {
    padding-left: 15px;
}
</style>