<template>
  <header class=" h-[70px] w-full bg-background-light dark:bg-background-dark flex items-center justify-between px-10">
    <div
      class=" flex items-center h-10 w-[400px] border border-[#D5D5D5] dark:border-[#cfcfcf] dark:border-opacity-15  bg-[#F5F6FA] dark:bg-[#323D4E] rounded-full pl-3"
      onfocus="">
      <AnOutlinedSearch class=" h-5 w-5 text-text-light text-opacity-50 dark:text-text-dark dark:text-opacity-80" />
      <InputText
        class=" grow bg-transparent focus:ring-0  focus:outline-none px-4 placeholder:text-text-light placeholder:text-opacity-50 placeholder:dark:text-opacity-80 placeholder:dark:text-text-dark "
        type="text" v-model="value" placeholder="Axtar" />
    </div>

    <div class=" flex items-center gap-5 ">
      <div>
        <button @click="toggleDarkMode" class=" group hover:bg-[#f4f4f5]   px-2 py-2 rounded-full flex items-center gap-2">
          <span v-if="isDarkMode">
            <AkSun  class="h-6 w-6 text-text-dark group-hover:text-[#18181b]" />
          </span>
          <span v-else>
            <ClMoon class="h-6 w-6 text-[#18181b]"/>
          </span>
        </button>
      </div>
      <MyNotifications />
      <MyProfil />
    </div>


  </header>
</template>

<script setup>
import MyNotifications from '../notifications/MyNotifications.vue';
import { AnOutlinedSearch, AkSun, ClMoon } from '@kalimahapps/vue-icons';
import { InputText } from 'primevue';
import { ref } from 'vue';
import MyProfil from '../profile/MyProfil.vue';
import { inject } from 'vue';

const isDarkMode = inject('isDarkMode');
const toggleDarkMode = inject('toggleDarkMode');
const value = ref(null);

</script>
<style scoped></style>
