import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Burgers from './components/Menu/Burgers/Burgers.vue'
import Appetizers from './components/Menu/Appetizers/Appetizers.vue'
import Hotdogs from './components/Menu/Hot dogs/Hot dogs.vue'
import Outofstock from './components/Menu/Out of stock/Out of stock.vue'
const router = createRouter({
  routes: [{
    path: '/',
    component: Burgers
  },
  {
    path: '/appetizers',
    component: Appetizers
  },
  {
    path: '/hotdogs',
    component: Hotdogs
  },
  {
    path: '/combo',
    component: Outofstock
  },
  {
    path: '/shawarma',
    component: Outofstock
  },
  {
    path: '/pizza',
    component: Outofstock
  },
  {
    path: '/wok',
    component: Outofstock
  },
  {
    path: '/desserts',
    component: Outofstock
  },
  {
    path: '/sauces',
    component: Outofstock
  },
],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')