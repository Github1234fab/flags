import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/Home.vue'
import Game from '../views/Game.vue'
import Europe from '../components/Europe.vue'
import Afrique from '../components/Afrique.vue'
import Asie from '../components/Asie.vue'
import Amerique from '../components/Amerique.vue'
import Oceanie from '../components/Oceanie.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MyHome
    },
    {
      path: '/game',
      component: Game
    },
    {
      path: '/europe',
      component: Europe,
      name: 'Europe'
    },
    {
      path: '/afrique',
      component: Afrique,
      name: 'Afrique'
    },
    {
      path: '/amerique',
      component: Amerique,
      name: 'Amerique'
    },
    {
      path: '/asie',
      component: Asie,
      name: 'Asie'
    },
    {
      path: '/oceanie',
      component: Oceanie,
      name: 'Oceanie'
    }
  ]
})

export default router
