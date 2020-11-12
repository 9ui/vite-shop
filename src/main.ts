import { createApp } from 'vue';

import router, { setupRouter } from '/@/router';

import App from './App.vue';

import 'vant/lib/index.css';

// import { vantComponents } from './plugins/vant';

const app = createApp(App);

setupRouter(app);

// app.use(vantComponents);

router.isReady().then(() => {
  app.mount('#app');
});

// createApp(App).use(vantComponents).mount('#app');
