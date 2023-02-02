import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from './router';
import store from './store';
import './api/mock.js';
import api from './api/api';
const app = createApp(App);
store.commit('addMenu', router);
// console.log(router);
function checkRouter(path) {
  let hasCheck = router
    .getRoutes()
    .filter((route) => route.path == path).length;
  if (hasCheck) {
    return true;
  } else {
    return false;
  }
}
router.beforeEach((to, from, next) => {
  store.commit('getToken');
  const token = store.state.token;
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
  } else if (!checkRouter(to.path)) {
    next({ name: 'home' });
  } else {
    next();
  }
});
app.config.globalProperties.$api = api;
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
