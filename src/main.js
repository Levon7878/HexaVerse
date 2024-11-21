import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'; // Импортируйте иконки
loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
  export default new Vuetify({
    icons: {
      iconfont: 'mdi', // Укажите использование Material Design Icons
    },
  });