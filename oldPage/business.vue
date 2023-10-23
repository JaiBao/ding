<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="full-width">
      <q-parallax src="/business/3-pic-1.jpg" style="object-fit: cover">
        <div class="absolute-left-center custom-caption2">
          <div class="text-black text-h2 alight-center">集團事業體</div>
          <div class="text-grey text-h6 alight-center">Business</div>
        </div>
      </q-parallax>
    </div>

    <!-- 事業體卡片 -->
    <!-- <div class="businessContainer">
<div class="rectangle ">
    <div class="text">鼎泰勝集團</div>
  </div>
  <div class="businessCard">
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-2.jpg" class="businessImage" />
    <div class="businessText">
      飲用水事業
    </div>
  </q-card>
  <q-btn class="businessBtn">森林全生技股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-3.jpg" class="businessImage" />
    <div class="businessText">
      生技事業
    </div>
  </q-card>
  <q-btn class="businessBtn">京妍國際股份有限公司</q-btn></div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-4.jpg" class="businessImage" />
    <div class="businessText">
      餐飲事業
    </div>
  </q-card>
  <q-btn class="businessBtn">香臨食品股份有限公司</q-btn>
  <q-btn class="businessBtn">上暉食品股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-5.jpg" class="businessImage" />
    <div class="businessText">
      影視事業
    </div>
  </q-card>
  <q-btn class="businessBtn">福汎國際有限公司</q-btn></div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-6.jpg" class="businessImage" />
    <div class="businessText">
      水酒事業
    </div>
  </q-card>
  <q-btn class="businessBtn">香臨食品股份有限公司</q-btn>
  <q-btn class="businessBtn">水泉水生技股份有限公司</q-btn>
</div>
  <div class="businessCard1 ">
  <q-card class="col col-md-2">
    <img src="/business/3-pic-7.jpg" class="businessImage" />
    <div class="businessText">
      裝修工程事業
    </div>
  </q-card>
  <q-btn class="businessBtn">家荷工程股份有限公司</q-btn></div>

</div>
  </div> -->

    <!-- 導向區域 -->
    <div v-for="card in businessPageCards" :key="card.id" class="q-ma-md row justify-center">
      <q-card class="businessPageCard">
        <q-card-section class="gutter-xs q-gutter-xl businessPageCard2" horizontal>
          <img :src="card.image" class="col-12 col-md-4 newsPageImg" />
          <div class="col-12 col-md-8 newsPageText">
            <div class="businessPageTitle">
              {{ card.businessType }}
              <span>| {{ card.title }}</span>
              <br />
              <p>{{ card.businessType2 }}</p>
            </div>
            <div class="businessPageContent" v-html="card.content"></div>
            <div class="row justify-end items-end align-end">
              <q-btn rounded class="businessPageBtn q-ma-md" @click="openWebsite(card.website)" v-if="card.website">前往網站 ></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <!-- 農夫 -->
    <div class="row footerImg">
      <!-- <img src="/business/3-pic-10.png" alt="背景"  class="footerImg1"> -->
      <div class="row footerImg2">
        <img src="/business/3-pic-9.png" alt="農夫" />
        <div class="footerBText">
          <p>
            市場共創
            <span class="gt-xs">|</span>
          </p>
          <p>
            利潤共享
            <span class="gt-xs">|</span>
          </p>
          <p>資源共有</p>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'

useHead({
  title: '鼎泰勝集團 - 集團事業體',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。'
    },
    // Open Graph
    {
      property: 'og:title',
      content: '鼎泰勝集團'
    },
    {
      property: 'og:description',
      content:
        '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。'
    },
    {
      property: 'og:image',
      content: '/indexpic/0-pic-13.png' // 使用你的圖片路徑
    },
    {
      property: 'og:image:alt',
      content: '鼎泰勝圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.dtstw.com/business'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'author',
      content: 'bao'
    }

    // { name: 'google-site-verification', content: '5j6K_dFtD3LNzCJ42rR_OSpfv1rmneTcTEXsdRASwU0' }
    // ...
  ]
})

