<template>
  <q-page>
    <!-- container -->
    <div class="socialContainer q-ma-md">
      <!-- 執行長 -->
      <div class="socialSection1">
        <div class="socialContainerTitle">
          <h4>灌溉養份的種子用良心做事</h4>
          <h4>為社會奉獻！</h4>
          <NuxtImg format="webp" src="/test/paper-web.png" class="gt-sm" />
          <NuxtImg format="webp" src="/test/paper-App.png" class="lt-md" />
        </div>
      </div>
      <!-- 文章欄位 -->
      <div class="socialSection2">
        <div class="socialContainerTitle">
          <h4 class="mgBottom">取之社會、用之社會</h4>
          <p>一本對本土關懷的企業精神，集團參與從事各種公益，同時把關懷的手伸向更多社會不同角落</p>
          <p>為了更有效益的投入公益，未來也將規劃專案部門來關懷弱勢團體，同時一起推動教育與體育活動及藝術文化事務</p>
        </div>
        <!-- icon圖區 -->
        <div class="socialImage">
          <div class="row center-align">
            <div class="col-2 column justify-center items-center col-md-2">
              <NuxtImg format="webp" ref="icon2" src="/social/4-pic-2.png" />
              <p>親子關懷</p>
            </div>
            <div class="col-2 column justify-center items-center col-md-2">
              <NuxtImg format="webp" ref="icon3" src="/social/4-pic-3.png" />
              <p>醫護支持</p>
            </div>
            <div class="col-2 column justify-center items-center col-md-2">
              <NuxtImg format="webp" ref="icon4" src="/social/4-pic-4.png" />
              <p>教育推動</p>
            </div>
            <div class="col-2 column justify-center items-center col-md-2">
              <NuxtImg format="webp" ref="icon5" src="/social/4-pic-5.png" />
              <p>體育贊助</p>
            </div>
            <div class="col-2 column justify-center items-center col-md-2">
              <NuxtImg format="webp" ref="icon6" src="/social/4-pic-6.png" />
              <p>藝文推廣</p>
            </div>
          </div>
        </div>
        <!-- 欄位區 -->
        <div class="checkListArea">
          <!-- 選項欄位 -->
          <div class="listSelect">
            <q-list>
              <template v-for="(item, index) in displayedItems" :key="item.id">
                <q-item>
                  <q-item-section side top>
                    <q-checkbox
                      v-model="item.checked"
                      @click="setSelected(item.id)"
                      :color="item.checked ? 'red' : ''"
                      checked-icon="img:/social/check.svg"
                      unchecked-icon="img:/social/ckbox.svg">
                      <span class="listYear" :style="item.checked ? 'color: red;' : ''">{{ item.year }}</span>
                      <span class="listTxt" :style="item.checked ? 'color: red;' : ''">{{ item.label }}</span>
                    </q-checkbox>
                  </q-item-section>
                </q-item>
                <q-separator spaced v-if="index !== displayedItems.length" style="margin: 0"></q-separator>
              </template>
              <!-- <q-item v-if="!showAll" clickable @click="toggleDisplay">
                <q-item-section class="moreBtn">See More...</q-item-section>
              </q-item> -->
              <!-- <q-item v-else clickable @click="toggleDisplay">
                <q-item-section class="moreBtn">See Less...</q-item-section>
              </q-item> -->
              <div v-if="showAll">
                <!-- 分頁器 -->
                <q-pagination v-model="currentPage" :max="maxPages" />
              </div>
            </q-list>
          </div>

          <NuxtImg format="webp" :src="currentImage" v-if="currentImage" />
        </div>
      </div>
    </div>
    <!-- 安心食品管理 -->
    <div class="socialSection3">
      <div class="sectionTitle">
        <h5>安心食品管理</h5>
        <p>集團秉持源頭管控的作法把關食品安全，從原物遴選到中央廚房製作，嚴格遵循食品安全SOP流程作業。</p>
        <p>落實源頭管理，將風險降低，做好食品安全管理才能提供安心產品。</p>
      </div>
      <div class="sectionImg">
        <NuxtImg format="webp" src="/social/4-pic-15.png" />
        <NuxtImg format="webp" src="/social/4-pic-16.png" />
        <NuxtImg format="webp" src="/social/4-pic-17.png" />
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
      content: 'https://www.dtstw.com/recruit/ogImage.png' // 使用你的圖片路徑
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

