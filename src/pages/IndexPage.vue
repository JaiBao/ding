<template>
  <q-page>
<!-- 大圖視差 -->
<div class="q-pa-xs full-width indexParallax" >

    <q-parallax
      src="~assets/indexpic/carousel.jpg"
      style="height: 100%;"
    >
    <div data-aos="zoom-out"
    data-aos-duration="3000"    class="absolute-right custom-caption q-pa-" >
          <div class="text-h2 customLogo"><img src="~assets/indexpic/logo.png" ></div>
          <div  class="text-white text-h4 alight-center customText" >卓越 穩健 創新</div>
          <div  class="text-white text-h3 alight-center customText2" >攜手共創美好未來</div>
        </div>
    </q-parallax>

    </div>
<!-- <div class="q-pa-xs full-width" style="padding-top: 0;height: 500px;">
    <q-carousel
    animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      width="100%"
      height="100%"
    >
      <q-carousel-slide name="first" img-src="~assets/indexpic/carousel.jpg">
        <div class="absolute-top-right custom-caption" style="margin-right:10%">
          <div class="text-h2"><img src="~assets/indexpic/logo.png" style="width: 250px;margin-right:5% ;"></div>
          <div class="text-white text-h4 alight-center" >卓越 穩健 創新  <br>攜手共創美好未來</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/indexpic/carousel.jpg">
        <div class="absolute-top-right custom-caption" style="margin-right:10%">
          <div class="text-h2"><img src="~assets/indexpic/logo.png" style="width: 250px;margin-right:5% ;"></div>
          <div class="text-white text-h4 alight-center" >卓越 穩健 創新  <br>攜手共創美好未來</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/indexpic/carousel.jpg">
        <div class="absolute-top-right custom-caption" style="margin-right:10%">
          <div class="text-h2"><img src="~assets/indexpic/logo.png" style="width: 250px;margin-right:5% ;"></div>
          <div class="text-white text-h4 alight-center" >卓越 穩健 創新  <br>攜手共創美好未來</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div> -->
  <!-- 最新消息 -->

  <div class="readContainer container-md">
    <h4 style="margin:0">最新消息</h4>
    <hr class="hr-red">
    <div class="section01-text">
            <cardCarousel/>

    </div>
  </div>
  <!-- 6大產業介紹 -->
  <div data-aos="fade-left"
     data-aos-duration="300" class="section01">
    <div class="container container-md">
      <h4 style="margin: 0;">鼎泰勝六大事業 多元展新績</h4>
      <hr class="hr-red">
      <div class="section01-text">
        <div class="col-12 col-md-4 col-sm-6">
          <p>鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。我們擁有研發、生產製造、品牌經營、物流系統、電子商業作業系統和完整的後勤支援，鼎泰勝與每一位同仁共同打造「連鎖」的價值。協助每一位認真打拼的合作伙伴實現夢想，共享經營的成果。</p>
        </div>
        </div>
      </div>
</div>
<!-- 6大產業圖片展示 -->
  <!-- 清單圖片 -->
  <div  id="photoNews" style="margin-bottom: 8%;">
    <div class="row">
      <!-- 1 -->
      <q-card  class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">飲用水事業
          <br>
          Drinking Water Business
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry5.jpg" alt="飲用水事業" >
        </div>
      </q-card>
      <!-- 2 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">餐飲事業 <br>
          Catering Business
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry2.jpg" alt="餐飲事業" >
        </div>
      </q-card>
      <!-- 3 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">水酒事業
          <br>
          Wine And Water Business
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry3.jpg" alt="水酒事業" >
        </div>
      </q-card>
      <!-- 4 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">生技事業
          <br>
          Biotechnology Business
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry4.jpg" alt="生技事業" >
        </div>
      </q-card>
      <!-- 5 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">影視事業
          <br>
          Media Studio
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry5.jpg" alt="影視事業" >
        </div>
      </q-card>
      <!-- 6 -->
      <q-card class="news col-md-4 col-sm-6 image-card">
        <p class="image-title">裝修工程事業
          <br>
          Decoration Engineering Business
        </p>
        <div class="image-content">
            <img src="~assets/indexpic/industry2.jpg" alt="裝修工程事業">
        </div>
      </q-card>
    </div>
  </div>
<!-- 人才招募 -->
<div data-aos="fade-up" data-aos-duration="3000" class="row  recruit justify-center q-ma-md col-sm-12">
<img  src="~assets/indexpic/0-pic-11.jpg" alt="人才招募" >
</div>
  </q-page>
</template>

<script setup>
import cardCarousel from 'components/cardCarousel.vue'

</script>

<style lang="scss" scoped>

</style>
