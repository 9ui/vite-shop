import type { UserConfig } from 'vite';

import { resolve } from 'path';

import { isDevFn, loadEnv } from './build/utils';

const viteEnv = loadEnv();

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;

const pkg = require('./package.json');

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const viteConfig: UserConfig = {
  /**
   * port
   * @default '3000'
   */
  port: VITE_PORT,
  /**
   * @default 'localhost'
   */
  hostname: 'localhost',
  /**
   * 运行时是否自动打开浏览器
   * @default 'false'
   */
  open: true,

  /**
   * Set to `false` to disable minification, or specify the minifier to use.
   * Available options are 'terser' or 'esbuild'.
   * @default 'terser'
   */
  minify: isDevFn() ? 'esbuild' : 'terser',
  /**
   * 正式环境运行时的根路径
   * @default '/'
   */
  base: VITE_PUBLIC_PATH,
  /**
   * 项目打包时的输出路径
   * @default 'dist'
   */
  outDir: 'dist',
  /**
   * 静态资源存放路劲
   * @default '_assets'
   */
  assetsDir: '_assets',
  /**
   * 静态资源大大小限制
   * @default 4096
   */
  assetsInlineLimit: 4096,
  /**
   * Transpile target for esbuild.
   * @default 'es2020'
   */
  esbuildTarget: 'es2020',
  /**
   * Whether to log asset info to console
   * @default false
   */
  silent: false,
  /**
   * 配置别名
   */
  alias: {
    '/@/': pathResolve('src'),
  },
  terserOptions: {
    compress: {
      drop_console: VITE_DROP_CONSOLE,
    },
  },
  define: {
    __VERSION__: pkg.version,
  },
  optimizeDeps: {
    include: ['vant'],
  },
};

export default {
  ...viteConfig,
};
