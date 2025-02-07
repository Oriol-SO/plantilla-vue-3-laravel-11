import './bootstrap';
import { createApp } from 'vue';

import App from './components/App.vue';
import vuetify from './plugins/vuetify';

import router from './router';
import pinia from './store';
import './plugins/axios'
const app=createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount("#app")

