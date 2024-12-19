<template>
  <div class=" flex items-center gap-3 relative ">
    <div>
      <img :src="profilurfan" alt="profil resmi" class="h-9 w-9 rounded-full object-center object-cover">
    </div>
    <div class=" flex flex-col items-center">
      <span class="text-sm font-bold text-[#404040] dark:text-text-dark truncate">
        Ürfan Kərimli
      </span>
      <span class=" text-xs font-semibold text-[#565656] dark:text-text-dark  "> Admin</span>
    </div>
    <div @click="toggleProfile"
      class=" closeprofile border border-[#5C5C5C] dark:border-[#cccccc] rounded-full h-5 w-5 flex items-center justify-center cursor-pointer">
      <AkChevronDownSmall class=" text-[#565656] dark:text-text-dark h-3 w-3" />
    </div>
    <div v-if="showProfile" ref="profileRef"
      class="absolute -right-5 top-[53px]  w-[200px] h-[85px] overflow-y-scroll no-scrollbar p-0 pt-4 rounded-[8px] border border-[#979797] border-opacity-25 dark:border-none shadow-[-4px_4px_10px_#fff,4px_4px_10px_#fff] dark:shadow-[-4px_4px_10px_#000,4px_4px_10px_#000] bg-white dark:bg-background-dark">
      <ul>
        <li>
          <RouterLink  to="/">
            <div class="flex items-center gap-2 pl-5 "
              >
              <div>
                <MdManageAccounts class=" h-5 w-5 text-[#4E96FF] " />
              </div>
              <span class=" text-sm text-[#404040] dark:text-text-dark font-semibold ">Hesabı idarə et</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import profilurfan from '@/assets/profilurfan.jpg'
import { AkChevronDownSmall, MdManageAccounts } from '@kalimahapps/vue-icons';
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
const showProfile = ref(false);
const profileRef = ref(null);


const toggleProfile = () => {
  showProfile.value = !showProfile.value;
};

const handleClickOutside = (event) => {
  if (
    profileRef.value &&
    !profileRef.value.contains(event.target) &&
    !event.target.closest('.closeprofile')
  ) {
    showProfile.value = false;
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
