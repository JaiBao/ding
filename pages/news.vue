<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="full-width pageParallax">
      <q-parallax src="/news/2-pic-1.jpg">
        <div class="absolute-left-center custom-caption2">
          <div class="text-black text-h2 alight-center">最新消息</div>
          <div class="text-grey text-h6 alight-center">News</div>
        </div>
      </q-parallax>
    </div>
    <!-- table區 -->
    <div class="row justify-center">
      <!-- <div class="q-pa-md row justify-end newsSearch">
    <q-select v-model="selectedTime" :options="times"  clearable
    @clear="selectedTime = defaultTime"
    option-label="label"
    rounded outlined
    bg-color="grey-4"
    >
    <template v-slot:clear-icon>
    <q-icon name="clear" size="18px" color="red" />
  </template>
    </q-select>
    <q-select  rounded outlined v-model="selectedBusiness" :options="businessTypes"  clearable
    @clear="selectedBusiness = '事業體選擇'"
    bg-color="grey-4"/>
    <q-input  rounded  outlined v-model="searchKeyword" label="關鍵字搜索" bg-color="grey-4">
    <template v-slot:append>
    <q-icon name="search" class="search-icon" />
  </template>
    </q-input>
    </div> -->

      <div v-for="card in currentPageCards" :key="card.id" class="q-ma-md row justify-center" data-aos="fade-up" data-aos-duration="2000">
        <q-card class="newsPageCard">
          <q-card-section class="newsPageCard2" horizontal>
            <NuxtImg format="webp" :src="card.image" class="col-12 col-md-4 newsPageImg" />
            <div class="col-12 col-md-8 newsPageText">
              <div class="newsTime">{{ card.time }}</div>
              <div class="newsTitle">{{ card.businessType }} | {{ card.title }}</div>
              <div class="newsContent">{{ card.content }}</div>
              <div class="row justify-end items-end align-end">
                <q-btn rounded class="newsPageBtn q-ma-md" :to="'/newsContent' + card.id">more...</q-btn>
              </div>
            </div>
          </q-card-section>
          <hr class="hr-news" />
        </q-card>
      </div>
    </div>
    <q-pagination v-model="currentPage" :max="totalPages" class="row justify-center q-ma-md" :input="true" />

    <!-- <q-page-sticky position="bottom-right" :offset="fabPos">
              <q-fab
                icon="search"
                direction="up"
                color="accent"
                :disable="draggingFab"
                v-touch-pan.prevent.mouse="moveFab"
              >
              <div class="q-pa-md row justify-end newsSearch">
              <q-select v-model="selectedTime" :options="times"  clearable
      @clear="selectedTime = defaultTime"
      option-label="label"
      rounded outlined
      bg-color="grey-4"
      >
      <template v-slot:clear-icon>
      <q-icon name="clear" size="18px" color="red" />
    </template>
      </q-select>
      <q-select  rounded outlined v-model="selectedBusiness" :options="businessTypes"  clearable
      @clear="selectedBusiness = '事業體選擇'"
      bg-color="grey-4"/>
      <q-input  rounded  outlined v-model="searchKeyword" label="搜索" bg-color="grey-4">
      <template v-slot:append>
      <q-icon name="search" class="search-icon" />
    </template>
      </q-input>
      </div>
              </q-fab>
            </q-page-sticky> -->
  </q-page>
</template>
<script setup>
import { ref, computed, watch, nextTick } from 'vue'

// function generateTimeRange (startMonth, endMonth) {
//   const startDate = new Date(startMonth)
//   const endDate = new Date(endMonth)

//   const times = []
//   let currentMonth = startDate
//   while (currentMonth <= endDate) {
//     const start = formatDate(currentMonth)
//     const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
//     const end = formatDate(new Date(Math.min(nextMonth, endDate)))
//     const label = getLabel(start, end)
//     times.push({ start, end, label })
//     currentMonth = nextMonth
//   }

//   return times
// }

// function formatDate (date) {
//   const year = date.getFullYear()
//   const month = String(date.getMonth() + 1).padStart(2, '0')
//   const day = String(date.getDate()).padStart(2, '0')
//   return `${year}/${month}/${day}`
// }

// function getLabel (start, end) {
//   const startYear = new Date(start).getFullYear()
//   const startMonth = new Date(start).getMonth() + 1

//   return `${startYear}年 ${startMonth}月`
// }

// const times = generateTimeRange('2023/01/01', '2025/12/31')
// // console.log(times)
// const businessTypes = ['餐飲事業', '生技事業', '餐飲事業', '影視事業', '水酒事業', '裝修工程事業']

