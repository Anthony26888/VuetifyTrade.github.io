<template>
  
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12">
      <InfoCoins/>
    </div>
    <div class="col-7">      
      <Chart/>
    </div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  
    
</template>
  
<script setup>
  import Chart from '@/components/Chart.vue'
  import InfoCoins from '@/components/InfoCoins.vue'
</script>