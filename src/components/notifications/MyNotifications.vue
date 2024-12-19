<template>
  <div class="relative">
    <div class="hover:bg-[#f4f4f5]   px-2 py-2 rounded-full flex items-center">
      <span @click="toggleNotifications" class="relative cursor-pointer close-notifications">
        <IoSharpNotifications class="text-[#4880FF] h-6 w-6" />
        <span
          class="h-3 w-3 flex items-center justify-center select-none absolute top-0 right-0 bg-[#CF2121] rounded-full text-[#fff] text-[8px]">
          4
        </span>
      </span>
    </div>
    <div v-if="showNotifications" ref="notificationsRef"
      class="absolute left-1/2 top-[47px] -translate-x-1/2 w-[254px] h-[85px] overflow-y-scroll no-scrollbar p-0 pt-4 rounded-[8px] border border-[#979797] border-opacity-25 dark:border-none shadow-[-4px_4px_10px_#fff,4px_4px_10px_#fff] dark:shadow-[-4px_4px_10px_#000,4px_4px_10px_#000]  bg-white dark:bg-background-dark">
      <div
        class=" border-b border-b-[#979797] border-opacity-25 px-3 font-semibold text-text-light dark:text-text-dark">
        Bildirişlər
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { IoSharpNotifications } from '@kalimahapps/vue-icons';

const showNotifications = ref(false);
const notificationsRef = ref(null);

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};

const handleClickOutside = (event) => {
  if (
    notificationsRef.value &&
    !notificationsRef.value.contains(event.target) &&
    !event.target.closest('.close-notifications')
  ) {
    showNotifications.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
