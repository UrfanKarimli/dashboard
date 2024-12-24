<template>
  <div class="flex items-center relative w-[360px]  bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded">
    <button 
      @click="prev" 
      :disabled="isPrevDisabled" 
      class="absolute left-4 z-10 h-10 w-10 shadow flex items-center justify-center hover:bg-[#dddcdcda] bg-[#f4f4f4bb] dark:bg-[#3b465ad7] dark:hover:bg-[#3a4558] text-[#363636] dark:text-text-dark rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
      <BsChevronLeft />
    </button>

    <div class="overflow-hidden flex-grow h-full">
      <div class="flex transition-transform duration-500 ease-in-out" :style="trackStyle">
        <div v-for="(item, index) in products" :key="index" class="flex-none w-full">
          <div>
            <div class="relative mx-auto">
              <img :src="'https://primefaces.org/cdn/primevue/images/product/' + item.image" :alt="item.name" class="w-full rounded" />
              <div :class="['absolute left-1 top-1 px-2 py-1 rounded text-sm text-white', getSeverityClass(item.inventoryStatus)]">
                {{ item.inventoryStatus }}
              </div>
            </div>
            <div class="m-6">
              <div class="mb-4 font-bold text-lg text-text-light dark:text-text-dark">{{ item.name }}</div>
              <div class="flex justify-between items-center">
                <div class="font-semibold text-xl text-[#4880FF]">${{ item.price }}</div>
                <button class="h-11 w-11 flex items-center justify-center border border-border-light dark:border-border-dark rounded-full hover:bg-gray-100 bg-buttonBg-light dark:bg-buttonBg-dark focus:outline-none">
                  <AnOutlinedHeart class="h-5 w-5 text-text-light dark:text-text-dark" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button 
      @click="next" 
      :disabled="isNextDisabled" 
      class="absolute right-4 z-10 h-10 w-10 shadow flex items-center justify-center hover:bg-[#dddcdcda] bg-[#f4f4f4bb] dark:bg-[#3b465ad7] dark:hover:bg-[#3a4558] text-[#363636] dark:text-text-dark rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
      <BsChevronRight />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { AnOutlinedHeart } from '@kalimahapps/vue-icons';
import { ProductService } from '@/service/ProductService';
import { BsChevronLeft, BsChevronRight } from '@kalimahapps/vue-icons';

const products = ref([]);
const currentIndex = ref(0);
const numVisible = 1; 

onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data));
});

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

const next = () => {
  if (currentIndex.value < products.value.length - numVisible) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(() => currentIndex.value === products.value.length - numVisible);

const getSeverityClass = (status) => {
  switch (status) {
    case 'STOKDA':
      return 'bg-green-500';
    case 'AZ QALIB':
      return 'bg-yellow-500';
    case 'BİTİB':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};
</script>
