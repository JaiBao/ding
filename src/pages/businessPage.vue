<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="full-width " >
<q-parallax
  src="~assets/business/3-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >集團事業體</div>
      <div class="text-grey text-h5 alight-center" >Business</div>
    </div>
  </q-parallax>
</div>

<!-- 事業體卡片 -->
<div class="businessContainer">
<div class="rectangle ">
    <div class="text">鼎泰勝集團</div>
  </div>
  <div class="businessCard">
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-2.jpg" class="businessImage" />
    <div class="businessText">
      飲用水事業
    </div>
  </q-card>
  <q-btn class="businessBtn">森林全生技股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-3.jpg" class="businessImage" />
    <div class="businessText">
      生技事業
    </div>
  </q-card>
  <q-btn class="businessBtn">京研國際股份有限公司</q-btn></div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-4.jpg" class="businessImage" />
    <div class="businessText">
      餐飲事業
    </div>
  </q-card>
  <q-btn class="businessBtn">香臨食品股份有限公司</q-btn>
  <q-btn class="businessBtn">上暉食品股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-5.jpg" class="businessImage" />
    <div class="businessText">
      影視事業
    </div>
  </q-card>
  <q-btn class="businessBtn">福汎國際有限公司</q-btn></div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-6.jpg" class="businessImage" />
    <div class="businessText">
      水酒事業
    </div>
  </q-card>
  <q-btn class="businessBtn">香臨食品股份有限公司</q-btn>
  <q-btn class="businessBtn">水泉水生技股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="~assets/business/3-pic-7.jpg" class="businessImage" />
    <div class="businessText">
      裝修工程事業
    </div>
  </q-card>
  <q-btn class="businessBtn">家荷工程股份有限公司</q-btn></div>

</div>
  </div>

  <!-- 導向區域 -->
  <div v-for="card in businessPageCards" :key="card.id" class="q-ma-md row justify-center" data-aos="fade-up" data-aos-duration="2000">
      <q-card class="businessPageCard">
        <q-card-section class=" gutter-xs q-gutter-xl businessPageCard2" horizontal>
            <img :src="card.image" class="col-12 col-md-3 newsPageImg" >
            <div class="col-12 col-md-8 newsPageText">
              <div class="businessPageTitle">{{ card.businessType }} <span>| {{ card.title }}</span> <br><p>{{ card.businessType2 }}</p></div>
              <div class="businessPageContent" v-html="card.content"></div>
              <div class="row justify-end items-end align-end">
                <q-btn
                rounded
                class="businessPageBtn q-ma-md">前往網站 ></q-btn>
              </div>
            </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
const businessPageCards = ref([
  {
    id: 1,
    image: '/business/3-pic-8.jpg',
    businessType2: 'Drinking Water Business',
    title: '森淋泉生技股份有限公司',
    businessType: '餐飲事業',
    content: '森淋泉生技股份有限公司長年經營包裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始，不斷思索如何研發出不單單符合食品安全的飲用水，而是更進一步的從人體所需為出發點，思索如何補充其關鍵元素，使人體能達到平衡為目的的優質產品。'
  },
  {
    id: 2,
    image: '/business/3-pic-9.jpg',
    title: '京研國際股份有限公司',
    businessType: '生技事業',
    businessType2: 'Biotechnology Business',
    content: '隨著時代的進步和科技發展，保養品帶來的美麗是基本需求，然而Jin Yam京研更重要的是關注肌膚健康的影響。<br>Jin Yam京妍秉持品牌理念這種追求，真實、善良、美麗的理念主旨在幫助個人成長、建立良好的人際關係，並在生活中創造更有意義和豐富的體驗。我們期許將預防醫學健康的觀念，透過體驗分享的特別模式，傳遞到個人、延伸至家庭、普及社會，讓我們及下一代生活在正能量、健康與愛的幸福環境中。'
  },
  {
    id: 3,
    image: '/business/3-pic-10.jpg',
    businessType2: 'Catering Business',
    title: '香臨食品股份有限公司',
    businessType: '餐飲事業',
    content: '香臨食品為臺灣專業的連鎖餐飲品牌經營公司，早期以地攤生意起家，因為餐點好吃、品質好而受到消費者推崇與喜愛，於是設立門市經營。在深耕餐飲市場多年後，創立檢證合格的食品工廠。一路走來，始終如一，秉持著「經營誠信」、「服務用心」、「安心實在」，讓香臨食品得以立足在台灣食品餐飲業。'
  },
  {
    id: 4,
    image: '/business/3-pic-11.jpg',
    businessType2: 'Catering Business',
    title: '上暉食品股份有限公司',
    businessType: '餐飲事業',
    content: '上暉食品為臺灣專業的食材供應商，深耕台灣早午餐等餐飲市場，上暉食品同時擁有自己的專業物流車隊，上暉食品擁有著數十年的食品生產製造經驗，擁有合格的廠房規格與專業設備，同時服務國際與國內各大品牌，提供OEM代工生產服務。現轉型為中央廚房，提供香臨食品旗下餐飲原物料，同時開發自製商品。'
  },
  {
    id: 5,
    image: '/business/3-pic-12.jpg',
    businessType: '影視事業',
    businessType2: 'Media Studio',
    title: '福汎國際有限公司',
    content: '福汎FORFAM<br>跳脫框架、不只是影像團隊，創意是福汎核心宗旨，有創意才能把影像作品帶入生命力。沒有創意的影片就像是沒有靈魂的軀殼。福汎作品不僅有鮮明的辨識度，獨創性的影視作品，豐富了影像、廣告、音樂MV等作品。'
  },
  {
    id: 6,
    image: '/business/3-pic-13.jpg',
    businessType: '水酒事業',
    businessType2: 'Wine And Water Business',
    title: '香臨食品股份有限公司',
    content: '香臨食品跨足瓶裝水 、進口葡萄酒、威士忌烈酒等酒水行銷業務，成立專業頂尖業務團隊，專營酒水產品通路上架、營銷、品牌代理、產品進口出口等多元的服務。我們注重於市場和客戶的需求，致力成為水酒行業的最佳供應商，南部分公司同時提供零售服務，滿足在地生活的需求性。'
  },
  {
    id: 7,
    image: '/business/3-pic-14.jpg',
    businessType: '裝修工程事業',
    businessType2: 'Decoration Engineering Business ',
    title: '家荷工程股份有限公司',
    content: '家荷工程 專業合法裝修設計團隊<br>家荷善於傾聽業主主需求、耐心溝通，在梳理整合需求後，提出最符合業主的快速的執行工程方案。我們擅長室內設計與空間規劃、老屋翻修等工程統包服務。我們同時專注於每個細節，為客戶把關每一項施工品質。'
  }
])
</script>

<style lang="scss">

</style>
