import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

new Vue({
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app');

createApp(App).mount('#app')
