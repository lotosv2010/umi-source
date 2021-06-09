import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
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
        { path: '/profile', component: '@/pages/profile/' },
      ],
    },
  ],
  fastRefresh: {},
});