// const icon1 = ref(null)
const icon2 = ref(null)
const icon3 = ref(null)
const icon4 = ref(null)
const icon5 = ref(null)
const icon6 = ref(null)

const items = ref([
  {
    id: 'img6',
    year: '2024',
    label: '贊助小小網紅大夢想 第二屆短片選拔活動',
    checked: true,
    images: ['/social/4-pic-21.png', '/social/4-pic-20.png', '/social/4-pic-19.png']
  },
  {
    id: 'img1',
    year: '2023',
    label: '中秋禮盒支持蒙恩聽障烘焙坊',
    checked: false,
    images: ['/social/4-pic-7a.png', '/social/4-pic-7b.png', '/social/4-pic-7c.png', '/social/4-pic-7d.png', '/social/4-pic-7e.png']
  },
  { id: 'img2', year: '2023', label: '贊助捐血活動', checked: false, images: ['/social/4-pic-9a.png'] },
  { id: 'img3', year: '2020', label: '贊助弱勢家庭長期供應豆奶產品', checked: false, images: ['/social/4-pic-10a.png'] },
  {
    id: 'img4',
    year: '2020',
    label: '舉辦「疫情不怕挺醫護，用行動傳愛」活動',
    checked: false,
    images: ['/social/4-pic-11a.png', '/social/4-pic-11b.png', '/social/4-pic-11c.png', '/social/4-pic-11d.png', '/social/4-pic-11e.png']
  },
  {
    id: 'img5',
    year: '2020',
    label: '協辦「防疫新生活 親子童樂趣」活動',
    checked: false,
    images: ['/social/4-pic-12a.png', '/social/4-pic-12b.png', '/social/4-pic-12c.png', '/social/4-pic-12d.png', '/social/4-pic-12e.png']
  }
  // { id: 'img6', year: '1998', label: '黑白講', checked: false, images: ['/social/4-pic-7.png', '/social/4-pic-9.png', '/social/4-pic-10.png'] }
  // 添加更多選項...
])
const itemsPerPage = 6
const showAll = ref(false)
const currentPage = ref(1)
const maxPages = computed(() => Math.ceil(items.value.length / itemsPerPage))
const displayedItems = computed(() => {
  if (showAll.value) {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.value.slice(start, end)
  } else {
    return items.value.slice(0, itemsPerPage)
  }
})

const toggleDisplay = () => {
  showAll.value = !showAll.value // 切換展示狀態
  currentPage.value = 1 // 當按了see more
}

const currentImageIndex = ref(0)

const setSelected = selectedId => {
  items.value.forEach(item => {
    item.checked = item.id === selectedId
  })
  currentImageIndex.value = 0 // 重置照片索引
}

const currentImage = computed(() => {
  const selectedItem = items.value.find(item => item.checked)
  return selectedItem ? selectedItem.images[currentImageIndex.value] : null
})

let animations = [] // 用於存儲所有啟動的動畫

const bounceForward = (icons, index) => {
  if (index >= icons.length) {
    bounceBackward(icons, icons.length - 2) // 從後往前跳
    return
  }

  const animation = gsap.fromTo(
    icons[index].value,
    { y: 0 },
    { y: -10, repeat: 1, yoyo: true, duration: 0.5, force3D: true, onComplete: () => bounceForward(icons, index + 1) }
  )
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
    // const icon1Animation = gsap.fromTo(icon1.value, { y: 0 }, { y: -10, repeat: -1, yoyo: true, duration: 0.5 })
    // animations.push(icon1Animation)
  })

  timer = setInterval(() => {
    const currentItem = items.value.find(item => item.checked)
    if (currentImageIndex.value < currentItem.images.length - 1) {
      // 如果當前照片不是最後一張，則轉到下一張
      currentImageIndex.value += 1
    } else {
      // 如果已經是最後一張照片，則轉到下一組標題
      const currentIndex = items.value.indexOf(currentItem)
      const nextIndex = (currentIndex + 1) % items.value.length
      setSelected(items.value[nextIndex].id)
    }
  }, 3000)
})

