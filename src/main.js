import '@/assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)
app.use(PrimeVue,{ unstyled: true }, {
  theme: {
      preset: Aura
  }
});
app.use(router)

app.mount('#app')
