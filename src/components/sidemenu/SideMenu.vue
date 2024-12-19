<template>
  <div
    class=" flex flex-col  gap-8 justify-start border-r overflow-hidden px-2 pt-4 h-full transition-all duration-300 ease-in-out bg-[#fff]"
    :style="{ width: menuWidth }">

    <button @click="toggleMenu" class="flex h-7 items-center justify-end bg-transparent">
      <AkSidebarLeft class=" h-5 w-5 text-[#8b8b8b]" />
    </button>
    <div class=" flex flex-col gap-3">
      <RouterLink v-slot="{ isActive }" to="/">
        <div class="flex items-center gap-2 text-[#8b8b8b] rounded-lg h-8 w-full pl-2  truncate " :class="{ active: isActive }">
          <div>
            <AnOutlinedDashboard class=" h-5 w-5"/>
          </div>
          <span class=" transition-opacity duration-300 ease-in-out" :style="{ opacity: titleOpasity }" >İdarə paneli</span>
        </div>
      </RouterLink>
      <RouterLink v-slot="{ isActive }" to="/products">
        <div class="flex items-center gap-2 text-[#8b8b8b] rounded-lg h-8 w-full pl-2  " :class="{ active: isActive }">
          <div>
            <AnOutlinedProduct class=" h-5 w-5"/>
          </div>
          <span class=" transition-opacity duration-300 ease-in-out" :style="{ opacity: titleOpasity }" >Məhsullar</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { AkSidebarLeft, AnOutlinedDashboard, AnOutlinedProduct } from '@kalimahapps/vue-icons';
import { ref, computed } from "vue";

const isExpanded = ref(false);

const menuWidth = computed(() => (isExpanded.value ? '240px' : '55px'));
const titleOpasity = computed(() => (isExpanded.value ? '100' : '0'));


const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.active {
  color: #fff;
  background-color: #4880FF;
}
</style>
