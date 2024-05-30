<template>
  <q-page>
    <div class="recruitContent">
      <!-- 大圖視差 -->
      <div class="full-width recruitSection1">
        <NuxtImg format="webp" class="section1Img" src="/recruit/5-pic-1.png" />
        <div class="section1Title">
          <div class="titleContent">
            <h2>加入鼎泰勝</h2>
            <div class="whiteHr"></div>
            <h6>Achieve beyond the ordinary self</h6>
          </div>
        </div>
      </div>
      <div class="recruitSection2">
        <!-- 文字 -->
        <div class="recruitText">
          <p>在鼎泰勝，我們深信每個事業體的獨特性都需要相對應的專業人才。</p>
          <p>在這裡，我們熱切期待你能發揮自己的最佳表現，成就超越平凡的自我。</p>
          <p>讓我們肩並肩共進，於鼎泰勝的大舞台上揮灑你的才華與汗水。</p>
          <p>無論何時，我們都堅定地、認真地向著我們的新未來邁進。</p>
          <p>揮灑汗水、展現才華、實現夢想，我們在鼎泰勝的每一天，都是努力、認真，與你一起打造美好的新未來！</p>
        </div>
        <!-- 無縫滾動 -->
        <div id="overViewPhotoNews">
          <div class="row cont" ref="contRef" @scroll="onScroll">
            <q-card
              v-for="card in cardData"
              :key="card.id"
              class="news col-md-3 col-sm-6 image-card"
              :ref="card.id"
              @mouseenter="
                () => {
                  scrollToCenter(card.id)
                  handleCardHover()
                }
              "
              @mouseleave="handleCardLeave">
              <div class="image-content">
                <NuxtImg format="webp" :src="card.imgSrc" :alt="card.altText" />
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <!-- 加入我們 -->
      <div class="recruitSection3">
        <div class="section3Title">
          <NuxtImg format="webp" class="gt-xs" src="/recruit/joinUsLine.png" />
          <NuxtImg format="webp" class="lt-sm" src="/recruit/joinUsApp.png" />
        </div>
        <div class="section3Content">
          <!-- 加入按鈕區域 -->
          <div class="section3Top">
            <h4>加入我們吧！</h4>
            <button @click="openLink">
              我要應徵
              <q-icon name="north_east" style="color: red" />
            </button>
            <ul>
              <li>勞保健保、勞退提撥金</li>
              <li>就業保險、職災保險、員工團體保險</li>
              <li>三節獎金禮品、特殊節日獎金禮品</li>
              <li>咖啡吧、免費下午茶、旅遊補助、伙食津貼</li>
              <li>員工購物優惠、員工制服 、員工餐</li>
              <li>員工教育訓練、培訓課程</li>
            </ul>
          </div>
          <!-- 職位欄位 -->
          <div class="section3Bottom">
            <q-list class="recruitList">
              <q-expansion-item expand-icon-toggle expand-icon="img:/recruit/circle.svg" expand-separator label="Senior executive" caption="高階主管｜集團總部">
                <q-card>
                  <q-card-section>
                    能夠獨立掌控與執行公司任何企劃，並與品牌設計學習交換相關專業知識。對內，需能協助團隊有效率地管理專案執行並產出成果；對外，則需要對應客戶業務窗口多樣態的商業問題及設計需求，綜合客戶多元考量，並有能力做出適當且正確的回應。
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator />
              <q-expansion-item expand-icon-toggle expand-icon="img:/recruit/circle.svg" expand-separator label="Production operator" caption="生產線作業員 | 飲用水事業">
                <q-card>
                  <q-card-section>
                    負責穩定及專業地操作生產機台，從產品組裝到檢驗、包裝及出貨等全程。雖為簡單易學的職務，但專注力與耐心是關鍵，期待您能輕鬆適應及投入工作節奏。
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator />
              <q-expansion-item
                expand-icon-toggle
                expand-icon="img:/recruit/circle.svg"
                expand-separator
                label="Store staff"
                caption="門市儲備幹部 / 廚助 / 兼職人員｜餐飲事業">
                <q-card>
                  <q-card-section>
                    餐飲不僅是技能，更是傳遞快樂的藝術。當精心製作的佳餚送至顧客手中，見到顧客的滿足笑容，便是我們最大的榮耀。如果您對餐飲充滿熱情，誠摯邀請您加入我們，一同將美食夢想化為現實。
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator />
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
useHead({
  title: '鼎泰勝集團 - 人才招募',
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
      content: 'https://www.dtstw.com/recruit/ogImage.png' // 使用你的圖片路徑
    },
    {
      property: 'og:image:alt',
      content: '鼎泰勝圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.dtstw.com/recruit'
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

const cardData1 = Array.from({ length: 14 }, (_, index) => ({
  id: `card${index + 1}`,
  imgSrc: `/recruit/5-pic-a${index + 1}.png`,
  altText: `image ${index + 1}`
}))
const cardData2 = Array.from({ length: 14 }, (_, index) => ({
  id: `card${index + 14}`,
  imgSrc: `/recruit/5-pic-a${index + 1}.png`,
  altText: `image ${index + 1}`
}))
const cardData = [...cardData1, ...cardData2]
const cardRefs = Object.fromEntries(cardData.map(card => [card.id, ref(null)]))

const contRef = ref(null)
const scrollToCenter = cardKey => {
  const cardEl = cardRefs[cardKey].value
  const contEl = contRef.value
  if (cardEl && contEl) {
    const contCenter = contEl.offsetWidth / 2
    const cardCenter = cardEl.offsetWidth / 2
    const offsetLeft = cardEl.offsetLeft
    const scrollLeftTarget = offsetLeft - contCenter + cardCenter

    const onScroll = () => {
      if (Math.abs(contEl.scrollLeft - scrollLeftTarget) < 5) {
        //到附近
        contEl.classList.add('paused')
        contEl.removeEventListener('scroll', onScroll) // 移除滾動
      }
    }
    contEl.addEventListener('scroll', onScroll)

    contEl.scroll({
      left: scrollLeftTarget,
      behavior: 'smooth'
    })
  }
}

const handleCardHover = () => {
  contRef.value.classList.add('paused')
}

const handleCardLeave = () => {
  contRef.value.classList.remove('paused')
}

const openLink = () => {
  window.open('https://www.104.com.tw/company/1a2x6bkiyq', '_blank')
}
// 新增的格式化函數
</script>
<style lang="scss" scoped>
.recruitContent {
  background: url('/recruit/recruitBg.png') no-repeat left -30% / contain;
}

.recruitSection1 {
  margin-bottom: 3%;
  position: relative;
  // height: 800px;
  .section1Img {
    width: 100%;
    filter: blur(1px);
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
      margin: 0;
      color: #fff;
      text-align: center;

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
    .whiteHr {
      width: 180px;
      height: 2px;
      flex-shrink: 0;
      border-radius: 99px;
      background: #fff;
      text-align: center;
      margin: 1% 0;
    }
  }
  @media (min-width: 992px) {
    .section1Title {
      h2 {
        margin: 0;
        font-size: 3rem;
        font-weight: 700;
        // line-height: 28px; /* 58.333% */
      }
      h6 {
        margin: 0;
        font-weight: 500;
        line-height: 28px; /* 100% */
        font-size: 1.75rem;
      }
    }
  }
}

.recruitSection2 {
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
}
.recruitText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  text-align: center;
  // font-family: Noto Sans Tamil;
  font-size: 0.875rem;
  font-style: normal;
  padding: 0 10%;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  @media (min-width: 992px) {
    // width: 30%;
    padding: 5% 26%;
    p {
      color: var(--, #222);
      text-align: center;
      // font-family: Noto Sans;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
  }
}

//六大產業圖片區卡片
//六大產業圖片區
#overViewPhotoNews {
  overflow: hidden;
  width: 100%;
  height: auto;
  background: transparent;
  position: relative;

  .cont {
    display: flex; /* 卡片横向排列 */
    width: calc(1000%);
    animation: move 56s linear infinite;
    background: transparent;
    @media (min-width: 568px) {
      width: calc(730%);
    }
    @media (min-width: 1200px) {
      width: calc(730%);
    }
  }
  //圖片區卡片
  .image-card {
    flex: 1; /* 卡片都有相等的 */
    width: 20%;
    height: auto;
    overflow: hidden;
    background: transparent;
    padding: 0 0.1%;
    cursor: pointer;
  }
  // &:hover .cont {
  //   animation-play-state: paused;
  // }

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .paused {
    animation-play-state: paused !important;
  }
  //六大產業圖片區卡片內容
  .image-content {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }

  //六大產業圖片區卡片滑鼠觸碰放大效果

  // .image-card:hover .image-content img {
  //   transform: scale(1.1);
  // }
}
// 加入我們
.section3Title {
  width: 100%;
  margin-top: 5%;
  img {
    width: 100%;
  }
}
.section3Content {
  display: flex;
  flex-direction: column;
  margin: 2% 0;
  padding: 0 5%;
  @media (min-width: 992px) {
    padding: 0 0%;
    flex-direction: row;
  }
}
.section3Top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  h4 {
    color: #353535;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  button {
    border-radius: 999px;
    border: 2px solid #e60113;
    background: transparent;
    display: flex;
    cursor: pointer;
    // width: 176px;
    // height: 52px;
    padding: 12px 54px;
    justify-content: center;
    align-items: center;
    color: #e60113;
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5%;
  }
  li {
    color: #5f5f5f;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 150% */
  }

  @media (min-width: 992px) {
    padding: 0 0 0 12%;
    width: 48.9%;
    h4 {
      color: #222;
      font-size: 28px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
    button {
      padding: 20px 54px;

      color: #e60113;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    li {
      color: #222;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 175% */
    }
  }
}
.section3Bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 992px) {
    padding: 0 1%;
    width: 68.9%;
    padding-right: 10%;
  }
}
.recruitList {
  border-right: 1px solid #5f5f5f;
  border-left: 1px solid #5f5f5f;
  width: 100%;
  padding: 0 1%;
}
.my-custom-class {
  font-size: 20px;
  color: blue;
}
</style>
