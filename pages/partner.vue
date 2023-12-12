<template>
  <q-page>
    <!-- banner -->
    <div class="full-width businessSection1">
      <img class="section1Img" src="/business/businessBanner.png" />
      <div class="section1Title">
        <div class="titleContent">
          <h2>Business</h2>
          <h6>合作夥伴</h6>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="businessArea">
      <div class="businessAreaIcon gt-xs">
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
      <div class="businessAreaIcon xs">
        <swiper :slides-per-view="3" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide v-for="icon in iconsData" :key="icon.id">
            <div
              class="iconWrapper"
              :class="{ selected: selectedIcon.id === icon.id, hover: hoverState === icon.id }"
              @click="selectIcon(icon)"
              @mouseout="unhoverIcon(icon)">
              <img :src="currentIcon(icon)" :alt="icon.title" />
              <span class="overlayText" v-if="selectedIcon.id !== icon.id && hoverState !== icon.id">
                {{ icon.note }}
                <br />
                {{ icon.note2 }}
              </span>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 內容區 -->
      <div class="businessContent">
        <div class="businessContentTxts">
          <div class="businessContentTxt">
            <h5>
              <span>{{ selectedIcon.title }} ｜</span>
              {{ selectedIcon.title2 }}
            </h5>
            <div :style="lineStyle"></div>

            <h6>{{ selectedIcon.subtitle }}</h6>
            <p>{{ selectedIcon.content }}</p>
            <p>{{ selectedIcon.content2 }}</p>
            <p>{{ selectedIcon.content3 }}</p>
            <br />
            <p>{{ selectedIcon.content4 }}</p>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css' // Import Swiper styles

const onSwiper = swiper => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

useHead({
  title: '鼎泰勝集團 - 合作夥伴',
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
      content: 'https://www.dtstw.com/partner'
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
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})

const lineStyle = computed(() => {
  const color1 = selectedIcon.value.lineColor[0]
  const color2 = selectedIcon.value.lineColor[1]
  const baseStyle = {
    width: '80%',
    height: '2px',
    borderRadius: '99px',
    background: `linear-gradient(90deg, ${color1} 1.67%, ${color2} 101.67%)`
  }

  if (isMobile.value) {
    return {
      ...baseStyle,
      width: '100%'
    }
  }

  return baseStyle
})

