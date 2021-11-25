import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogoadmin',
    name: 'CatalogoAdmin',
    component: ()=> import('../views/CatalogoAdmin.vue')
  },
  {
    path: '/catalogopublic',
    name: 'CatalogoPublic',
    component: ()=> import('../views/CatalogoPublic.vue')
  },
  {
    path: '/autenticacion',
    name: 'Autenticacion',
    component: ()=> import('../views/Autenticacion.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
