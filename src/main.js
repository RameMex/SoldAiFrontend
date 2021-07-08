import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
const optionsVueIO = {
    debug: true,
    connection: io(process.env.VUE_APP_URL || 'http://localhost:3001')
  }
  
const app = createApp(App).use(new VueSocketIO(optionsVueIO))            

app.mount('#app')