// icon 的資料結構
const iconsData = [
  {
    id: 'water',
    src: '/business/waterGrey.png',
    originalSrc: '/business/water.png',
    note: '飲用水',
    note2: '事業',
    title: '飲用水事業',
    title2: '水泉水生技股份有限公司',
    subtitle: 'Drinking Water Business',
    lineColor: ['#38B7FF', '#2647F2'],
    content:
      '水泉水生技股份有限公司長年經營包裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始，不斷思索如何研發出不單單符合食品安全的飲用水，而是更進一步的從人體所需為出發點，思索如何補充其關鍵元素，使人體能達到平衡為目的的優質產品。',
    img: '/business/waterImg.png',
    link: 'https://www.springwater.tw'
  },
  {
    id: 'world',
    src: '/business/worldGrey.png',
    originalSrc: '/business/world.png',
    note: '飲用水',
    note2: '製造',
    title: '飲用水製造',
    title2: '世間水食品股份有限公司',
    subtitle: 'Drinking Water Production',
    lineColor: ['#38B7FF', '#2647F2'],
    content: '「世間水」水廠位於台灣彰化快官冷泉，享有純淨水源，水質保持甘醇，環境清幽，未受汙染。',
    content2: '我們擁有ISO 22000和HACCP雙重認證，提供安心的瓶裝水。我們擁有ISO 22000和HACCP雙重認證，提供安心的瓶裝水。',
    content4:
      '純淨水源的「世間水」水廠，位於台灣三大冷泉之一的彰化快官冷泉處，地處環境清幽純淨，水質未受任何汙染，保留住水質的甘醇度。嚴謹的製作與品管，榮獲ISO 22000與HACCP國家級的雙重認證，提供消費者安心無虞甘醇的瓶裝水。',
    img: '/business/worldImg.png',
    link: 'https://www.springwater.tw/world'
  },
  // {
  //   id: 'xlin',
  //   src: '/business/xlinGrey.png',
  //   originalSrc: '/business/xlin.png',
  //   note: '餐飲',
  //   note2: '事業',
  //   title: '餐飲事業',
  //   title2: '香臨食品股份有限公司',
  //   subtitle: 'Catering Business',
  //   lineColor: ['#40FF8D', '#02963E'],
  //   content:
  //     '香臨食品是一家在台灣具有專業地位的連鎖餐飲品牌經營公司。我們自豪的旗下品牌「中華一餅」，以獨特而美味的潤餅，贏得了消費者的一致好評與厚愛。香臨食品始於小小地攤業，憑藉著美味潤餅和優質的食品，迅速擄獲消費者的推崇和喜愛，逐漸發展成立了實體門市。我們始終如一地提供著對品質、對顧客的承諾，讓每一位來到香臨食品的顧客都能感受到我們的用心與真誠。',
  //   content2: '香臨食品將不忘初心，致力於為消費者提供更多、更好、更安全的美食選擇，未來也將持續發展新的餐飲品牌，為台灣的餐飲業寫下新的篇章。',
  //   img: '/business/xlinImg.png',
  //   link: 'https://www.chinabing.net'
  // },
  {
    id: 'forfam',
    src: '/business/forfamGrey.png',
    originalSrc: '/business/forfam.png',
    note: '影視',
    note2: '事業',
    title: '影視事業',
    title2: '福汎國際有限公司',
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
    title: '裝修工程事業',
    title2: '家荷工程股份有限公司',
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

const autoChangeInterval = 30000 // 間隔時間
let autoChangeTimer

// 自動更換icon
const autoChangeIcon = () => {
  const currentIndex = iconsData.findIndex(icon => icon.id === selectedIcon.value.id)
  const nextIndex = (currentIndex + 1) % iconsData.length // 下一個
  selectIcon(iconsData[nextIndex])
}

// 調換時間
autoChangeTimer = setInterval(autoChangeIcon, autoChangeInterval)

// 卸載
onUnmounted(() => {
  clearInterval(autoChangeTimer)
})
</script>

<style lang="scss" scoped>
.businessSection1 {
  margin-bottom: 3%;
  position: relative;
  // height: 800px;
  .section1Img {
    width: 100%;

    object-fit: contain;
  }
  .titleContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section1Title {
    position: absolute;
    width: 100%;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    h2 {
      margin: 10px 0;
      color: #e60012;
      text-align: center;
      margin: 0;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h6 {
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 600;

      line-height: normal;
      margin: 0;
    }
  }
  @media (min-width: 768px) {
    .section1Title {
      left: 18%;
      h2 {
        margin: 20px 0;
        font-size: 3.25rem;
        font-weight: 900;
        line-height: 28px; /* 58.333% */
      }
      h6 {
        margin: 20px 0;
        font-weight: 700;
        line-height: 28px; /* 100% */
        font-size: 2rem;
      }
    }
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
    padding: 0 5%;
    h5 {
      margin: 0;
      margin-bottom: 1%;
      font-size: 1.125rem;
      color: rgba(0, 0, 0, 1);
      span {
        font-weight: 800;
      }
      @media (min-width: 768px) {
        font-size: 1.3125rem;
      }
    }
    h6 {
      margin: 0;
      font-weight: 300;
      margin-bottom: 5%;
      font-size: 1.125rem;

      @media (min-width: 768px) {
        font-size: 1.3125rem;
      }
    }
    p {
      color: rgba(108, 108, 108, 1);
      margin: 0;
      font-size: 1.125rem;
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
    width: 100%;
    justify-content: space-between;
    // padding-bottom: 8%;
    // height: 90vh;
    .businessContentTxts {
      width: 55%;
      padding: 0 5%;
      margin-right: 5%;
    }
    .businessContentImg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 38%;
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
    padding-top: 3%;
    padding-bottom: 4%;
    .businessContentTxts {
      width: 50%;
    }
    .businessContentImg {
      width: 30%;
    }
  }
  @media (min-width: 1450px) {
    padding-top: 3%;
  }
}
.businessArea {
  position: relative;
}
.swiper-slide {
  padding: 15px 0; // 或你需要的其他值
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
    top: -15%;
    z-index: 1000;
    left: 0%;
    width: 90%;
  }
  @media (min-width: 992px) {
    top: -17%;
  }
}
.iconWrapper {
  position: relative;
  width: 100px;
  height: 100px;
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
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  @media (min-width: 768px) {
    width: 80px;
    height: auto;
  }
  @media (min-width: 1700px) {
    width: 7%;
    height: auto;
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
  padding: 12px 0;
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
    margin-bottom: 0%;
    width: 218px;
    padding: 12px 0;
  }
}
.disabled-button {
  padding: 12px 0;
  justify-content: center;
  cursor: not-allowed;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  border: 2px solid rgba(102, 102, 102, 1);
  background: transparent;
  color: rgba(102, 102, 102, 1);
  width: 176px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 6%;
  @media (min-width: 768px) {
    margin-top: 10%;
    font-size: 21px;
    margin-bottom: 0%;
    width: 218px;
    padding: 12px 0;
  }
  // padding: 12px 0;
  // justify-content: center;
  // cursor: not-allowed;
  // align-items: center;
  // gap: 14px;
  // border-radius: 999px;
  // border: 2px solid rgba(102, 102, 102, 1);
  // background: transparent;
  // color: rgba(102, 102, 102, 1);
  // width: 176px;
  // font-size: 16px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: normal;
  // margin-top: 10%;
  // @media (min-width: 768px) {
  //   font-size: 21px;
  //   max-width: 218px;
  //   padding: 12px 0;
  // }
}
</style>
