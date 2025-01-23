<template>
  <div class="w-full flex flex-col gap-7">
    <h2 class="mt-7 text-[32px] font-bold text-text-light dark:text-text-dark">Məhsullar</h2>
    <div :style="{ backgroundImage: `url(${productsbg})` }"
      class="w-full h-[346px] rounded-lg bg-cover bg-center relative flex items-center">
      <button
        class=" absolute left-10 w-10 h-10 flex items-center justify-center bg-[#f4f4f4bb] rounded-full text-[#363636]">
        <BsChevronLeft />
      </button>
      <button
        class=" absolute right-10 w-10 h-10 flex items-center justify-center bg-[#f4f4f4bb] rounded-full text-[#363636]">
        <BsChevronRight />
      </button>
      <div class=" flex flex-col gap-4  ml-36">
        <span class=" text-text-dark"> sentyabr 12-22</span>
        <h2 class=" font-black text-text-dark text-[38px] max-w-[450px]">Bu yay pulsuz çatdırılmadan zövq alın</h2>
        <span class="  text-text-dark">Dizayner Geyimləri - Dəbli Dizayner Paltarlarından seçin</span>
        <button class=" h-11 w-[156px] bg-[#FF8743] text-text-dark border-none rounded-md">Başla</button>
      </div>
    </div>
  </div>
  <div class=" flex items-center gap-4 justify-between flex-wrap mt-4 mb-16 h-[380px] overflow-y-hidden">
    <CardCarusel />
    <CardCarusel />
    <CardCarusel />
    <CardCarusel />
  </div>
</template>

<script setup>
import productsbg from '@/assets/productsbg.svg';
import { BsChevronLeft, BsChevronRight } from '@kalimahapps/vue-icons';
import CardCarusel from './components/CardCarusel.vue';
</script>

<style></style>
