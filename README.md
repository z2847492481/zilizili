# zilizili

仿bilibili项目

# Sass安装

```sh
npm install -D sass
```

接下来在`vite.config.ts`中添加css配置（跟plugins同级）

```ts
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/scss/_variables.scss" as _vars;
        @use "@/scss/_mixins.scss" as _mix;
        `,
      },
    },
  },
```

# 问题记录

## 1、Dart Sass 团队正式宣布从 1.80.0 版本开始弃用 @import，并计划在 Dart Sass 3.0.0 中完全移除该语法。

新版本的sass使用中不要再使用@import
