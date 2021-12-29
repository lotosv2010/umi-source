# umi-source

[umi 使用](https://umijs.org/zh-CN)

## dev

## build

## routes

## layout

## 使用scss

安装以来

```shell
npm i node-sass sass-loader --save
npm i @umijs/plugin-sass --save
```

修改.umirc.ts

```ts
{
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less|scss)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        }
      },
    });
  },
  sass: { },
}
```
