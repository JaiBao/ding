<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class=" full-width " >
<q-parallax
  src="~assets/social/4-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >企業社會責任</div>
      <!-- <div class="text-grey text-h5 alight-center" >News</div> -->
    </div>
  </q-parallax>
</div>
  <!-- container -->
<div class="socialContainer q-ma-md">
  <h4>取之社會、用之社會</h4>
  <p>
    一本對本土關懷的企業精神<br>
    集團參與從事各種公益<br>
    同時把關懷的手伸向更多社會不同角落<br>
  </p>
  <p>
    為了更有效益的投入公益<br>
    未來也將規劃專案部門來關懷弱勢畽體<br>
    同時一起推動教育與體育活動及藝術文化事務<br>
  </p>
</div>
<!-- icon圖區 -->
<div class="socialImage q-ma-md">
  <hr class="hrShort">
<div class="row center-align">
  <div class="col-4 column justify-center items-center col-md-2">
    <img ref="icon2" src="~assets/social/4-pic-2.png">
    <p>親子關懷</p>
  </div>
  <div class="col-4 column justify-center items-center col-md-2">
    <img ref="icon3" src="~assets/social/4-pic-3.png">
    <p>醫護支持</p>
  </div>
  <div class="col-4 column justify-center items-center col-md-2 ">
    <img ref="icon4" src="~assets/social/4-pic-4.png">
    <p>教育推動</p>
  </div>
  <div class="col-4 column justify-center items-center col-md-2">
    <img ref="icon5" src="~assets/social/4-pic-5.png">
    <p>體育贊助</p>
  </div>
  <div class="col-4 column justify-center items-center col-md-2">
    <img ref="icon6" src="~assets/social/4-pic-6.png">
    <p>藝文推廣</p>
  </div>
</div>
</div>
<!-- 卡片1 -->
<q-card  class="card03  row">
      <img  src="~assets/social/4-pic-7.jpg" class="col-12 col-md-5">

      <q-card-section class=" col-12 col-md-7 card03Text bg-red text-white">   <h2>
      公益參與<span>Public Welfare</span>
    </h2>
        <p >
          2023年 贊助捐血活動          <br>
2020年 贊助弱勢家庭長期供應豆奶產品          <br>
2020年 舉辦疫情不怕挺醫護，用行動傳愛活動          <br>
2020年 協辦防疫新生活 親子童樂趣活動
        </p>
      </q-card-section>
      <img  src="~assets/social/4-pic-9.jpg" class="col-12 col-md-4">
      <img  src="~assets/social/4-pic-10.jpg" class="col-12 col-md-3">
      <img  src="~assets/social/4-pic-11.jpg" class="col-12 col-md-5">
    </q-card>
<!-- icon圖 -->
    <div class="socialImage q-ma-md">
  <hr class="hrShort">
<div class="row center-align">
  <!-- <div class="col-6">
    <img src="../assets/social/1.jpg">
  </div> -->
  <div class="col-8 column justify-center items-center col-md-10">
    <img ref="icon1" src="~assets/social/4-pic-12.png">
    <p>安心食品責任</p>
  </div>
</div>
</div>
<!-- 圖片 -->
<div class="row socialSolo justify-center q-ma-md">

  <img src="~assets/social/4-pic-13.jpg" alt="">
</div>
<!-- 卡片2 -->
<q-card  class="card04  row">

      <q-card-section class=" col-12 col-md-8 card04Text bg-grey text-white">
        <div class="div">
        <h2>
      安心食品管理
    </h2>
        <p >
          集團秉持源頭管控的作法把關食品安全，從原物遴選到
中央廚房製作，嚴格遵循食品安全SOP流程作業。落實源頭
管理，將風險降地，做好食品安全管理才能提供安心產品。
        </p>
      </div>
        <div class="card04TextImg row">
        <img src="~assets/social/4-pic-15.jpg" class="col-12 col-md-6">
      <img src="~assets/social/4-pic-16.jpg" class="col-12 col-md-6">
    </div>
      </q-card-section>
      <img src="~assets/social/4-pic-17.jpg" class="col-12 col-md-4">

    </q-card>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const icon1 = ref(null)
const icon2 = ref(null)
const icon3 = ref(null)
const icon4 = ref(null)
const icon5 = ref(null)
const icon6 = ref(null)

const bounceForward = (icons, index) => {
  if (index >= icons.length) {
    bounceBackward(icons, icons.length - 2) // 從後往前跳
    return
  }

  gsap.fromTo(
    icons[index].value,
    { y: 0 },
    { y: -10, repeat: 1, yoyo: true, duration: 0.5, onComplete: () => bounceForward(icons, index + 1) }
  )
}

const bounceBackward = (icons, index) => {
  if (index < 0) {
    bounceForward(icons, 1)// 前面往後跳
    return
  }

  gsap.fromTo(
    icons[index].value,
    { y: 0 },
    { y: -10, repeat: 1, yoyo: true, duration: 0.5, onComplete: () => bounceBackward(icons, index - 1) }
  )
}

onMounted(() => {
  const forwardIcons = [icon2, icon3, icon4, icon5, icon6]
  bounceForward(forwardIcons, 0)

  gsap.fromTo(
    icon1.value,
    { y: 0 },
    { y: -10, repeat: -1, yoyo: true, duration: 0.5 }
  )
})
</script>
<style lang="scss" scoped>

</style>
