<template>
  <q-page>
    <!-- container -->
    <div class="socialContainer q-ma-md">
      <!-- 執行長 -->
      <div class="socialSection1">
        <div class="socialContainerTitle">
          <h4>灌溉養份的種子用良心做事</h4>
          <h4>為社會奉獻！</h4>
          <img src="/test/paper.png" class="gt-sm" />
          <img src="/test/titleApp.png" class="lt-md" />
        </div>
      </div>
      <!-- 文章欄位 -->
      <div class="socialSection2">
        <div class="socialContainerTitle">
          <h4 class="mgBottom">取之社會、用之社會</h4>
          <p>一本對本土關懷的企業精神集團參與從事各種公益同時把關懷的手伸向更多社會不同角落</p>
          <p>為了更有效益的投入公益未來也將規劃專案部門來關懷弱勢團體同時一起推動教育與體育活動及藝術文化事務</p>
        </div>
        <!-- icon圖區 -->
        <div class="socialImage q-ma-md">
          <div class="row center-align">
            <div class="col-4 column justify-center items-center col-md-2">
              <img ref="icon2" src="/social/4-pic-2.png" />
              <p>親子關懷</p>
            </div>
            <div class="col-4 column justify-center items-center col-md-2">
              <img ref="icon3" src="/social/4-pic-3.png" />
              <p>醫護支持</p>
            </div>
            <div class="col-4 column justify-center items-center col-md-2">
              <img ref="icon4" src="/social/4-pic-4.png" />
              <p>教育推動</p>
            </div>
            <div class="col-4 column justify-center items-center col-md-2">
              <img ref="icon5" src="/social/4-pic-5.png" />
              <p>體育贊助</p>
            </div>
            <div class="col-4 column justify-center items-center col-md-2">
              <img ref="icon6" src="/social/4-pic-6.png" />
              <p>藝文推廣</p>
            </div>
          </div>
        </div>
        <!-- 欄位區 -->
        <div class="checkListArea">
          <!-- 選項欄位 -->
          <div class="q-pa-md listSelect">
            <q-list>
              <template v-for="(item, index) in displayedItems" :key="item.id">
                <q-item>
                  <q-item-section side top>
                    <q-checkbox v-model="item.checked" @click="setSelected(item.id)" :color="item.checked ? 'red' : ''">
                      <span :style="item.checked ? 'color: red;' : ''">{{ item.year }}</span>
                      <span :style="item.checked ? 'color: red;' : ''">{{ item.label }}</span>
                    </q-checkbox>
                  </q-item-section>
                </q-item>
                <q-separator spaced v-if="index !== displayedItems.length"></q-separator>
              </template>
              <q-item clickable @click="toggleDisplay">
                <q-item-section class="moreBtn">{{ showAll ? 'See Less...' : 'See More...' }}</q-item-section>
              </q-item>
              <q-separator spaced></q-separator>
            </q-list>
          </div>

          <img :src="currentImage" v-if="currentImage" />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap'

useHead({
  title: '鼎泰勝集團 - 企業社會責任',
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
      content: 'https://www.dtstw.com/social'
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

const icon1 = ref(null)
const icon2 = ref(null)
const icon3 = ref(null)
const icon4 = ref(null)
const icon5 = ref(null)
const icon6 = ref(null)

const items = ref([
  { id: 'img1', year: '2023', label: '2023 贊助捐血活動', checked: true, imgUrl: '/social/4-pic-7.png' },
  { id: 'img2', year: '2022', label: '捐贈 彰化慈愛教養院 物資礦泉水', checked: false, imgUrl: '/social/4-pic-9.png' },
  { id: 'img3', year: '2020', label: '贊助弱勢家庭長期供應豆奶產品', checked: false, imgUrl: '/social/4-pic-10.png' },
  { id: 'img4', year: '2020', label: '舉辦「疫情不怕挺醫護，用行動傳愛」活動', checked: false, imgUrl: '/social/4-pic-11.png' },
  { id: 'img5', year: '2020', label: '協辦「防疫新生活 親子童樂趣」活動', checked: false, imgUrl: '/social/4-pic-12.png' },
  { id: 'img6', year: '1998', label: '黑白講', checked: false, imgUrl: '/social/4-pic-13.png' }
  // 添加更多選項...
])

const showAll = ref(false)
const displayedItems = computed(() => items.value.slice(0, showAll.value ? items.value.length : 5))

const toggleDisplay = () => {
  showAll.value = !showAll.value
}

const setSelected = selectedId => {
  items.value.forEach(item => {
    item.checked = item.id === selectedId
  })
}

const currentImage = computed(() => {
  const selectedItem = items.value.find(item => item.checked)
  return selectedItem ? selectedItem.imgUrl : null
})

let animations = [] // 用於存儲所有啟動的動畫

const bounceForward = (icons, index) => {
  if (index >= icons.length) {
    bounceBackward(icons, icons.length - 2) // 從後往前跳
    return
  }

  const animation = gsap.fromTo(icons[index].value, { y: 0 }, { y: -10, repeat: 1, yoyo: true, duration: 0.5, onComplete: () => bounceForward(icons, index + 1) })
  animations.push(animation)
}

const bounceBackward = (icons, index) => {
  if (index < 0) {
    bounceForward(icons, 1) // 前面往後跳
    return
  }

  const animation = gsap.fromTo(icons[index].value, { y: 0 }, { y: -10, repeat: 1, yoyo: true, duration: 0.5, onComplete: () => bounceBackward(icons, index - 1) })
  animations.push(animation)
}
let timer

onMounted(() => {
  nextTick().then(() => {
    const forwardIcons = [icon2, icon3, icon4, icon5, icon6]
    bounceForward(forwardIcons, 0)
    const icon1Animation = gsap.fromTo(icon1.value, { y: 0 }, { y: -10, repeat: -1, yoyo: true, duration: 0.5 })
    animations.push(icon1Animation)
  })

  timer = setInterval(() => {
    const currentItem = items.value.find(item => item.checked)
    const currentIndex = items.value.indexOf(currentItem)
    const nextIndex = (currentIndex + 1) % items.value.length
    setSelected(items.value[nextIndex].id)
  }, 5000)
})

onUnmounted(() => {
  animations.forEach(animation => animation.kill()) // 終止所有動畫
  clearInterval(timer)
})
</script>
<style lang="scss" scoped>
.socialContainer {
  display: flex;
  flex-direction: column;
  background: url('/test/bgsocial.png') no-repeat center / cover;
  align-items: center;
  justify-content: center;
  .mgBottom {
    margin-bottom: 2%;
  }

  h4 {
    text-align: center;
    color: #040000;
    font-weight: bold;
    margin: 0;
    font-size: 30px;
  }
}
.socialContainerTitle {
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  align-items: center;
  justify-content: center;
}
.socialImage {
  // width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 32%;
  }
  .col-6 {
    p {
      text-align: center;
    }
  }
}

.center-align {
  display: flex;
  justify-content: center;
  align-items: center;
}

//選項區
.checkListArea {
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
    width: 100%;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    padding: 0 10%;
    img {
      width: 59.7%;
    }
  }
}
.listSelect {
  width: 100%;
  @media (min-width: 992px) {
    width: 39.7%;
  }
}
.red-label .q-checkbox__label {
  color: red;
}
.moreBtn {
  text-align: center;
}
</style>
