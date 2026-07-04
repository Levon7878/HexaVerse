import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router';
import { language } from './Language';
import { defaultLocale } from './Language';
import { createI18n, useI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import 'animate.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import { Vue3Calendly } from 'vue3-calendly';

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.remove('dark', 'light');
document.documentElement.classList.add(savedTheme);




const messages = Object.assign(language)
const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: defaultLocale,
  messages
})

const pinia = createPinia(); 


const vuetify = createVuetify({
  components,
  directives,
});


const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

app.use(Vue3Calendly)
app.use(pinia);
app.use(i18n);
app.use(router);
app.use(vuetify);
app.mount('#app');










