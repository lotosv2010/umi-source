import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'browser',
  },
  routes: [
    { path: '/login', component: '@/pages/login/' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/' },
        {
          path: '/user',
          component: '@/pages/user/',
          routes: [
            { path: '/user', component: '@/pages/user/list/' },
            { path: '/user/add', component: '@/pages/user/add/' },
            { path: '/user/detail/:id', component: '@/pages/user/detail/' },
          ],
        },
        {
          path: '/profile',
          component: '@/pages/profile/',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
  ],
  fastRefresh: {},
});
