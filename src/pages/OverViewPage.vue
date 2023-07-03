<template>
  <q-page>
<!-- 大圖視差 -->

<div class=" full-width " >
<q-parallax
  src="~assets/overView/1-1-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >集團概述</div>
      <div class="text-grey text-h5 alight-center" >Group Introduction</div>
    </div>
</q-parallax>
</div>
  <!-- 介紹區 -->
    <!-- 卡片第一層 -->

    <q-card data-aos="fade-up" data-aos-duration="2000" class="card01  row">
      <img src="~assets/overView/1-1-pic-2.jpg" class="col-12 col-md-5">

      <q-card-section class=" col-12 col-md-7 card01Text bg-grey text-white"><p>
        鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。我們擁有研發、生產製造、品牌經營、物流系統、電子商業作業系統和完整的後勤支援，鼎泰勝與每一位同仁共同打造「連鎖」的價值。協助每一位認真打拼的合作伙伴實現夢想，共享經營的成果。</p>
      </q-card-section>
    </q-card>

  <!-- 卡片第二層 -->
  <div class="group row">
    <q-card class="news col-md-4 col-sm-12 cardGroup">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|飲用水事業|<br ><br >年銷售超過<br>
          <h4>{{ formatNumber(counters[0]) }}<span>箱</span></h4><br>年銷售超過<br><h4>{{ formatNumber(counters[4]) }}<span>瓶</span></h4>
            </div>
            <img src="~assets/overView/1-1-pic-3.jpg" alt="飲用水事業" >
        </div>
      </q-card>
<div class="col col-md-4 col-sm-12">
    <q-card class="news  cardGroup  col-md-3 col-sm-12">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|裝修工程事業|<br><br>合作建案超過<br>
          <h4>{{ formatNumber(counters[1]) }}<span>件</span></h4>
            </div>
            <img src="~assets/overView/1-1-pic-4.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    <q-card class="news  cardGroup  col-md-3 col-sm-12">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|影視創意事業|<br><br>合作影視作品超過<br>
          <h4>{{ formatNumber(counters[2]) }}<span>部</span></h4>
            </div>
            <img src="~assets/overView/1-1-pic-5.jpg" alt="影視創意事業" >
        </div>
      </q-card>
    </div>
    <q-card class="news col-md-4 col-sm-12 cardGroup">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|餐飲事業|<br><br>年銷售潤餅盒餐超過<br>
          <h4>{{ formatNumber(counters[3]) }}<span>套</span></h4>
            </div>
            <img src="~assets/overView/1-1-pic-6.jpg" alt="餐飲事業" >
        </div>
      </q-card>
  </div>

  <!-- 卡片第三層 -->

  <q-card data-aos="fade-up" data-aos-duration="3000"  class="card01 row ">
      <img src="~assets/overView/1-1-pic-7.jpg" class="c  ol-12 col-md-5">

      <q-card-section class=" col-12 col-md-7 card01Text bg-grey text-white"><h3>6大事業體 8間集團頂尖公司</h3><p>
        網羅民生需求飲用水、美妝保健、餐飲、影視、酒水、修繕工程等產業發展，獨具規模的服務理念與創新商品擁有絕佳利基點，同時具有國際觀的經營策略，逐步提升整體事業體與集團的高度發展。</p>
      </q-card-section>
    </q-card>
    <!-- logo區域 -->
    <div class="logoGroup row justify-around">
      <img data-aos="flip-right"
      src="~assets/overView/1-1-pic-8.png" alt="">
      <img data-aos="flip-right"  src="~assets/overView/1-1-pic-9.png" alt="">
      <img data-aos="flip-right"   src="~assets/overView/1-1-pic-10.png" alt="">
      <img data-aos="flip-right"  src="~assets/overView/1-1-pic-11.png" alt="">
      <img data-aos="flip-right"  src="~assets/overView/1-1-pic-12.png" alt="">
      <img data-aos="flip-right"   src="~assets/overView/1-1-pic-13.png" alt="">
      <img data-aos="flip-right"  src="~assets/overView/1-1-pic-14.png" alt="">
    </div>
    <!-- 6大產業圖片展示 -->
  <!-- 清單圖片 -->
  <div id="overViewPhotoNews">
    <div class="row">
    <!-- 1 -->
    <q-card class="news col-md-4 col-sm-6 image-card">
      <p class="image-title">飲用水事業
        <br>
        Drinking Water Business
      </p>
      <div class="image-content">
        <img src="~assets/overView/1-1-pic-15.jpg" alt="飲用水事業" >
      </div>
    </q-card>

 <!-- 2 -->
 <q-card class="news col-md-4 col-sm-6 image-card">
      <p class="image-title">餐飲事業 <br>
        Catering Business
      </p>
      <div class="image-content">
        <img src="~assets/overView/1-1-pic-16.jpg" alt="餐飲事業" s>
      </div>
    </q-card>
      <!-- 3 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">水酒事業
          <br>
          Wine And Water Business
        </p>
        <div class="image-content">
            <img src="~assets/overView/1-1-pic-17.jpg" alt="水酒事業" >
        </div>
      </q-card>
      <!-- 4 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">生技事業
          <br>
          Biotechnology Business
        </p>
        <div class="image-content">
            <img src="~assets/overView/1-1-pic-18.jpg" alt="生技事業" >
        </div>
      </q-card>
      <!-- 5 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">影視事業
          <br>
          Media Studio
        </p>
        <div class="image-content">
            <img src="~assets/overView/1-1-pic-19.jpg" alt="影視事業" >
        </div>
      </q-card>
      <!-- 6 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">裝修工程事業
          <br>
          Decoration Engineering Business
        </p>
        <div class="image-content">
            <img src="~assets/overView/1-1-pic-20.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    </div>
  </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ends = [800000, 2000, 1000, 200000, 19200000]
const counters = ends.map(end => ref(0))

const starts = Array(ends.length).fill(0)
const duration = 6000

let rafIds = []

function step (index) {
  return function (timestamp) {
    if (!starts[index]) starts[index] = timestamp
    const progress = timestamp - starts[index]
    if (progress < duration) {
      counters[index].value = Math.min(Math.floor((progress / duration) * ends[index]), ends[index])
      rafIds[index] = requestAnimationFrame(step(index))
    } else {
      counters[index].value = ends[index]
      cancelAnimationFrame(rafIds[index])
    }
  }
}

onMounted(() => {
  rafIds = counters.map((_, index) => requestAnimationFrame(step(index)))
})

onUnmounted(() => {
  rafIds.forEach((rafId, index) => {
    cancelAnimationFrame(rafId)
  })
})
// 新增的格式化函數
const formatNumber = (number) => {
  return number.value.toLocaleString()
}
</script>
<style lang="scss" scoped>
</style>
