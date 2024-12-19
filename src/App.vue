<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/header/MyHeader.vue';
import SideMenu from './components/sidemenu/SideMenu.vue';
import DarkModeProvider from './hooks/DarkModeProvider.vue';
</script>

<template>
  <DarkModeProvider>
    <div class="w-full flex ">
    <div class="left">
      <SideMenu />
    </div>
    <div class="righ grow bg-primary-light dark:bg-primary-dark ">
      <MyHeader />
      <main class=" px-10 min-h-[90vh]">
        <RouterView />
      </main>

    </div>
  </div>
  </DarkModeProvider>


</template>

<style scoped></style>
