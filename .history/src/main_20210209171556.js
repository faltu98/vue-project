import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'

const app = createApp(App);
app.use(router);
app.use(Vuex.);
app.mount('#app');
