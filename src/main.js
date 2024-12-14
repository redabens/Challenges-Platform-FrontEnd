// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // import the router
import 'font-awesome/css/font-awesome.css';


createApp(App)
  .use(router)  // use the router in your app
  .mount('#app');
