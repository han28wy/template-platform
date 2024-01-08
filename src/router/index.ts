import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
