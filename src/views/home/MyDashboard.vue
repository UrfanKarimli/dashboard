<script setup>
import {cards} from "./mockDatas/cards"

</script>

<template>
  <div class="w-full flex flex-col">
    <h2 class="text-[32px] font-bold text-[#202224]">İdarəetmə Paneli</h2>
    <div class="flex items-center justify-between">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card flex flex-col justify-between bg-white min-w-[230px] w-[24%] h-[170px] p-4 rounded-xl"
      >
        <div class="flex justify-between">
          <div class="flex flex-col justify-between">
            <span class="text-base font-semibold">
              {{ card.title }}
            </span>
            <span class="font-bold text-[28px]">
              {{ card.value }}
            </span>
          </div>
          <div
            :class="`w-[60px] h-[60px] rounded-3xl flex items-center justify-center ${card.bgClass}`"
          >
            <component :is="card.icon" class="h-7 w-8" :class="card.iconColor" />
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center gap-1 truncate">
            <div :class="`flex items-center gap-2 ${card.trendColor}`">
              <component :is="card.trendIcon" class="h-5 w-5" />
              <span>{{ card.trend }}</span>
            </div>
            <span>{{ card.trendText }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


