import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { setupStore } from '@/stores';
import './styles/index.scss';

const app = createApp(App);
app.use(router);

dayjs.locale('zh-ch');
setupStore(app);
app.mount('#app');
