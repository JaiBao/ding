<template>
  <q-page>
    <!-- banner -->

    <div class="full-width">
      <img src="/business/businessBanner.png" />
    </div>
    <!-- content -->
    <div class="businessArea">
      <div class="businessAreaIcon">
        <template v-for="icon in iconsData">
          <div
            class="iconWrapper"
            :class="{ selected: selectedIcon.id === icon.id, hover: hoverState === icon.id }"
            @click="selectIcon(icon)"
            @mouseover="hoverIcon(icon)"
            @mouseout="unhoverIcon(icon)">
            <img :src="currentIcon(icon)" :alt="icon.title" />
            <span class="overlayText" v-if="selectedIcon.id !== icon.id && hoverState !== icon.id">
              {{ icon.note }}
              <br />
              {{ icon.note2 }}
            </span>
            <br />
          </div>
        </template>
      </div>
      <!-- 內容區 -->
      <div class="businessContent">
        <div class="businessContentTxts">
          <div class="businessContentTxt">
            <h5>{{ selectedIcon.title }}</h5>
            <div :style="lineStyle(selectedIcon)"></div>

            <h6>{{ selectedIcon.subtitle }}</h6>
            <p>{{ selectedIcon.content }}</p>
            <p>{{ selectedIcon.content2 }}</p>
          </div>
          <button class="isButton gt-xs" :class="{ 'disabled-button': !selectedIcon.link }" @click="goToLink(selectedIcon.link)" :disabled="!selectedIcon.link">
            前往官網
            <q-icon name="north_east" :style="{ color: selectedIcon.link ? 'red' : 'grey' }" />
          </button>
        </div>
        <!-- 假設每一個 icon 都有一張相對應的圖片 -->
        <div class="businessContentImg"><img :src="selectedIcon.img" /></div>
        <div class="appBtn">
          <button class="isButton xs" :class="{ 'disabled-button': !selectedIcon.link }" @click="goToLink(selectedIcon.link)" :disabled="!selectedIcon.link">
            前往官網
            <q-icon name="north_east" :style="{ color: selectedIcon.link ? 'red' : 'grey' }" />
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

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
  ]
})
const goToLink = link => {
  window.open(link, '_blank')
}
const lineStyle = icon => {
  const color1 = icon.lineColor[0]
  const color2 = icon.lineColor[1]
  return {
    width: '80%',
    height: '2px',
    borderRadius: '99px',
    background: `linear-gradient(90deg, ${color1} 1.67%, ${color2} 101.67%)`
  }
}

// icon 的資料結構
const iconsData = [
  {
    id: 'water',
    src: '/business/waterGrey.png',
    originalSrc: '/business/water.png',
    note: '飲用水',
    note2: '事業',
    title: '飲用水事業｜水泉水生技股份有限公司',
    subtitle: 'Drinking Water Business',
    lineColor: ['#38B7FF', '#2647F2'],
    content:
      '水泉水生技股份有限公司長年經營包裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始，不斷思索如何研發出不單單符合食品安全的飲用水，而是更進一步的從人體所需為出發點，思索如何補充其關鍵元素，使人體能達到平衡為目的的優質產品。',
    img: '/business/waterImg.png',
    link: 'https://www.springwater.tw'
  },
  {
    id: 'shon',
    src: '/business/shonGrey.png',
    originalSrc: '/business/shon.png',
    note: '食品',
    note2: '製造業',
    title: '食品製造業',
    subtitle: 'Catering Business',
    lineColor: ['#F3E400', '#FFB629'],
    content:
      '上暉食品為臺灣專業的食材供應商，深耕台灣早午餐等餐飲市場，上暉食品同時擁有自己的專業物流車隊，上暉食品擁有著數十年的食品生產製造經驗，擁有合格的廠房規格與專業設備，同時服務國際與國內各大品牌，提供OEM 代工生產服務。',
    content2: '現轉型為中央廚房，提供香臨食品旗下餐飲原物料，同時開發自製商品。',
    img: '/business/shonImg.png',
    link: 'https://www.facebook.com/iamsxb/?locale=zh_TW'
  },
  {
    id: 'xlin',
    src: '/business/xlinGrey.png',
    originalSrc: '/business/xlin.png',
    note: '餐飲',
    note2: '事業',
    title: '餐飲事業',
    subtitle: 'Catering Business',
    lineColor: ['#40FF8D', '#02963E'],
    content:
      '香臨食品為臺灣專業的連鎖餐飲品牌經營公司，早期以地攤生意起家，因為餐點好吃、品質好而受到消費者推崇與喜愛，於是設立門市經營。在深耕餐飲市場多年後，創立檢證合格的食品工廠。一路走來，始終如一，秉持著「經營誠信」、「服務用心」、「安心實在」，讓香臨食品得以立足在台灣食品餐飲業。',
    img: '/business/xlinImg.png',
    link: 'https://www.chinabing.net'
  },
  {
    id: 'forfam',
    src: '/business/forfamGrey.png',
    originalSrc: '/business/forfam.png',
    note: '影視',
    note2: '事業',
    title: '影視事業',
    subtitle: 'Media Studio',
    lineColor: ['#898989', '#252525'],
    content:
      '福汎FORFAM跳脫框架、不只是影像團隊，創意是福汎核心宗旨，有創意才能把影像作品帶入生命力。沒有創意的影片就像是沒有靈魂的軀殼。福汎作品不僅有鮮明的辨識度，獨創性的影視作品，豐富了影像、廣告、音樂MV等作品。',
    img: '/business/forfamImg.png',
    link: 'https://www.instagram.com/staysolid4fam'
  },
  {
    id: 'home',
    src: '/business/homeGrey.png',
    originalSrc: '/business/home.png',
    note: '裝修工程',
    note2: '事業',
    title: '食品製造業',
    subtitle: 'Decoration Engineering Business',
    lineColor: ['#186EF', '#003081'],
    content:
      '家荷工程 專業合法裝修設計團隊家荷善於傾聽業主需求、耐心溝通，在梳理整合需求後，提出最符合業主的快速執行工程方案。我們擅長室內設計與空間規劃、老屋翻修等工程統包服務。我們同時專注於每個細節，為客戶把關每一項施工品質。',
    img: '/business/homeImg.png'
    // link: 'https://example2.com'
  }
]

