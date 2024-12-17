<template>
  <header class=" h-[70px] w-full bg-[#fff] flex items-center justify-between px-10">
    <div class=" flex items-center h-10 w-[400px] border border-[#D5D5D5]  bg-[#F5F6FA] rounded-full pl-3" onfocus="">
      <AnOutlinedSearch class=" h-5 w-5 text-[#202224] text-opacity-50" />
      <InputText class=" grow bg-transparent focus:ring-0  focus:outline-none px-4 placeholder:text-[#2022247a] "
        type="text" v-model="value" placeholder="Axtar" />
    </div>
    <div class=" flex items-center gap-5 ">
      <MyNotifications />
      <MyProfil/>
    </div>


  </header>
</template>

<script setup>
import MyNotifications from '../notifications/MyNotifications.vue';
import { AnOutlinedSearch } from '@kalimahapps/vue-icons';
import { InputText } from 'primevue';
import { ref } from 'vue';
import MyProfil from '../profile/MyProfil.vue';

const value = ref(null);

</script>
<style scoped></style>
