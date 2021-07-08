<template>
    <div>
      <chat-app></chat-app>
    </div>
</template>

<script>
import { inject } from 'vue';
import InputText from './components/bottomChat/chatForm.vue';
import ChatApp from './components/chatApp.vue';

export default{
  components: {
    InputText,
    ChatApp
  },
  setup(){

  },
  methods: {
    
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}
body{
  margin: 0px;
}
</style>
