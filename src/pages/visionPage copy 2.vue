<template>
  <q-page>

<!-- 大圖 -->
<div   class="visionFirst">
<img
  src="~assets/vision2/1-3-pic-1.jpg"
/>
<div class=" absolute-left-center visionCaption">
        <div class="text-black text-h2 alight-center" >願景與宗旨</div>
      <div class="text-grey text-h5 alight-center" >Prospect</div>
    </div>
</div>
<!-- 區塊一 -->
<div class="core">
<div class="bg-red visionTitle text-white">
<p>12323</p>
<p>12323</p>
</div>
<div class="bg-white visionContent text-white">

  <div class="black-line"></div>
   <!-- 左文框 -->
   <div v-if="showTextbox" class="dialog-container">
      <div class="dialog">
        <p>測試用</p>

      </div>
    </div>
   <div v-if="showTextbox" class="dialog-container2">
      <div class="dialog">
        <p>測試用</p>

      </div>
    </div>
   <div v-if="showTextbox" class="dialog-container3">
      <div class="dialog">
        <p>測試用</p>

      </div>
    </div>
  <div class="circleButton">
    <q-button class="rotate-border" @click="showTextbox = true">
      <span>專業</span>
    </q-button>
  </div>
  <div class="circleButton2">
    <q-button class="rotate-border2" @click="showTextbox = true">
      <span>創新</span>
    </q-button>
  </div>
  <div class="circleButton3">
    <q-button class="rotate-border3" @click="showTextbox = true">
      <span>勇敢嘗試</span>
    </q-button>
  </div>

</div>
</div>
</q-page>
</template>

<script setup>
import { ref } from 'vue'

const showTextbox = ref(false)
</script>

<style lang="scss" scoped>

</style>
