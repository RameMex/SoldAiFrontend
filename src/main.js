import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
function install(Vue){
  var version = Number(Vue.version.split(".")[0]);
  //if vue 3
  if (version === 3) {
    Vue.config.globalProperties.$socket = this.io;
    Vue.config.globalProperties.$vueSocketIo = this;
    Vue.mixin(Mixin);
    Logger.info("Vue-Socket.io plugin enabled");
  } else {
    Vue.prototype.$socket = this.io;
    Vue.prototype.$vueSocketIo = this;
    Vue.mixin(Mixin);
    Logger.info("Vue-Socket.io plugin enabled");
  }
}
install(createApp)
const optionsVueIO = {
    debug: true,
    connection: io('https://chatpokeapi.herokuapp.com/')
  }
  
const app = createApp(App).use(new VueSocketIO(optionsVueIO))            

app.mount('#app')
