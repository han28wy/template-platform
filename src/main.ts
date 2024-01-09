import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { setupStore } from '@/stores';
import './styles/index.scss';
import { createAxiosByinterceptors } from '@/https/axios';

const app = createApp(App);
app.use(router);
app.provide('$axios', createAxiosByinterceptors);

dayjs.locale('zh-ch');
setupStore(app);
app.mount('#app');
