<template>
  <div class=" bg-background-light dark:bg-background-dark">
    <div class=" flex justify-between items-center my-3 mx-5">
      <h3 class=" text-2xl font-bold text-text-light dark:text-text-dark">Satış Detalları</h3>
      <div class="flex gap-3  ">
        <button id="one_month" @click="handleUpdate('one_month')" :class="{ active: selection === 'one_month' }"
          class=" text-text-light dark:text-text-dark bg-buttonBg-light dark:bg-buttonBg-dark border border-border-light dark:border-border-dark py-1 px-3  rounded ">
          1M
        </button>
        <button id="six_months" @click="handleUpdate('six_months')" :class="{ active: selection === 'six_months' }"
          class="  text-text-light dark:text-text-dark bg-buttonBg-light dark:bg-buttonBg-dark border border-border-light dark:border-border-dark py-1 px-3  rounded">
          6M
        </button>
        <button id="one_year" @click="handleUpdate('one_year')" :class="{ active: selection === 'one_year' }"
          class=" text-text-light dark:text-text-dark bg-buttonBg-light dark:bg-buttonBg-dark border border-border-light dark:border-border-dark py-1 px-3  rounded">
          1Y
        </button>
        <button id="ytd" @click="handleUpdate('ytd')" :class="{ active: selection === 'ytd' }"
          class=" text-text-light dark:text-text-dark bg-buttonBg-light dark:bg-buttonBg-dark border border-border-light dark:border-border-dark py-1 px-3  rounded">
          YTD
        </button>
        <button id="all" @click="handleUpdate('all')" :class="{ active: selection === 'all' }"
          class=" text-text-light dark:text-text-dark bg-buttonBg-light dark:bg-buttonBg-dark border border-border-light dark:border-border-dark py-1 px-3  rounded">
          ALL
        </button>
      </div>
    </div>

    <div >
      <VueApexCharts class="custom-svg-style [&>div>svg>g>g>g>text]:fill-text-light  [&>div>svg>g>g>text]:fill-text-light dark:[&>div>svg>g>g>text]:fill-text-dark dark:[&>div>svg>g>g>g>text]:fill-text-dark" width="100%" type="area" height="450" ref="chartRef" :options="chartOptions" :series="series">
      </VueApexCharts>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { series } from '../mockDatas/series';
import { chartOptions } from '../mockDatas/chartOptions';
import { updateData } from '../helpers/chartUtils';
const selection = ref('one_year');
const chartRef = ref(null);


function handleUpdate(timeline) {
  updateData(timeline, chartRef, selection);
}


</script>

<style scoped>
.active {
  color: #fff;
  background-color: #4880FF;
}
/* .custom-svg-style > svg > g > g > text > tspan {
  color: #f87171; 
} */

</style>
