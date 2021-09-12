import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import './scss/main.scss';

const appInstance = createApp(App);

appInstance.use(store);
appInstance.mount('#app');
