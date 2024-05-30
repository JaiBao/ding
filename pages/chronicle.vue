<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="full-width">
      <q-parallax src="/chronicle/1-2-pic-1.jpg">
        <div class="absolute-left-center custom-caption2">
          <div class="text-black text-h2 alight-center">集團紀事</div>
          <div class="text-grey text-h6 alight-center">Enterprise history</div>
        </div>
      </q-parallax>
    </div>
    <!-- 時間軸 -->
    <q-timeline layout="comfortable" side="right" class="mainTimeLine">
      <!-- <q-timeline-entry heading>Timeline heading</q-timeline-entry> -->

      <q-timeline-entry
        v-for="(chronicle, index) in chronicles"
        :key="index"
        :subtitle="chronicle.year"
        side="left"
        :icon="chronicle.icon"
        color="black"
        class="chronicleTimeline">
        <div v-for="(text, index) in chronicle.texts" :key="index" class="avatarContent">
          <q-avatar v-if="text.image" class="bounce-in">
            <NuxtImg format="webp" :src="text.image" />
          </q-avatar>

          <h5 class="avatarH5">
            {{ text.time }}
            <span class="timeSpan">{{ text.span }}</span>
          </h5>
          <div v-for="(line, index) in text.text" :key="index">
            <p class="avatarP">{{ line }}</p>
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

useHead({
  title: '鼎泰勝集團 - 集團紀事',
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
      content: 'https://www.dtstw.com/chronicle'
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

gsap.registerPlugin(ScrollTrigger)
const chronicles = ref([
  {
    icon: 'circle',
    year: '2023',

    texts: [
      {
        time: '餐飲事業 | ',

        text: ['香臨食品南部分公司正式成立'],
        image: '/chronicle/1-2-pic-2.png'
      },
      {
        time: '飲用水事業 | ',
        span: '合作夥伴',
        text: ['水泉水生技公司正式成立，全省經銷服務啟動']
      }
    ]
  },
  {
    icon: 'circle',
    year: '2022',
    texts: [
      {
        time: '集團總部 | ',
        text: ['鼎泰勝集團總部喬遷，進駐群光大樓'],
        image: '/chronicle/1-2-pic-3.png'
      },
      {
        time: '餐飲事業 | ',
        text: ['少小白榮獲「2021 第十一屆亞太優質餐飲連鎖品牌獎」'],
        image: '/chronicle/1-2-pic-4.png'
      },
      {
        time: '裝修工程事業 | ',
        span: '合作夥伴',
        text: ['家荷工程 正式成立']
      }
    ]
  },
  {
    icon: 'circle',
    year: '2021',
    texts: [
      {
        time: '飲用水事業 | ',
        span: '合作夥伴',
        text: ['世間水榮獲 ISO 22000 國際食品安全管理系統標準 認證', '世間水HACCP 食品安全管制系統 認證', '森淋泉生技加入，飲用水全省通路上架'],
        image: '/chronicle/1-2-pic-5.png'
      },
      {
        time: '餐飲事業 | ',
        text: ['創立迷港家叉燒舖品牌', '少小白榮獲「2020手搖飲優質業者」'],
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
        text: ['少小白榮獲「台灣服務業創新獎」', '創立太ONE牛肉麵'],
        image: '/chronicle/1-2-pic-7.png'
      },
      {
        time: '影視事業 | ',
        span: '合作夥伴',
        text: ['福汎國際正式成立'],
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
        text: ['創立少小白品牌'],
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
        text: ['創立 逗漾 品牌'],
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
        text: ['國際品牌產品OEM'],
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
        text: ['設立中央廚房', '創立中華一餅品牌'],
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
        text: ['成立潤品屋進駐店面'],
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
        span: '合作夥伴',
        text: ['榮獲 【中華民國消費者健康安全協會】 優質企業認證— 國家品質最高榮譽—金牌獎'],
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
        text: ['自營潤餅攤 品牌草創初期'],
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
.full-width {
  position: relative;
}
.custom-caption2 {
  position: absolute;
  top: 43%;
  left: 10%;
  .text-grey {
    color: #bdbdbd;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
}
.chronicleTimeline {
  li {
    margin: 20px;
  }
  img {
    // margin-top:20px ;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    z-index: 1;
    // border: 12px solid #e60012;
  }
  @media (min-width: 768px) {
    img {
      width: 100%;
      // height: 200px;
    }
  }
  @media (min-width: 996px) {
    img {
      width: 90%;
      // height: 400px;
    }
  }
}
.chronicleHr {
  background: #e60012;
  height: 1px;
  width: 100%;
  display: inline-block;
  margin: 0;
  @media (min-width: 568px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 90%;
  }
}

.q-avatar {
  // position: relative;
  vertical-align: middle;
  display: inline-block;
  border-radius: 50%;
  font-size: 3rem;
  height: 1em;
  width: 1em;
  @media (min-width: 568px) {
    font-size: 5rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
  }
  @media (min-width: 992px) {
    font-size: 8rem;
  }
  @media (min-width: 1200px) {
    font-size: 10rem;
  }
  @media (min-width: 1500px) {
    font-size: 12rem;
  }
}

.avatarP {
  color: grey;
  font-size: 0.8rem;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
}

.avatarH5 {
  margin: 0 0 1% 0;
  font-weight: 600;
  line-height: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.mainTimeLine {
  @media (min-width: 555px) {
    margin-left: 10%;
  }
  @media (min-width: 768px) {
    margin-left: 20%;
  }
  // margin-left: 20%;
}

.timeSpan {
  color: #e60012;
  font-weight: 300;
  font-size: 1rem;
}
</style>
