<template>

  <q-page>
      <!-- 大圖視差 -->

      <div class=" full-width " >
<q-parallax
  src="~assets/recruit/5-pic-1.jpg"
>
<div class="absolute-left-center custom-caption3">

        <div class="text-black text-h2 alight-center" >加入鼎泰勝</div>
      <div class="text-grey text-h6 alight-center" >Join us</div>
    </div>
  </q-parallax>
</div>
    <!-- 卡片第一層 -->

    <q-card data-aos="fade-up" data-aos-duration="2000" class="jobCard01  row" style="  max-width: 100%;
  max-height: 100%;
  object-fit: contain;">
      <img src="~assets/recruit/5-pic-2l.jpg" class="col-12 col-md-6" style="  max-width: 100%;
  max-height: 100%;
  object-fit: contain;">

      <q-card-section class=" col-12 col-md-6 jobText bg-white text-grey"><p>
        在鼎泰勝，我們深信每個事業體的獨特性都需要相對應的專業人才。在這裡，我們熱切期待你能發揮自己的最佳表現，成就超越平凡的自我。<br><br>

讓我們肩並肩共進，於鼎泰勝的大舞台上揮灑你的才華與汗水。無論何時，我們都堅定地、認真地向著我們的新未來邁進。<br><br>

揮灑汗水、展現才華、實現夢想，我們在鼎泰勝的每一天，都是努力、認真，與你一起打造美好的新未來！
</p>
      </q-card-section>
    </q-card>
<!-- 職務類別 -->
<div class="jobContainer row">
<div class="jobRectangle ">
    <div class="text">熱門職務類別</div>
  </div>

  <q-card class=" col-md-12 col-sm-12 jobGroup">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none "> | 集團總部 |
          <h4>高階主管</h4>Senior executive
          <br>
          <q-btn rounded  class="topBtn" @click="openLink">目前職缺 &nbsp;<i class="fa-solid fa-circle-arrow-right fa-bounce " style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-3.jpg" alt="高階主管" >
        </div>
      </q-card>
<div class="col col-md-12 col-sm-12  row jobGroup">
    <q-card class="    col-md-6 col-sm-12">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">| 餐飲事業 |
          <h4>門市儲備幹部/廚助/兼職人員</h4>Store staff
          <q-btn rounded @click="openLink">目前職缺 &nbsp;<i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-4.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    <q-card class="    col-md-6 col-sm-12">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">| 飲用水事業 |
          <h4>生產線作業員</h4>Production operator
          <q-btn rounded  @click="openLink">目前職缺 &nbsp;<i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-5.jpg" alt="影視創意事業" >
        </div>
      </q-card>
      </div>
</div>

<!-- 員工福利 -->
<div class="jobContainer2 row">
  <div class="container2Left col-md-7 q-pa-xs">
    <div class="jobRectangle  ">
      <div class="text">員工福利</div>
    </div>
    <div class="jobIconArea row">
      <div class="iconLeft col-6">
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-6.png" alt="勞保健保" ><p>勞保健保</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-7.png" alt="勞退提撥金" ><p>勞退提撥金</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-8.png" alt="就業保險" ><p>就業保險</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-9.png" alt="職災保險" ><p>職災保險</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-10.png" alt="員工團體保險" ><p>員工團體保險</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-11.png" alt="三節獎金禮品" ><p>三節獎金禮品</p></div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-12.png" alt="特殊節日獎金禮品" ><p>特殊節日獎金禮品</p></div>
</div>
<div class="iconRight col-6">
<div class="jobIcon">
<img src="~assets/recruit/5-pic-13.png" alt="勞保健保" ><p>咖啡吧</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-14.png" alt="旅遊補助" ><p>旅遊補助</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-15.png" alt="免費下午茶" ><p>免費下午茶</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-16.png" alt="伙食津貼" ><p>伙食津貼</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-17.png" alt="員購優惠" ><p>員購優惠</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-18.png" alt="員工制服" ><p>員工制服</p></div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-19.png" alt="員工餐" ><p>員工餐</p></div>
</div>
</div>
</div>
<div class="container2Right col-md-5 q-pa-xs">
<div class="jobRectangle ">
    <div class="text">學習成長</div>
  </div>
  <div class="jobIconArea row">
    <div class="iconLeft">
  <div class="jobIcon col-6">
<img src="~assets/recruit/5-pic-20.png" alt="員工教育訓練" ><p>員工教育訓練</p></div></div>
<div class="iconRight col-6">
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-21.png" alt="培訓課程" ><p>培訓課程</p></div>
  </div>
</div>
</div>
  <q-btn @click="openLink2" class="jobIconBtn">職缺應徵 &nbsp;<i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>

</div>
  </q-page>
</template>
<script setup>
const openLink = () => {
  window.open('https://www.104.com.tw/company/1a2x6bkiyq', '_blank')
}
const openLink2 = () => {
  window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
}
</script>
<style lang="scss" scoped>

</style>