function openWebsite(website) {
  window.open(website, '_blank')
}
const businessPageCards = ref([
  {
    id: 1,
    image: '/business/3-pic-2.jpg',
    businessType2: 'Drinking Water Business',
    title: '水泉水生技股份有限公司',
    businessType: '飲用水事業',
    content:
      '水泉水生技股份有限公司長年經營包裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始，不斷思索如何研發出不單單符合食品安全的飲用水，而是更進一步的從人體所需為出發點，思索如何補充其關鍵元素，使人體能達到平衡為目的的優質產品。',
    website: 'https://www.springwater.tw/'
  },
  // {
  //   id: 2,
  //   image: '/business/3-pic-3.jpg',
  //   title: '京妍國際股份有限公司',
  //   businessType: '生技事業',
  //   businessType2: 'Biotechnology Business',
  //   content: '隨著時代的進步和科技發展，保養品帶來的美麗是基本需求，然而Jing Yam京妍更重要的是關注肌膚健康的影響。<br>Jing Yam京妍秉持品牌理念這種追求，真實、善良、美麗的理念主旨在幫助個人成長、建立良好的人際關係，並在生活中創造更有意義和豐富的體驗。我們期許將預防醫學健康的觀念，透過體驗分享的特別模式，傳遞到個人、延伸至家庭、普及社會，讓我們及下一代生活在正能量、健康與愛的幸福環境中。',
  //   website: 'https://www.jingyam.com/'
  // },
  {
    id: 3,
    image: '/business/3-pic-4.jpg',
    businessType2: 'Catering Business',
    title: '香臨食品股份有限公司',
    businessType: '餐飲事業',
    content:
      '香臨食品為臺灣專業的連鎖餐飲品牌經營公司，早期以地攤生意起家，因為餐點好吃、品質好而受到消費者推崇與喜愛，於是設立門市經營。在深耕餐飲市場多年後，創立檢證合格的食品工廠。一路走來，始終如一，秉持著「經營誠信」、「服務用心」、「安心實在」，讓香臨食品得以立足在台灣食品餐飲業。',
    website: 'https://www.chinabing.net/'
  },
  {
    id: 4,
    image: '/business/3-pic-5.jpg',
    businessType2: 'Catering Business',
    title: '上暉食品股份有限公司',
    businessType: '食品製造業',
    content:
      '上暉食品為臺灣專業的食材供應商，深耕台灣早午餐等餐飲市場，上暉食品同時擁有自己的專業物流車隊，上暉食品擁有著數十年的食品生產製造經驗，擁有合格的廠房規格與專業設備，同時服務國際與國內各大品牌，提供OEM代工生產服務。現轉型為中央廚房，提供香臨食品旗下餐飲原物料，同時開發自製商品。'
  },
  {
    id: 5,
    image: '/business/3-pic-6.jpg',
    businessType: '影視事業',
    businessType2: 'Media Studio',
    title: '福汎國際有限公司',
    content:
      '福汎FORFAM<br>跳脫框架、不只是影像團隊，創意是福汎核心宗旨，有創意才能把影像作品帶入生命力。沒有創意的影片就像是沒有靈魂的軀殼。福汎作品不僅有鮮明的辨識度，獨創性的影視作品，豐富了影像、廣告、音樂MV等作品。',
    website: 'https://www.instagram.com/staysolid4fam'
  },
  {
    id: 7,
    image: '/business/3-pic-7.jpg',
    businessType: '裝修工程事業',
    businessType2: 'Decoration Engineering Business ',
    title: '家荷工程股份有限公司',
    content:
      '家荷工程 專業合法裝修設計團隊<br>家荷善於傾聽業主需求、耐心溝通，在梳理整合需求後，提出最符合業主的快速執行工程方案。我們擅長室內設計與空間規劃、老屋翻修等工程統包服務。我們同時專注於每個細節，為客戶把關每一項施工品質。'
  }
])

// const openBsLink1 = () => {
//   window.open('https://www.104.com.tw/company/1a2x6bkiyq', '_blank')
// }
// const openBsLink2 = () => {
//   window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
// }
// const openBsLink3 = () => {
//   window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
// }
// const openBsLink4 = () => {
//   window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
// }
// const openBsLink5 = () => {
//   window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
// }
</script>

<style lang="scss">
.businessContainer {
  position: relative;
  display: inline-block;
  width: 80vw;
  margin: 2vw 10vw;
}
.rectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  .text {
    color: white;
    flex-grow: 1;
    text-align: center;
    font-size: 20px;
  }
}

.rectangle::after {
  content: '';
  background-color: red;
  width: 40px;
  height: 100%;
}

.businessImage {
  /* width: 350px; */
  height: 450px;
  /* margin: 17px; */
}

.businessText {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(249, 248, 248, 0.5);
  color: rgb(12, 12, 12);
  text-align: center;
  padding: 10px;
  /* margin: 35px 0; */
}
.businessCard {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 400px; */
  @media (min-width: 996px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    /* width: 400px; */
  }
}
.businessBtn {
  width: 100%;
  margin: 5px 0;
  font-size: 12px;
}
.businessCard1 {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
}
.businessPageCard {
  width: 85vw;
  // height: 400px;
  @media (min-width: 1200px) {
    width: 80vw;
    // height: 400px;
  }
  @media (min-width: 1400px) {
    width: 70vw;
    // height: 400px;
  }
  @media (min-width: 1500px) {
    width: 60vw;
    // height: 400px;
  }
}
.newsPageImg {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.businessPageCard2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
}

.businessPageTitle {
  font-size: 1.7rem;
  font-weight: 50;
  margin: 10px;
  color: black;
  font-weight: 500;
  span {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: #bdbdbd;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    span {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 992px) {
    font-size: 2rem;
    span {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
}
.businessPageContent {
  color: #bdbdbd;
  font-size: 15px;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
}
.businessPageBtn {
  color: #ffffff;
  background-color: #e60012;
}
.footerImg {
  background: url('/business/3-pic-10.png') no-repeat;
  background-size: cover;
  background-position: center bottom;
  margin-bottom: 0;
  margin-top: 5%;
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
.footerImg1 {
  width: 100%;
  // height: 30%;
  display: flex;
  flex-direction: column;

  z-index: -1;
}
.footerImg2 {
  img {
    width: 40%;
    height: 100%;
    height: auto;
    position: relative;
    left: 17%;
  }
  // position: absolute;
  // bottom: 5%;
  // left: 22%;
  display: flex;
  flex-direction: row;
  left: 20%;
  // justify-content: center;
  overflow: hidden;
  .footerBText {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    position: absolute;
    top: 97%;
    left: 60%;

    font-size: 1rem;
    font-weight: 500;
    @media (min-width: 568px) {
      display: flex;
      flex-direction: row;
      font-size: 0.7rem;
      top: 98%;
      left: 53%;
    }
    @media (min-width: 768px) {
      font-size: 1.6em;
      top: 98%;
    }
    @media (min-width: 992px) {
      // font-size: 2em;
      top: 98%;
    }
    @media (min-width: 1024px) {
      font-size: 1.6rem;
      top: 94%;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
}
</style>
