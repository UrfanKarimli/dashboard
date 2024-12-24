# Vue 3, Vite, Tailwind CSS, və PrimeVue ilə Dashboard Proyekti

Bu layihə Vue.js-də bacarıqlarımı inkişaf etdirmək üçün bir Dashboard tətbiqi yaratmaq məqsədini daşıyır. Burada Vite, Tailwind CSS, və PrimeVue kimi müasir texnologiyalar istifadə olunub.

---

## Layihə Quraşdırılması

### 1. Layihə Fayllarını Klonlayın

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Lazım Olan Asılılıqları Yükləyin

```bash
npm install
```

> **Qeyd:** Əgər `pnpm` istifadə edirsinizsə, müvafiq olaraq `pnpm install` əmri ilə əvəz edin.

### 3. Layihəni İşə Salın

```bash
npm run dev
```

Serverin işlədiyi URL avtomatik olaraq terminalda göstəriləcəkdir (adətən `http://localhost:5173`).

---

## Layihəni Hazır Məhsula Çevirmək

```bash
npm run build
```

Bu əmrdən sonra `dist` qovluğunda istehsalata uyğun fayllar yaranacaq.

---

## Koda Nəzarət (Linting)

Kodunuzu yoxlamaq və standartlara uyğunlaşdırmaq üçün aşağıdakı əmrdən istifadə edin:

```bash
npm run lint
```

---

## Texnologiyalar və İstifadə Edilənlər

- **Vue 3**: Vue.js-nin son versiyası.
- **Vite**: Sürətli və modern layihə yaratma aləti.
- **Tailwind CSS**: UI tərtibatını sadələşdirmək üçün bir utility-first CSS framework.
- **PrimeVue**: Vue üçün hazır komponentlər kitabxanası.
-**ApexCharts**: Məlumatları vizuallaşdırmaq üçün Chart kitabxanası.
---

## Layihə Strukturu

```plaintext
src/
  assets/        # Şəkillər və digər statik fayllar
  components/    # Yenidən istifadə olunan Vue komponentləri
  views/         # Dashboard səhifələri
  router/        # Marşrutlama (Vue Router ilə)
  service/ 
        store/   # State idarəetməsi 
  App.vue        # Əsas Vue faylı
  main.js        # Layihənin giriş nöqtəsi
```

---

## Tailwind CSS-in Konfiqurasiyası

Tailwind CSS konfiqurasiya faylı `tailwind.config.js` faylında yerləşir:

```javascript
/** @type {import('tailwindcss').Config} */
export default{
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## PrimeVue ilə İş

PrimeVue istifadə etmək üçün əvvəlcə `main.js` faylında konfiqurasiya etməlisiniz:

```javascript
import '@/assets/index.css'                 // Əsas CSS
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'               // router
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';   // Tema
import VueApexCharts from "vue3-apexcharts";// Cartlar
const app = createApp(App)
app.use(PrimeVue,{ unstyled: true }, {
  theme: {
      preset: Aura
  }
});
app.use(router)
app.use(VueApexCharts);
app.mount('#app')

```

### PrimeVue Komponentlərindən Nümunə

```vue
<template>
  <div>
    <Button label="Əlavə et" icon="pi pi-check" />
  </div>
</template>

<script setup>
import { Button } from 'primevue';

</script>
```


## Sual və Cavablar

Əgər hər hansı problem yaşayırsınızsa, [Issues](<repository_url>/issues) bölməsinə daxil olun və problemi bildirin.

---

## Layihə Məqsədi

Bu layihənin əsas məqsədi Vue.js texnologiyaları ilə praktik təcrübə qazanmaq və müasir frontend alətləri ilə tanış olmaqdır.

