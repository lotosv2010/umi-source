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
        { path: '/profile', component: '@/pages/profile/' },
      ],
    },
  ],
  fastRefresh: {},
});
