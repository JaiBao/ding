<template>
  <q-page>
  <!-- 大圖視差 -->

  <div class=" full-width " >
  <q-parallax
    src="~assets/chronicle/1-2-pic-1.jpg"
  >
  <div class=" absolute-left-center custom-caption2">

          <div class="text-black text-h2 alight-center" >集團紀事</div>
        <div class="text-grey text-h6 alight-center" >Enterprise history</div>
      </div>
  </q-parallax>
  </div>
  <!-- 時間軸 -->
      <q-timeline  layout="comfortable" side="right"  class=" mainTimeLine">
        <!-- <q-timeline-entry heading>Timeline heading</q-timeline-entry> -->

        <q-timeline-entry
        v-for="(chronicle, index) in chronicles" :key="index"
          :subtitle="chronicle.year"
          side="left"
          :icon="chronicle.icon"
          color="black"
          class="chronicleTimeline"
        >

        <div v-for="(text, index) in chronicle.texts" :key="index" class="avatarContent">
        <q-avatar v-if="text.image" class="bounce-in ">
          <img :src="text.image" />
        </q-avatar>

        <h5 class="avatarH5">{{text.time}}</h5>
        <div v-for="(line, index) in text.text" :key="index">
          <p class="avatarP">{{line}}</p>
        </div>
      </div>
          <!-- <div v-for="(text, index) in chronicle.texts" :key="`img-${index}`">

          </div> -->
  <!-- <hr class="chronicleHr"> -->
        </q-timeline-entry>

      </q-timeline>
    </q-page>
  </template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const chronicles = ref([
  {
    icon: 'circle',
    year: '2023',

    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '香臨食品南部分公司正式成立'
        ],
        image: '/chronicle/1-2-pic-2.png'
      }, {
        time: '飲用水事業 | ',
        text: [
          '香臨食品南部分公司正式成立',
          '水泉水生技公司正式成立，全省經銷服務啟動'
        ]
      }
    ]
  },
  {
    icon: 'circle',
    year: '2022',
    texts: [
      {
        time: '集團總部 | ',
        text: [
          '鼎泰勝集團總部喬遷，進駐群光大樓'
        ],
        image: '/chronicle/1-2-pic-3.png'
      }, {
        time: '餐飲事業 | ',
        text: [
          '少小白榮獲「2021 第十一屆亞太優質餐飲連鎖品牌獎」'
        ],
        image: '/chronicle/1-2-pic-4.png'
      }, {
        time: '裝修工程事業 | ',
        text: [
          '家荷工程 正式成立'
        ]
      }
    ]
  },
  {
    icon: 'circle',
    year: '2021',
    texts: [
      {
        time: '飲用水事業 | ',
        text: [
          '世間水榮獲 ISO 22000 國際食品安全管理系統標準 認證',
          '世間水HACCP 食品安全管制系統 認證',
          '森淋泉生技加入，飲用水全省通路上架'
        ],
        image: '/chronicle/1-2-pic-5.png'
      }, {
        time: '餐飲事業 | ',
        text: [
          '創立迷港家叉燒舖品牌',
          '少小白榮獲「2020手搖飲優質業者」'
        ],
        image: '/chronicle/1-2-pic-6.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2020',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '少小白榮獲「台灣服務業創新獎」',
          '創立太ONE牛肉麵'
        ],
        image: '/chronicle/1-2-pic-7.png'
      }, {
        time: '影視事業 | ',
        text: [
          '福汎國際正式成立'
        ],
        image: '/chronicle/1-2-pic-8.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2018',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '創立少小白品牌'
        ],
        image: '/chronicle/1-2-pic-9.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2013',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '創立 逗漾 品牌'
        ],
        image: '/chronicle/1-2-pic-10.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2010',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '國際品牌產品OEM'
        ],
        image: '/chronicle/1-2-pic-11.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2008',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '設立中央廚房',
          '創立中華一餅品牌'
        ],
        image: '/chronicle/1-2-pic-12.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '2003',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '成立潤品屋進駐店面'
        ],
        image: '/chronicle/1-2-pic-13.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '1998',
    texts: [
      {
        time: '飲用水事業 | ',
        text: [
          '榮獲 【中華民國消費者健康安全協會】 優質企業認證— 國家品質最高榮譽—金牌獎'
        ],
        image: '/chronicle/1-2-pic-14.png'
      }
    ]
  },
  {
    icon: 'circle',
    year: '1987',
    texts: [
      {
        time: '餐飲事業 | ',
        text: [
          '自營潤餅攤 品牌草創初期'
        ],
        image: '/chronicle/1-2-pic-15.png'
      }
    ]
  }

])

onMounted(async () => {
  await nextTick()

  gsap.utils.toArray('.bounce-in').forEach(el => {
    gsap.from(el, {
      scale: 0,
      x: '-100%',
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: el,
        // scrub: true,
        start: '0% 70%', // 當元素的底部進入視窗底部時開始
        // end: 'bottom top', // 當元素的底部離開視窗頂部時結束
        toggleActions: 'play complete none none',
        markers: false,
        once: true
      }
    })
  })
})

// const layout = ref('dense')
// const side = ref('right')

</script>
  <style lang="scss" scoped>

  </style>
