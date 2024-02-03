import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoneyBill, faCreditCard, faArrowRotateLeft, faPen, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faMoneyBill, faCreditCard, faArrowRotateLeft, faPen, faDeleteLeft);

const app = createApp(App);
const pinia = createPinia();

app.component('fai', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
