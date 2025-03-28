import DomusPagina from '@/modulorum/landing/paginae/DomusPagina.vue';
//import PeculiaritatesPagina from '@/modulorum/landing/paginae/PeculiaritatesPagina.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modulorum/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: DomusPagina,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modulorum/landing/paginae/PeculiaritatesPagina.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modulorum/landing/paginae/PretiumPagina.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modulorum/landing/paginae/ContactusPagina.vue'),
        },
      ],
    },

    {
      path: '/auth',
      //name: 'contact',
      redirect: { name: 'login' },
      component: () => import('@/modulorum/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modulorum/auth/paginae/LoginPagina.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modulorum/auth/paginae/RegisterPagina.vue'),
        },
      ],
    },
  ],
});

export default router;
