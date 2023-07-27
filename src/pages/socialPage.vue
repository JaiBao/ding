<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class=" full-width " >
<q-parallax
  src="~assets/social/4-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >企業社會責任</div>
      <div class="text-grey text-h6 alight-center" >Corporate Social Responsibility</div>
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
    未來也將規劃專案部門來關懷弱勢團體<br>
    同時一起推動教育與體育活動及藝術文化事務<br>
  </p>
</div>
<!-- icon圖區 -->
<div class="socialImage q-ma-md">
  <hr class="hrShort">
<div class="row center-align">
  <div class="col-4 column justify-center items-center col-md-2">
    <img ref="icon2" src="~assets/social/4-pic-2.png" >
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
      <img  src="~assets/social/4-pic-7.jpg" class="col-12 col-md-5" >

      <q-card-section class=" col-12 col-md-7 card03Text bg-red text-white">   <h2>
      公益參與<span>Public Welfare</span>
    </h2>
        <p >
          2023年 贊助捐血活動   <br>
          2022年 捐贈 彰化慈愛教養院 物資礦泉水       <br>
2020年 贊助弱勢家庭長期供應豆奶產品          <br>
2020年 舉辦「疫情不怕挺醫護，用行動傳愛」活動          <br>
2020年 協辦「防疫新生活 親子童樂趣」活動
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
<q-card class="row socialSolo ">
<div class="socialCardImg col-md-6 col-12">
  <img src="~assets/social/4-pic-13.jpg" alt="活動" >
</div>
<div class="socialCardText col-md-6 col-12">
<h4>灌溉養份的種子 用良心做事、為社會奉獻！
</h4>
<p>鼎泰勝集團執行長說：「不管做什麼都要做對得起自己的事！」。就像「水」在人體占了超過七成的成份，所以喝對水便是重要的事；另外人類體內蛋白質對於健康至關重要，它是身體組織和器官的基本結構，同時參與免疫系統等關鍵過程。我們便是透過提供純淨的瓶裝水與業界最優質的豆漿產品，打下基礎，再從基礎上深耕與琢磨。我們做出我們都敢喝、大家都需要的產品，把最好的帶給社會大眾，同時將其普及化，做出人人都可以喝得起的、買得起的產品。</p>
  <p>
我們不僅提供了人們保持良好水分平衡的選擇，同時也為消費者提供了高質量的蛋白質來源。我們的目標是幫助人們實現健康的生活方式，深入融入這些理念，把健康福祉與良心做事納入我們的企業精神，為社會創造更美好健康的未來！
</p>
</div>
</q-card>

<!-- 卡片2 -->
<q-card  class="card04  row">

      <q-card-section class=" col-12 col-md-8 card04Text bg-grey text-white ">
        <div class="food">
        <h2>
      安心食品管理
    </h2>
        <p >
          集團秉持源頭管控的作法把關食品安全，從原物遴選到中央廚房製作，嚴格遵循食品安全SOP流程作業。落實源頭管理，將風險降低，做好食品安全管理才能提供安心產品。
        </p>
      </div>
        <div class="card04TextImg row">
        <img src="~assets/social/4-pic-15.jpg" class="col-6 col-md-6">
      <img src="~assets/social/4-pic-16.jpg" class="col-6 col-md-6">
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
