import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import ArtistasView from '../views/ArtistasView.vue'
import ContatosView from '../views/ContatosView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView
    },
    {
      path: '/artistas',
      name: 'artistas',
      component: ArtistasView
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: ContatosView
    },
    { path: '/:pathMatch(.*)*', 
      name: 'not-found',
      component: NotFoundView,
      meta:{ 
        routeNotFound: true
      }
    }
  ]
})

export default router