useHead({
  title: '鼎泰勝集團 - 最新消息',
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
      content: 'https://www.dtstw.com/news'
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

const defaultTime = { start: null, end: null, label: '時間選擇' }
const selectedTime = ref(defaultTime)
const selectedBusiness = ref('事業體選擇')
const searchKeyword = ref('')
const cardsPerPage = 3
const currentPage = ref(1)
watch(currentPage, () => {
  nextTick(() => {
    window.scrollTo({ top: 500, behavior: 'smooth' })
  })
})

const cards = ref([
  ,
  {
    id: 4,
    image: '/news/2-pic-5.png',
    time: '2023/09/29',
    title: '鼎泰勝集團中秋有愛，攜手支持蒙恩聽障烘焙坊',
    businessType: '集團總部',
    content:
      '取之社會，回饋社會是集團努力的目標。在2023年中秋前夕，鼎泰勝集團與蒙恩聽障烘焙坊相遇，令人驚奇的是，鼎泰勝的企業特色色彩恰好出現在蒙恩烘焙坊的禮盒上。這樣的偶然巧合彷彿象徵著一種連結與共鳴，進而共同支持並推進社會責任使命。'
  },
  {
    id: 1,
    image: '/news/2-pic-2.jpg',
    time: '2023/06/26',
    title: '中華一餅服務據點搬遷，新門市占地大，服務產能增！',
    businessType: '餐飲事業',
    content: '鼎泰勝集團旗下香臨食品所經營之「中華一餅」，六月門市正式搬遷。新門市坐落於成功國宅附近，占地坪數大，加上作業動線流暢，預計將提高兩成的生產量能。'
  },
  {
    id: 2,
    image: '/news/2-pic-3.jpg',
    time: '2023/04/20',
    title: '水泉水生技飲用水設備全面化升級、熱銷水產品新裝登場',
    businessType: '飲用水事業',
    content:
      '鼎泰勝集團合作夥伴水泉水生技為提升2023年度生產量目標，今年特購全新機台進行汰舊換新作業，全新飲用水設備預期將提高生產品質，同時提高作業產能，將產能發揮到最大！此外熱銷瓶裝水產品，也在本月份新登場。'
  },
  {
    id: 3,
    image: '/news/2-pic-4.jpg',
    time: '2022/10/17',
    title: '鼎泰勝集團總部喬遷，進駐群光大樓',
    businessType: '集團總部',
    content:
      '鼎泰勝集團旗總部團隊擴編，同時因應未來市場的擴充需求，於本2022年10月7日正式進駐群光大樓。總部辦公室全面整合各事業體的後勤團隊，將集團部門團隊整合，讓夥伴們更能團結一致，創造總部團隊價值！'
  }
])

const filteredCards = computed(() => {
  return cards.value.filter(card => {
    const cardTime = new Date(card.time)
    const timeStart = new Date(selectedTime.value.start)
    const timeEnd = new Date(selectedTime.value.end)
    return (
      (selectedTime.value.label === '時間選擇' || (cardTime >= timeStart && cardTime <= timeEnd)) &&
      (selectedBusiness.value === '事業體選擇' || card.businessType === selectedBusiness.value) &&
      (!searchKeyword.value || card.title.includes(searchKeyword.value))
    )
  })
})

const totalPages = computed(() => Math.ceil(filteredCards.value.length / cardsPerPage))

const currentPageCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage
  const end = start + cardsPerPage
  return filteredCards.value.slice(start, end)
})

// const fabPos = ref([18, 18])
// const draggingFab = ref(false)

// const moveFab = (ev) => {
//   draggingFab.value = ev.isFirst !== true && ev.isFinal !== true

//   fabPos.value = [
//     fabPos.value[0] - ev.delta.x,
//     fabPos.value[1] - ev.delta.y
//   ]
// }
</script>
<style lang="scss" scoped>
.newsPageCard {
  width: 80vw;
}
.absolute-left-center {
  position: absolute;
  left: 10%;
  top: 43%;
}
.newsPageCard2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    .newsPageText {
      margin-left: 0;
      padding-left: 48px;
    }
  }
}
.hr-news {
  height: 1px;
  width: 100%;
  display: inline-block;
  padding: 0;
  border: none;
  background: #e60012;
}
.newsTime {
  color: #e60012;
  margin: 10px;
  font-size: 20px;
}
.newsTitle {
  font-size: 30px;
  font-weight: 50;
  margin: 10px;
}
.newsContent {
  color: #bdbdbd;
  font-size: 15px;
  margin: 10px;
}

.custom-clearable .q-field__icon-container {
  font-size: 13px; /* 调整清除图标的大小 */
  color: #e60012; /* 调整清除图标的颜色 */
}
.newsPageBtn {
  color: #ffffff;
  background-color: #e60012;
}
.newsPageImg {
  // width: 100%;
  // height: 100%;
  object-fit: cover;
}
</style>
