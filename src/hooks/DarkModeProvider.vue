<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue';

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

onMounted(() => {
  // Cihazın mövcud "prefers-color-scheme" rejimini yoxlayaq
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // İstifadəçi mövzunu saxlayıbsa, onu tətbiq edirik
  if (localStorage.getItem('theme') === 'dark' || matchMedia) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }

  // Cihazda mövzu dəyişəndə avtomatik baş versin
  const themeChangeListener = (e) => {
    if (e.matches) {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Temanın dəyişməsi halında dinləyici əlavə edilir
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener);

  // Temanın ilkin vəziyyəti saxlamaq üçün dinləyici bağlamağı unutmayın
  onBeforeUnmount(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener);
  });
});

provide('isDarkMode', isDarkMode);
provide('toggleDarkMode', toggleDarkMode);
</script>

<template>
  <slot />
</template>