const selectedIcon = ref(iconsData[0]) // 預設選擇第一個 icon

const selectIcon = icon => {
  selectedIcon.value = icon
}

const hoverState = ref('')

const hoverIcon = icon => {
  hoverState.value = icon.id
}

const unhoverIcon = () => {
  hoverState.value = null
}
const currentIcon = icon => {
  if (selectedIcon.value.id === icon.id || hoverState.value === icon.id) {
    return icon.originalSrc
  }
  return icon.src
}
</script>

<style lang="scss">
.full-width {
  img {
    width: 100%;
    object-fit: contain;
  }
}
.businessContent {
  background: url('/test/bgsocial.png') no-repeat center 20% / cover;
  position: relative;
  display: flex;
  flex-direction: column;

  .businessContentTxts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
      margin: 0;
      margin-bottom: 1%;
    }
    h6 {
      margin: 0;
      margin-bottom: 5%;
    }
    p {
      margin: 0;
    }
  }
  .businessContentImg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 0 0 0;
    padding: 5%;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 8%;
    padding-bottom: 8%;
    // height: 90vh;
    .businessContentTxts {
      width: 60%;
      padding: 0 5%;
    }
    .businessContentImg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 30%;
      margin: 0;
      padding: 0;
      img {
        object-fit: contain;
        width: 100%;
      }
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    padding-top: 5%;
    padding-bottom: 2%;
    .businessContentTxts {
      width: 60%;
    }
  }
}
.businessArea {
  position: relative;
}
.businessAreaIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  width: 100%;
  left: 0%;
  @media (min-width: 768px) {
    position: absolute;
    justify-content: flex-end;
    top: -10%;
    z-index: 1000;
    left: 0%;
    width: 92%;
  }
  // @media (min-width: 1700px) {
  //   top: -7%;
  // }
}
.iconWrapper {
  position: relative;
  width: 60px;

  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out; /* 添加過渡效果 */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlayText {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    width: 100%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    width: 7%;
  }
  @media (min-width: 1700px) {
    width: 7%;
  }
}

.iconWrapper.selected,
.iconWrapper.hover {
  transform: scale(1.2); /* 放大1.1倍 */
}

.appBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.isButton {
  // display: inline-flex;
  padding: 10px 0;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  border: 2px solid #e60113;
  background: transparent;
  color: #e60113;
  width: 176px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 6%;
  @media (min-width: 768px) {
    margin-top: 10%;
    font-size: 21px;
    max-width: 218px;
    padding: 20px 0;
  }
}
.disabled-button {
  // display: inline-flex;
  padding: 10px 0;
  justify-content: center;
  cursor: not-allowed;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  border: 2px solid rgba(102, 102, 102, 1);
  background: transparent;
  color: rgba(102, 102, 102, 1);
  max-width: 118px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10%;
  @media (min-width: 768px) {
    font-size: 21px;
    max-width: 218px;
    padding: 20px 0;
  }
}
</style>
