import { createApp } from 'vue';

import './assets/style/main.scss';
import "aos/dist/aos.css";
import 'vue-double-range-input/dist/style.css';

import { createPinia, Pinia } from "pinia";
import i18n from "./i18n.ts";

import AOS from "aos";
import App from './App.vue';
import router from "./router/router.ts";
const pinia: Pinia = createPinia();

const app = createApp(App);
AOS.init({
    duration: 600,
    easing: "ease-in-out",
});

app.use(router).use(pinia).use(i18n);

app.mount('#app');