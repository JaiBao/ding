<template>
<!-- 大圖視差 -->

<div class="q-pa-xs full-width " >
<q-parallax
  src="~assets/chronicle/chr01.jpg"
>
<div class=" absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >集團紀事</div>
      <div class="text-grey text-h5 alight-center" >Enterprise history</div>
    </div>
</q-parallax>
</div>
<!-- 時間軸 -->
    <q-timeline  layout="comfortable" side="right"  class="q-pa-md">
      <!-- <q-timeline-entry heading>Timeline heading</q-timeline-entry> -->

      <q-timeline-entry
      v-for="(chronicle, index) in chronicles" :key="index"
        :subtitle="chronicle.year"
        side="left"
        :icon="chronicle.icon"
        color="black"
        class="chronicleTimeline"
      >
        <li  data-aos="fade-left" data-aos-duration="2000"  v-for="(text, index) in chronicle.texts" :key="index"><i class="fa-sharp fa-solid fa-circle"></i> {{text.time}}  {{text.text}}<img v-if="text.image" :src="text.image"></li>
        <!-- <div v-for="(text, index) in chronicle.texts" :key="`img-${index}`">

        </div> -->
<hr class="chronicleHr">
      </q-timeline-entry>

    </q-timeline>
</template>

<script setup>
import { ref } from 'vue'
const chronicles = ref([
  {
    icon: 'fa-solid fa-diamond',
    year: '2023年',

    texts: [
      {
        time: '05/15',
        text: '餐飲事業|香臨食品南部分公司正式成立'
      }, {
        time: '04/20',
        text: '飲用水事業 | 森淋泉生技飲用水設備全面化升級、熱銷水產品新裝登場'
      }, {
        time: '04/01',
        text: '飲用水事業 | 水泉水生技公司正式成立，全省經銷服務啟動',
        image: '/indexpic/cir02.jpg'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2022年',
    texts: [
      {
        time: '10/17',
        text: '集團總部 | 鼎泰勝集團總部喬遷，進駐群光大樓',
        image: '/indexpic/cir03.jpg'
      }, {
        time: '',
        text: '餐飲事業 | 少小白榮獲「2021 第十一屆亞太優質餐飲連鎖品牌獎」',
        image: '/indexpic/cir04.jpg'
      }, {
        time: '',
        text: '裝修工程事業 | 家荷工程 正式成立'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2021年',
    texts: [
      {
        time: '',
        text: '飲用水事業 | 森淋泉生技加入，飲用水全省通路上架',
        image: '/indexpic/cir03.jpg'
      }, {
        time: '',
        text: '餐飲事業 | 創立迷港家叉燒舖品牌'
      }, {
        time: '',
        text: '餐飲事業 | 少小白榮獲「2020手搖飲優質業者」'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2020年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 少小白榮獲「台灣服務業創新獎」'
      }, {
        time: '',
        text: '餐飲事業 | 創立太ONE牛肉麵'
      }, {
        time: '',
        text: '影視事業 | 福汎國際正式成立',
        image: '/indexpic/cir06.jpg'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2018年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 創立少小白品牌'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2013年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 創立 逗漾 品牌'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2010年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 國際品牌產品OEM'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2008年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 設立中央廚房'
      }, {
        time: '',
        text: '餐飲事業 | 創立中華一餅品牌'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '2003年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 成立潤品屋進駐店面'
      }
    ]
  },
  {
    icon: 'fa-solid fa-diamond',
    year: '1987年',
    texts: [
      {
        time: '',
        text: '餐飲事業 | 自營潤餅攤 品牌草創初期'
      }
    ]
  }

])

// const layout = ref('dense')
// const side = ref('right')

</script>
<style lang="scss" scoped>

</style>
