

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


createApp(App).use(router).mount('#app');


// import VueRouter from 'vue-router';
// import Home from './views/Home.vue';

// createApp.config.productionTip = false;

// createApp.use(VueRouter);

// const routes = [
//     { path: '/', component: App },
//     { path: '/login', component: Home },
//   ];
  
//   const router = new VueRouter({
//     routes,
//     mode: 'history', // Use history mode for clean URLs (requires server configuration)
//   });


// createApp(App).mount('#app')
