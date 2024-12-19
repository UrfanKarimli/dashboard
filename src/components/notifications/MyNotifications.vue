<template>
  <div class="relative">
    <span
      @click="toggleNotifications"
      class="relative cursor-pointer close-notifications">
      <IoSharpNotifications class="text-[#838FA4] h-6 w-6" />
      <span
        class="h-3 w-3 flex items-center justify-center select-none absolute top-0 right-0 bg-[#CF2121] rounded-full text-[#fff] text-[8px]">
        4
      </span>
    </span>
    <div
      v-if="showNotifications"
      ref="notificationsRef"
      class="absolute left-1/2 top-[47px] -translate-x-1/2 w-[254px] h-[85px] overflow-y-scroll no-scrollbar p-0 pt-4 rounded-[8px] border border-[#B1BDCF] shadow-[-4px_4px_10px_#fff,4px_4px_10px_#fff] table-btns bg-white">
      <div class=" border-b px-3 font-semibold text-[#404040]">
        Bildirişlər
      </div  >
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
