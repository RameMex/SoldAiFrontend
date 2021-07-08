export default{
    install:function(Vue){
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
}