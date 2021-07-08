<template>
    <div  class="botContainerMessage" v-if="message.userName == 'BotSoldAI' ">
        <div class="botAvatar">Bot</div>
        <p class=" botMessage">{{message.message}}</p>
    </div>
    <div  class="clientContainerMessage" v-else>
        <p  class="clientMessage">{{message.message}}</p>
        <h3>{{userName}}</h3>
        <div class="clientAvatar">C</div>
    </div>
        

</template>

<script>
import { inject } from 'vue'
export default {
    name:'Message',
    props:{
        message:Object
    },
    setup(){
        const userName = inject('UserName')
        return{
            userName
        }
    }
}
</script>

<style scoped>
.clientMessage{
    background-color: #BEE7EF;
    border-radius: 20px;
    padding: 20px;
    margin-right: 10px;
    overflow-wrap: break-word;
    max-width: 80%;
    
}
.botMessage{
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 20px;
    overflow-wrap: break-word;
    margin-left: 10px;
    overflow-wrap: break-word;
    max-width: 80%;
}
.botContainerMessage{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
}
.clientContainerMessage{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:flex-end;


}
.botAvatar{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: teal;
}
.clientAvatar{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: rgb(15, 120, 218);
}
</style>