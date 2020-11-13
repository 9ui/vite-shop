# Vite Shop 商城

## 新建项目

```bash

安装 node.js 并配置好环境变量，使用 node -v 检查当前 node 版本 并验证是否安装完成!
全局安装 yarn npm install -g yarn 查看版本：yarn --version Yarn 淘宝源安装
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

新建项目 yarn create vite-app '项目名'

```

## 安装依赖

```bash
.配置 `typescrip `
yarn add -D typescript ts-node @typescript-eslint/eslint-plugin @typescript-eslint/parser

新建 tsconfig.json 文件

配置 `eslint` `prettier`

yarn add -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser

新建 .eslintrc.js .eslintignore 文件

配置 `stylelint` `prettier`

yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order

新建 stylelint.config.js .stylelintignore 文件

配置提交规范 `commitlint` `changelog`

yarn add -D @commitlint/cli @commitlint/config-conventional commitizen conventional-changelog-cli conventional-changelog-custom-config

新建 commitlint.config.js 文件

引入钩子 `husky` `lint-staged`

yarn add -D husky lint-staged


配置适配 引入`postcss`

# yarn add -D postcss-px-to-viewport postcss-loader

# yarn add -D lib-flexible postcss-pxtorem

使用适配方案一(postcss.config)
-----------------------------------------

const path = require("path");
const autoprefixer = require("autoprefixer");
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
    ? 375
    : 750;
  return {
    plugins: {
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  };
};

-----------------------------------------


使用适配方案二(postcss.config)
----------------------------------

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
};

-----------------------------------------

校验文件命令规范 (.ls-lint.yml)

npm install -g @ls-lint/ls-lint # global

npm install @ls-lint/ls-lint # local

文档地址:（https://ls-lint.org/1.x/getting-started/installation.html）

----------------------
ls:
  src/*:
    .js: kebab-case | PascalCase
    .vue: PascalCase | regex:^index
    .ts: camelCase | PascalCase
    .d.ts: kebab-case
    .mock.ts: kebab-case
    .data.ts: camelCase | kebab-case
    .test-d.ts: kebab-case
    .less: kebab-case | PascalCase
    .spec.ts: camelCase | PascalCase

ignore:
  - node_modules
  - .git
  - .circleci
  - .github
  - .vscode
  - dist
  - .local
--------------------

```

## 进阶配置

```bash
原项目调整

修改 main.js ===>main.ts

新建 src/types 目录进入目录 新建 vue-app-env.d.ts

在 tsconfig.json 中配置 添加如下配置

"include": [ "src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue" ]

【注意事项】 修改根目录下 index.html 的引入 main.js--->main.ts

高阶配置

引入 dotenv 读取环境变量配置

yarn add -D dotenv

引入路由 vue-router

yarn add vue-router@4

```

### 其他参考资料

[vue+ESLint 配置保存 自动格式化代码](https://www.jb51.net/article/182913.htm)

[vscode vue 自动格式化代码](https://www.cnblogs.com/adjk/p/11428669.html)

[VS Code Prettier + ESlint 格式化 Vue 代码及遇到问题](https://zhuanlan.zhihu.com/p/64627216?from_voters_page=true)

[TS 中使用 alipay](https://github.com/nealyip/alipayjsbridge-type/blob/master/index.d.ts)

### 图标

- [Ant Design Vue Icon Component](https://2x.antdv.com/components/icon-cn/) - 按需引入所需图标.
- [Iconify](https://iconify.design) - 使用任何图标集中的图标 [Icônes](https://icones.netlify.app/)
- [PurgeIcons](https://github.com/antfu/purge-icons) - 仅打包所使用到的图标.

### 插件

- [Vue Router Next](https://github.com/vuejs/vue-router-next)
- [Vuex Next](https://github.com/vuejs/vuex)
- [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) - vuex 模块化
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - 基于 vite 的 mock 插件.
- [vue-i18n](https://github.com/intlify/vue-i18n-next) - 国际化
- [lodash-es](https://github.com/lodash/lodash) - JavaScript 实用程序库
- [axios](https://github.com/axios/axios) - Http 数据交互
- [TypeScript](https://www.typescriptlang.org/)

### 建议开发环境

- `Git`: - 版本管理工具
- `Visual Studio Code` - (VSCode): 最新版本
  - [VS Code Extensions](./.vscode/extensions.json)
    - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind Css 样式联想
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
    - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

## 使用

### 开发环境

```bash
yarn serve
```

### 打包

```bash

yarn build # 打包

yarn build:no-cache # 打包，执行之前会先删除缓存

yarn report # 生成构建包报表预览
```

### 格式化

```bash
yarn lint:stylelint # 样式格式化

yarn lint:prettier # js/ts代码格式化

```

### 其他

```bash
yarn reinstall # 删除依赖重新装，兼容window

yarn preview # 本地进行打包预览

yarn log # 生成CHANGELOG

yarn clean:cache # 删除缓存

yarn clean:lib # 删除node_modules，兼容window系统
```

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

```bash
  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

```
