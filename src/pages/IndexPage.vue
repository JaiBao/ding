<template>

  <q-page>
<!-- 大圖視差 -->

<div class="indexParallax medium">
  <div class="parallaxImage">
    <img src="../assets/overView/0-pic-1.jpg" alt="Parallax Image">
  </div>
  <div  class="parallaxContent">
    <div class="contentText">
    <h2 class="text-red ">DING TAI SHENG</h2>
    <h5 class="gt-xs">Scaling High, Conquer for Success</h5>
    <p class="gt-xs">問<span class="text-red">鼎泰</span>山旗開得<span class="text-red">勝</span>。我們相信只有通過勇氣、決心和努力，我們才能攀登最高峰並取得卓越成果。我們致力於突破業界的限制和挑戰，並引領行業的發展和創新。</p>
  </div>
</div>
</div>

  <!-- 介紹區 -->
    <!-- 卡片第一層 -->
    <div class="card-container row">

      <div class="red-line"></div>
      <div class="card01Img">
      <img src="~assets/overView/0-pic-2.jpg" >
    </div>
    <q-card class="indexCard01 bg-whte text-black   ">
      <div class="card01Text">
        <div class="title">
      <h3 class="row justify-start">"Shaping the value of </h3>
      <h3 class="row justify-end">'chain operations'.</h3></div>
    <p>
      <span>鼎泰勝集團，</span>深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。我們擁有研發、生產製造、品牌經營、物流系統、電子商業作業系統和完整的後勤支援，鼎泰勝與每一位同仁共同打造「連鎖」的價值。協助每一位認真打拼的合作伙伴實現夢想，共享經營的成果。</p>
    </div>
    </q-card>
  </div>
  <!-- 卡片第二層 -->
  <div class="group row">
    <q-card class="news col-md-4 col-sm-12 cardGroup">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none "><p>| 飲用水事業 |</p><p>月銷售超過</p>
          <h4>{{ formatNumber(counters[0]) }}<span>箱</span></h4>
          <br><p>年銷售超過</p><h4>{{ formatNumber(counters[4]) }}<span>箱</span></h4>
            </div>
            <img src="~assets/overView/0-pic-3.jpg" alt="飲用水事業" >
        </div>
      </q-card>
<div class="column col-md-4 col-sm-12 justify-between">
    <q-card class="  cardGroup  col-6 ">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none "><p>| 裝修工程事業 |</p><p>合作建案超過</p>
          <h4>{{ formatNumber(counters[1]) }}<span>件</span></h4>
            </div>
            <img src="~assets/overView/0-pic-4.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    <q-card class=" cardGroup  col-6  column justify-end">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none "><p>| 影視創意事業 |</p><p>合作影視作品超過</p>
          <h4>{{ formatNumber(counters[2]) }}<span>部</span></h4>
            </div>
            <img src="~assets/overView/0-pic-5.jpg" alt="影視創意事業" >
        </div>
      </q-card>
    </div>
    <q-card class=" col-md-4 col-sm-12 cardGroup">
        <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none "><p>| 餐飲事業 |</p><p>年銷售潤餅盒餐超過</p>
          <h4>{{ formatNumber(counters[3]) }}<span>套</span></h4>
            </div>
            <img src="~assets/overView/0-pic-6.jpg" alt="餐飲事業" >
        </div>
      </q-card>
  </div>

  <!-- 卡片第三層 -->
  <div class="textBox bg-black text-white row justify-center items-center">
    "Diversified Business"
  </div>
    <!-- 6大產業圖片展示 -->
  <!-- 清單圖片 -->
  <div id="overViewPhotoNews">
    <div class="row">
    <!-- 1 -->
    <q-card class="news col-md-4 col-sm-6 image-card">
      <div class="image-title">
      <h5 >飲用水事業
      </h5>
        <p>
        Drinking Water Business
      </p>

      <br>
      <img src="~assets/overView/0-pic-13.png" alt="水泉水生技" >
    </div>
      <div class="image-content">
        <img src="~assets/overView/0-pic-7.jpg" alt="飲用水事業" >
      </div>
    </q-card>

 <!-- 2 -->
 <q-card class="news col-md-4 col-sm-6 image-card">
  <div class="image-title">
      <h5 >食品製造業
      </h5>
        <p>
          Food Manufacturing
      </p>

      <br>
      <img src="~assets/overView/0-pic-14.png" alt="上暉食品" >
    </div>
      <div class="image-content">
        <img src="~assets/overView/0-pic-8.jpg" alt="食品製造業" s>
      </div>
    </q-card>
      <!-- 3 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <div class="image-title">
      <h5 >餐飲事業
      </h5>
        <p>
          Foodservice Business
      </p>

      <br>
      <div class="row">
      <!-- <img src="~assets/overView/0-pic-14.png" alt="上暉食品" > -->
      <img src="~assets/overView/0-pic-15.png" alt="香臨食品" >
    </div>
    </div>
        <div class="image-content">
            <img src="~assets/overView/0-pic-9.jpg" alt="水酒事業" >
        </div>
      </q-card>
      <!-- 4 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <div class="image-title">
      <h5 >影視事業
      </h5>
        <p>
          Media Studio
      </p>

      <br>
      <img src="~assets/overView/0-pic-16.png" alt="福汎國際" >
    </div>
        <div class="image-content">
            <img src="~assets/overView/0-pic-10.jpg" alt="影視事業" >
        </div>
      </q-card>
      <!-- 5 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <div class="image-title">
      <h5 >生技事業
      </h5>
        <p>
          Biotechnology Business
      </p>

      <br>
      <img src="~assets/overView/0-pic-17.png" alt="京妍國際" >
    </div>
        <div class="image-content">
            <img src="~assets/overView/0-pic-11.jpg" alt="生技事業" >
        </div>
      </q-card>
      <!-- 6 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <div class="image-title">
      <h5 >裝修工程事業
      </h5>
        <p>
          Decoration Engineering Business
      </p>

      <br>
      <img src="~assets/overView/0-pic-18.png" alt="家荷工程)" >
    </div>
        <div class="image-content">
            <img src="~assets/overView/0-pic-12.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    </div>
  </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMeta } from 'quasar'

useMeta({
  title: '鼎泰勝集團',
  meta: [
    { name: 'description', content: '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。' },
    { name: 'keywords', content: '鼎泰勝, 官方網站, 公司,' },
    { name: 'author', content: 'Bao' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: '鼎泰勝集團官方網站' },
    { property: 'og:description', content: '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。' },
    { property: 'og:image', content: '/indexpic/0-pic-13.png' },
    { name: 'twitter:title', content: '鼎泰勝集團官方網站' },
    { name: 'twitter:description', content: '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。' },
    { name: 'twitter:image', content: '/indexpic/0-pic-13.png' }

  ]
})

const ends = [800000, 2000, 1000, 200000, 9600000]
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