onUnmounted(() => {
  animations.forEach(animation => animation.kill()) // 終止所有動畫
  clearInterval(timer)
})
</script>
<style lang="scss" scoped>
.socialSection1 {
  @media (min-width: 992px) {
    padding-bottom: 5%;
  }
}
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
  margin: 1% 0 1% 0;
  align-items: center;
  justify-content: center;
  h4 {
    color: #353535;
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  p {
    text-align: center;
    font-size: 1.125rem;

    font-weight: 300;
    line-height: 28px; /* 155.556% */
  }
  img {
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 992px) {
    h4 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%; /* 51.2px */
    }
    img {
      width: 953px;
      object-fit: contain;
    }
  }
}
.socialImage {
  // width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  img {
    opacity: 0.6;
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
  justify-content: space-between;
  width: 100%;
  align-items: center;
  img {
    width: 42px;
    height: 40px;
    object-fit: contain;
  }
  p {
    color: #5f5f5f;
    text-align: center;

    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 233.333% */
  }
  @media (min-width: 768px) {
    img {
      width: 50.4px;
      height: 48px;
      flex-shrink: 0;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 992px) {
    justify-content: center;
  }
}

//選項區
.socialSection2 {
  width: 100%;
  @media (min-width: 992px) {
    // padding: 0 10%;
  }
}
.checkListArea {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 15%;

  img {
    object-fit: contain;
    // border-radius: 10px;
    width: 100%;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    // padding: 0 10%;
    margin-bottom: 5%;
    padding: 0 7%;
    img {
      object-fit: cover;
      width: 50.7%;
    }
  }
  @media (min-width: 1300px) {
    // flex-direction: row;
    padding: 0 0%;
    img {
      object-fit: contain;
    }
  }
}
.listSelect {
  width: 100%;
  // .q-item {
  //   padding: 0;
  // }

  @media (min-width: 992px) {
    // .q-item__section--side {
    //   padding: 8px 16px;
    // }
    width: 47.7%;
  }
  @media (min-width: 1300px) {
    width: 40.7%;
  }
}
.red-label .q-checkbox__label {
  color: red;
  width: 100%;
}
.moreBtn {
  text-align: center;
}
.listYear {
  color: #353535;
  text-align: center;
  margin-right: 5%;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 992px) {
    font-size: 1.25rem;

    font-weight: 500;
    line-height: 28px; /* 100% */
  }
  @media (min-width: 1200px) {
    font-size: 1.75rem;

    font-weight: 500;
    line-height: 28px; /* 100% */
  }
}
.listTxt {
  color: #2e2e2e;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 233.333% */
  @media (min-width: 992px) {
    font-size: 0.925rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.125rem;
  }
}
// 食品管理
.socialSection3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2%;
  margin: 3% 0;
  .sectionTitle {
    h5 {
      color: #353535;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 900;
      margin: 0;
      margin-bottom: 19px;
    }
    p {
      color: #444;
      text-align: center;
      margin: 0;
      font-size: 1.125rem;

      font-weight: 300;
      line-height: 28px; /* 155.556% */
    }
  }
  .sectionImg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 19px;

    img {
      width: 30%;
    }
  }
  @media (min-width: 992px) {
    padding: 0 5%;
    .sectionTitle {
      h5 {
        font-size: 2rem;
        font-weight: 700;

        line-height: 160%; /* 51.2px */
      }
    }
    // .sectionImg {
    //   // display: flex;
    //   // flex-direction: row;
    //   // justify-content: space-between;

    //   // img {
    //   //   width: 30%;
    //   // }
    // }
  }
}
</style>
