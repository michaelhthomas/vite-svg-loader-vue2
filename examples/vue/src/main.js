import Vue from 'vue'
import App from 'App.vue' // note: this is dynamically resolved in vite.config.js

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')
