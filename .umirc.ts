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
  dynamicImport: {},
  // chunks: ['vendors', 'umi'],
  chainWebpack: function (config: any, { webpack }: any) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
            styles: {
              name: 'styles',
              test: /\.(css|less|scss)$/,
              chunks: 'async',
              minChunks: 1,
              minSize: 0,
            },
          },
        },
      },
    });
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
          // component: '@/pages/user/',
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
        { path: '/foo', component: '@/pages/foo/' },
        { path: '/bar', component: '@/pages/bar/' },
        { component: './404' },
      ],
    },
    { component: './404' },
  ],
  sass: {},
  fastRefresh: {},
});
