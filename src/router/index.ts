import { createRouter, createWebHashHistory, Router } from 'vue-router';
import { userStore } from '@/stores/user';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth === false || to.fullPath === '/login') {
    next();
    return;
  }
  console.log(' kkk  token ', userStore().token);
  if (userStore().token) {
    next();
    return;
  } else {
    next('/Login');
    return;
  }
});

export default router;
