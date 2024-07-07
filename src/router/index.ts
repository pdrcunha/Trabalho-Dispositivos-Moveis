import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import ClientesView from '../views/Clientes/ClientesView.vue';
import CaixaView from '../views/Caixa/CaixaView.vue';
import ProfileView from '../views/Profile/ProfileView.vue';
import NotFoundView from '../views/404/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/:pathMatch(.*)*', // Captura todas as rotas não definidas
      name: '404',
      component: NotFoundView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: ProfileView,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView,
    },
    {
      path: '/caixa',
      name: 'caixa',
      component: CaixaView,
    }
  ]
})

export default router
