import { createApp } from 'vue';

import router, { setupRouter } from '/@/router';

import { setupVant } from '/@/setup/vant';

import { setApp } from './useApp';

import App from './App.vue';

const app = createApp(App);

// router
setupRouter(app);

// ui
setupVant(app);

router.isReady().then(() => {
  app.mount('#app');
});

// Used to share app instances in other modules

setApp(app);
