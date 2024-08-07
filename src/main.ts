import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Lara from '@/presets/lara';      //import preset  
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Toast from 'primevue/toast'; // Importe o componente Toast

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    darkModeSelector: '.my-app-dark'
});
app.use(ToastService);
app.component('Toast', Toast); // Registre o componente Toast globalmente
app.mount('#app')
