<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/header/MyHeader.vue';
import SideMenu from './components/sidemenu/SideMenu.vue';
</script>

<template>
  <div class="w-full flex ">
    <div class="left">
      <SideMenu />
    </div>
    <div class="righ grow bg-[#f6f6f6] ">
      <MyHeader />
      <main class=" px-10 min-h-[90vh]">
        <RouterView />
      </main>

    </div>
  </div>

</template>

<style scoped></style>
