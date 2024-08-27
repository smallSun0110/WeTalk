// main.ts
import 'virtual:uno.css'
import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)


app.use(Antd).mount('#app')
