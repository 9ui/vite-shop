import type { RouteRecordRaw } from 'vue-router';

import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

// import { scrollWaiter } from '../utils/scrollWaiter';

import { basicRoutes } from './routes/';

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRoutes as RouteRecordRaw[],
  // scrollBehavior: async (to, from, savedPosition) => {
  //   await scrollWaiter.wait();
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     if (to.matched.every((record, i) => from.matched[i] !== record)) {
  //       return { left: 0, top: 0 };
  //     }
  //     return false;
  //   }
  // },
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
