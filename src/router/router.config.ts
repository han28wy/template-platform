import BlankLayout from '../layouts/BlankLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    name: 'login',
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/app',
    meta: {
      title: 'Root',
    },
  },
];

export const publicRoutes = [
  {
    path: '/redirect',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/redirect/index'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('../views/404.vue'),
  },
];

export default constantRoutes;
