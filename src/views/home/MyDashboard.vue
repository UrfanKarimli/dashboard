<script setup>
import { cards } from "./mockDatas/cards"
import SalesDetailChart from '@/views/home/components/SalesDetailChart.vue'
</script>

<template>
  <div class="w-full flex flex-col gap-7">
    <h2 class="mt-7 text-[32px] font-bold text-text-light dark:text-text-dark">İdarəetmə Paneli</h2>
    <div class="flex items-center justify-between">
      <div v-for="(card, index) in cards" :key="index"
        class="card flex flex-col justify-between bg-background-light dark:bg-background-dark min-w-[230px] w-[24%] h-[170px] p-4 rounded-xl">
        <div class="flex justify-between">
          <div class="flex flex-col justify-between">
            <span
              class="text-base font-semibold text-text-light text-opacity-75 dark:text-text-dark dark:text-opacity-75">
              {{ card.title }}
            </span>
            <span class="font-bold text-[28px] text-text-light  dark:text-text-dark">
              {{ card.value }}
            </span>
          </div>
          <div :class="`w-[60px] h-[60px] rounded-3xl flex items-center justify-center ${card.bgClass}`">
            <component :is="card.icon" class="h-7 w-8" :class="card.iconColor" />
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center gap-1 truncate">
            <div :class="`flex items-center gap-2 ${card.trendColor}`">
              <component :is="card.trendIcon" class="h-5 w-5" />
              <span>{{ card.trend }}</span>
            </div>
            <span class=" text-[#606060] dark:text-text-dark">{{ card.trendText }}</span>
          </div>
        </div>
      </div>
    </div>
    <SalesDetailChart/>
  </div>
</template>
