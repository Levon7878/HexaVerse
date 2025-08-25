
// import { createApp } from 'vue';
// import App from './App.vue';



// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import router  from './router';


// const vuetify = createVuetify({
//   components,
//   directives,
// })
// App.use(router)
// createApp(App).use(vuetify).mount('#app')









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
import { Vue3Calendly } from 'vue3-calendly';







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










