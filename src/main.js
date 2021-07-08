import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
import socket from './plugins/index'
const optionsVueIO = {
    debug: true,
    connection: io('https://chatpokeapi.herokuapp.com/')
  }
const app = createApp(App).use(socket).use(new VueSocketIO(optionsVueIO))            

app.mount('#app')
