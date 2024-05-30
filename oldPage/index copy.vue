<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="indexParallax medium">
      <div class="parallaxImage">
        <NuxtImg format="webp" src="/overView/0-pic-1.jpg" alt="Parallax Image" />
      </div>
      <div class="parallaxContent">
        <div class="contentText">
          <h2 class="text-red">DING TAI SHENG</h2>
          <h5 class="gt-sm">Scaling High, Conquer for Success</h5>
          <p class="gt-sm">
            問
            <span class="text-red">鼎泰</span>
            山旗開得
            <span class="text-red">勝</span>
            。我們相信只有通過勇氣、決心和努力，我們才能攀登最高峰並取得卓越成果。我們致力於突破業界的限制和挑戰，並引領行業的發展和創新。
          </p>
        </div>
      </div>
    </div>

    <!-- 介紹區 -->
    <!-- 卡片第一層 -->
    <div class="card-container row">
      <div class="red-line"></div>
      <div class="card01Img">
        <NuxtImg format="webp" src="/overView/0-pic-2.jpg" />
      </div>
      <q-card class="indexCard01 bg-whte text-black">
        <div class="card01Text">
          <div class="title">
            <h3 class="row justify-start">"Shaping the value of</h3>
            <h3 class="row justify-end">'chain operations'.</h3>
          </div>
          <p>
            <span>鼎泰勝集團，</span>
            深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。我們擁有研發、生產製造、品牌經營、物流系統、電子商業作業系統和完整的後勤支援，鼎泰勝與每一位同仁共同打造「連鎖」的價值。協助每一位認真打拼的合作伙伴實現夢想，共享經營的成果。
          </p>
        </div>
      </q-card>
    </div>
    <!-- 卡片第二層 -->
    <div class="group row">
      <q-card class="news col-md-4 col-12 cardGroup">
        <div class="cardGroupContent">
          <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none">
            <p>| 飲用水事業 |</p>
            <p>月銷售超過</p>
            <h4>
              {{ formatNumber(counters[0]) }}
              <span>箱</span>
            </h4>
            <br />
            <p>年銷售超過</p>
            <h4>
              {{ formatNumber(counters[4]) }}
              <span>箱</span>
            </h4>
          </div>
          <NuxtImg format="webp" src="/overView/0-pic-3.jpg" alt="飲用水事業" />
        </div>
      </q-card>
      <div class="column col-md-4 col-sm-12 justify-between">
        <q-card class="cardGroup col-6">
          <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none">
              <p>| 裝修工程事業 |</p>
              <p>合作建案超過</p>
              <h4>
                {{ formatNumber(counters[1]) }}
                <span>件</span>
              </h4>
            </div>
            <NuxtImg format="webp" src="/overView/0-pic-4.jpg" alt="裝修工程事業" />
          </div>
        </q-card>
        <q-card class="cardGroup col-6 column justify-end">
          <div class="cardGroupContent">
            <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none">
              <p>| 影視創意事業 |</p>
              <p>合作影視作品超過</p>
              <h4>
                {{ formatNumber(counters[2]) }}
                <span>部</span>
              </h4>
            </div>
            <NuxtImg format="webp" src="/overView/0-pic-5.jpg" alt="影視創意事業" />
          </div>
        </q-card>
      </div>
      <q-card class="col-md-4 col-sm-12 cardGroup">
        <div class="cardGroupContent">
          <div class="cardGroupTitle absolute-center text-subtitle2 text-center q-pa-none">
            <p>| 餐飲事業 |</p>
            <p>年銷售潤餅盒餐超過</p>
            <h4>
              {{ formatNumber(counters[3]) }}
              <span>套</span>
            </h4>
          </div>
          <NuxtImg format="webp" src="/overView/0-pic-6.jpg" alt="餐飲事業" />
        </div>
      </q-card>
    </div>

    <!-- 卡片第三層 -->
    <div class="textBox bg-black text-white row justify-center items-center">"Diversified Business"</div>
    <!-- 6大產業圖片展示 -->
    <!-- 清單圖片 -->
    <div id="overViewPhotoNews">
      <div class="row cont" ref="contRef" @scroll="onScroll">
        <!-- 1 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card1"
          @mouseenter="
            () => {
              scrollToCenter('card1')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>飲用水事業</h5>
            <p>Drinking Water Business</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-13.png" alt="水泉水生技" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-7.jpg" alt="飲用水事業" />
          </div>
        </q-card>

        <!-- 2 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card2"
          @mouseenter="
            () => {
              scrollToCenter('card2')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>食品製造業</h5>
            <p>Food Manufacturing</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-14.png" alt="上暉食品" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-8.jpg" alt="食品製造業" s />
          </div>
        </q-card>
        <!-- 3 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card3"
          @mouseenter="
            () => {
              scrollToCenter('card3')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>餐飲事業</h5>
            <p>Foodservice Business</p>

            <br />
            <div class="row">
              <!-- <NuxtImg format="webp" src="/overView/0-pic-14.png" alt="上暉食品" > -->
              <NuxtImg format="webp" src="/overView/0-pic-15.png" alt="香臨食品" />
            </div>
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-9.jpg" alt="水酒事業" />
          </div>
        </q-card>
        <!-- 4 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card4"
          @mouseenter="
            () => {
              scrollToCenter('card4')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>影視事業</h5>
            <p>Media Studio</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-16.png" alt="福汎國際" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-10.jpg" alt="影視事業" />
          </div>
        </q-card>

        <!-- 5-->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card5"
          @mouseenter="
            () => {
              scrollToCenter('card5')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>裝修工程事業</h5>
            <p>Decoration Engineering Business</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-18.png" alt="家荷工程)" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-12.jpg" alt="裝修工程事業" />
          </div>
        </q-card>
        <!-- 1 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card6"
          @mouseenter="
            () => {
              scrollToCenter('card6')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>飲用水事業</h5>
            <p>Drinking Water Business</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-13.png" alt="水泉水生技" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-7.jpg" alt="飲用水事業" />
          </div>
        </q-card>

        <!-- 2 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card7"
          @mouseenter="
            () => {
              scrollToCenter('card7')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>食品製造業</h5>
            <p>Food Manufacturing</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-14.png" alt="上暉食品" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-8.jpg" alt="食品製造業" s />
          </div>
        </q-card>
        <!-- 3 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card8"
          @mouseenter="
            () => {
              scrollToCenter('card8')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>餐飲事業</h5>
            <p>Foodservice Business</p>

            <br />
            <div class="row">
              <!-- <NuxtImg format="webp" src="/overView/0-pic-14.png" alt="上暉食品" > -->
              <NuxtImg format="webp" src="/overView/0-pic-15.png" alt="香臨食品" />
            </div>
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-9.jpg" alt="水酒事業" />
          </div>
        </q-card>
        <!-- 4 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card9"
          @mouseenter="
            () => {
              scrollToCenter('card9')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>影視事業</h5>
            <p>Media Studio</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-16.png" alt="福汎國際" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-10.jpg" alt="影視事業" />
          </div>
        </q-card>

        <!-- 5 -->
        <q-card
          class="news col-md-4 col-sm-6 image-card"
          ref="card10"
          @mouseenter="
            () => {
              scrollToCenter('card10')
              handleCardHover()
            }
          "
          @mouseleave="handleCardLeave">
          <div class="image-title">
            <h5>裝修工程事業</h5>
            <p>Decoration Engineering Business</p>

            <br />
            <NuxtImg format="webp" src="/overView/0-pic-18.png" alt="家荷工程)" />
          </div>
          <div class="image-content">
            <NuxtImg format="webp" src="/overView/0-pic-12.jpg" alt="裝修工程事業" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
useHead({
  title: '鼎泰勝集團',
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
      content: '中華一餅圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.dtstw.com/'
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

const cardRefs = {
  card1: ref(null),
  card2: ref(null),
  card3: ref(null),
  card4: ref(null),
  card5: ref(null),
  card6: ref(null),
  card7: ref(null),
  card8: ref(null),
  card9: ref(null),
  card10: ref(null)
}
const contRef = ref(null)
// const card1 = ref(null)
// const card2 = ref(null)
// const card3 = ref(null)
// const card4 = ref(null)
// const card5 = ref(null)
// const card6 = ref(null)
// const card7 = ref(null)
// const card8 = ref(null)
// const card9 = ref(null)
// const card10 = ref(null)

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
        // 当滚动到目标附近时
        contEl.classList.add('paused')
        contEl.removeEventListener('scroll', onScroll) // 移除滚动事件监听器
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

// const scrollToCenter = async (cardRefName) => {
//   await nextTick() // 確保DOM已經更新
//   const card = ref[cardRefName].value
//   const cont = contRef.value
//   const cardRect = card.getBoundingClientRect()
//   const contRect = cont.getBoundingClientRect()

//   const centerPosition = cont.scrollLeft + cardRect.left + cardRect.width / 2 - contRect.width / 2
//   cont.scrollTo({ left: centerPosition, behavior: 'smooth' })
// }

// const handleCardHover = (event) => {
//   const card = event.currentTarget // 獲取當前的卡片元素

//   // 檢查這張卡片是否在視口的中央
//   const cardMiddle = card.offsetLeft + (card.offsetWidth / 2)
//   const containerMiddle = contRef.value.offsetWidth / 2

//   // 判斷卡片的中央是否在容器的中央
//   if (cardMiddle === containerMiddle) {
//     // 如果是，則暫停滾動
//     contRef.value.style.animationPlayState = 'paused'
//   } else {
//     // 如果不是，則繼續滾動，直到卡片的中央到達容器的中央
//     const scrollAmount = cardMiddle - containerMiddle
//     contRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })

//     // 監聽滾動事件，一旦滾動停止，停止動畫
//     contRef.value.addEventListener('scroll', function checkScroll () {
//       if (contRef.value.scrollLeft === card.offsetLeft) {
//         contRef.value.style.animationPlayState = 'paused'
//         contRef.value.removeEventListener('scroll', checkScroll)
//       }
//     })
//   }
// }
const ends = [800000, 2000, 1000, 200000, 9600000]
const counters = ends.map(end => ref(0))

const starts = Array(ends.length).fill(0)
const duration = 6000

let rafIds = []

function step(index) {
  return function (timestamp) {
    if (!starts[index]) starts[index] = timestamp
    const progress = timestamp - starts[index]
    if (progress < duration) {
      counters[index].value = Math.min(Math.floor((progress / duration) * ends[index]), ends[index])
      rafIds[index] = requestAnimationFrame(step(index))
    } else {
      counters[index].value = ends[index]
      cancelAnimationFrame(rafIds[index])
    }
  }
}

onMounted(() => {
  rafIds = counters.map((_, index) => requestAnimationFrame(step(index)))
})

onUnmounted(() => {
  rafIds.forEach((rafId, index) => {
    cancelAnimationFrame(rafId)
  })
})
// 新增的格式化函數
const formatNumber = number => {
  return number.value.toLocaleString()
}
</script>
<style lang="scss" scoped>
//視差動畫

.indexParallax {
  position: relative;
  width: 100%;
  height: 60vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 992px) {
    height: 80vh;
    width: 100%;
  }
  img {
    height: 60vh;
    width: 100%;
    @media (min-width: 992px) {
      height: 80vh;
      width: 100%;
    }
  }
  overflow: hidden;

  // .parallaxImage {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   transform: translateZ(0);
  //   animation: parallaxScroll 10s infinite;
  // }

  .parallaxContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    @media (min-width: 768px) {
      left: 50%;
    }
    @media (min-width: 992px) {
      left: 30%;
    }
    @media (min-width: 1400px) {
      left: 25%;
    }
  }

  // // 控制滾動速度
  // &.slow {
  //   .parallaxImage {
  //     animation-duration: 20s;
  //   }
  // }

  // &.medium {
  //   .parallaxImage {
  //     animation-duration: 15s;
  //   }
  // }

  // &.fast {
  //   .parallaxImage {
  //     animation-duration: 8s;
  //   }
  // }
}

// // 視差動畫
// @keyframes parallaxScroll {
//   0% {
//     transform: translateZ(0) translateY(0);
//   }
//   100% {
//     transform: translateZ(0) translateY(-50%);
//   }
// }

//視差圖div
.indexParallax {
  // height: 100vh;
  position: relative;
  width: 80vw;
  margin: 2vw 10vw 0vw 10vw;
  @media (min-width: 992px) {
    margin: 2vw 10vw 0vw 10vw;
  }
  //視差文字div
  .parallaxContent {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 60%;
    // top: 1%;
    display: inline-block;
    font-size: 20px;
    // text-align: center;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
    // margin: 0 auto;
    // // margin-right:55%;
    // width: 100%;
    // height: 100%;
    .contentText {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: left;
    }

    h2 {
      text-align: center;
      font-size: 2.6em;
      font-weight: 1000;
      // padding: 10px;
      margin: 0;
    }
    h5 {
      text-align: center;
      font-size: 1.4em;
      font-weight: 800;
      margin: 0;
    }
    p {
      font-weight: 400;
      font-size: 0.8em;
      // text-align: left;
      margin: 0;
    }

    //大於768px
    @media (min-width: 768px) {
      left: 33%;
      top: 57%;
      width: 60%;
      h2 {
        text-align: left;
        font-size: 2.4em;
        width: 100%;
        margin: 0;
      }

      h5 {
        text-align: left;
        font-size: 1.4rem;
        font-weight: 800;
        margin: 1px;
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 1em;
        text-align: left;
        margin: 5px;
        padding: 0 80px 0 0;
      }
    }
    //大於1024px
    @media (min-width: 1024px) {
      left: 34%;
      top: 57%;
      h2 {
        text-align: left;
        font-size: 3em;
        width: 100%;
        // margin: 20px;
        margin: 1px;
      }

      h5 {
        text-align: left;
        font-size: 1.8rem;
        font-weight: 800;
        margin: 1px;
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 0.9em;
        text-align: left;
        margin: 5px;
        margin-top: 10px;
        padding: 0 40px 0 0;
      }
    }
    //大於1200px
    @media (min-width: 1200px) {
      left: 38%;
      top: 57%;
      width: 67%;
      h2 {
        text-align: left;
        font-size: 3.8em;
        width: 100%;
        // margin: 20px;
        margin: 5px;
      }

      h5 {
        text-align: left;
        font-size: 2.2rem;
        font-weight: 800;
        margin: 5px;
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 0.9em;
        text-align: left;
        margin: 5px;
        padding: 0 90px 0 0;
      }
    }
    //大於1500px
    @media (min-width: 1500px) {
      left: 34%;
      top: 57%;
      width: 51%;
      h2 {
        text-align: left;
        font-size: 3.7em;
        width: 100%;
        // margin: 20px;
        margin: 5px;
      }

      h5 {
        text-align: left;
        font-size: 1.7em;
        font-weight: 800;
        margin: 5px;
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 1em;
        text-align: left;
        padding: 0 80px 0 0;
        margin: 5px;
      }
    }
    //大於1800px
    @media (min-width: 1800px) {
      left: 26%;
      top: 57%;
      width: 36%;
      h2 {
        text-align: left;
        font-size: 3.3em;
        width: 100%;
        // margin: 20px;
        margin: 5px;
      }

      h5 {
        text-align: left;
        font-size: 1.9rem;
        font-weight: 800;
        margin: 5px;
        width: 100%;
      }
      p {
        font-weight: 400;
        font-size: 0.9em;
        text-align: left;
        margin: 10px;
        padding: 0 80px 0 0;
      }
    }
  }
}

//卡片區
.card-container {
  position: relative;
  display: flex;
  flex: row;
  width: 80vw;
  height: 100%;
  min-height: 750px;
  margin: 0vw 10vw;

  @media (min-width: 768px) {
    min-height: 1100px;
  }
  @media (min-width: 1024px) {
    min-height: 40vh;
  }

  //圖片
  .card01Img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
      z-index: 1;
    }
    @media (min-width: 1024px) {
      width: 41.666667%;
    }
  }
}
//card1紅線
.red-line {
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
  width: 10px;
  height: 100%;
  background-color: red;
  z-index: -1;
}

//文字區
.indexCard01 {
  display: flex;
  flex-direction: column;
  z-index: 1;
  // justify-content:flex-start;
  // z-index: 1;
  // @media (min-width: 992px) {
  height: 100%;
  //   width: 58.333333%;
  // }

  @media (min-width: 1024px) {
    height: 400px;
    width: 58.333333%;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
  @media (min-width: 1400px) {
    height: 560px;
  }
  @media (min-width: 1500px) {
    height: 580px;
  }
  @media (min-width: 1700px) {
    height: 680px;
  }
  @media (min-width: 1700px) {
    height: 680px;
  }
  @media (min-width: 2000px) {
    height: 740px;
  }
  @media (min-width: 2400px) {
    height: 830px;
  }
  //
  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.7em;
    font-weight: 600;
  }
  p {
    margin: 0;
    padding-bottom: 3rem;
    font-size: 1em;
  }
  span {
    font-weight: 600;
  }

  //368
  @media (min-width: 368px) {
    h3 {
      margin: 0;
      padding: 0;
      font-size: 1.9em;
    }
    p {
      margin: 0;
      // padding: 3px;
      font-size: 1.2em;
    }
  }

  //768
  @media (min-width: 768px) {
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 2.8em;
    }
    p {
      margin: 0;
      // padding: 0;
      font-size: 1.8em;
    }
  }

  //992
  @media (min-width: 992px) {
    // padding-left: 30px;
    h3 {
      margin: 0;
      // padding: 0;
      // font-size: 40px;
    }
    p {
      margin: 0;
      // padding: 0;
      // font-size: 23px;
    }
  }

  //1024
  @media (min-width: 1024px) {
    padding-left: 4%;
    .title {
      // padding-top: 10px;
      margin-top: 5%;
    }
    h3 {
      margin: 0;
      // padding-top: 60px;
      line-height: 1.3em;
      font-size: 2.5em;
    }
    p {
      margin: 0;
      // padding: 0;
      line-height: 1.7em;
      padding-top: 1%;
      font-size: 1.3em;
    }
  }
  //1200
  @media (min-width: 1200px) {
    // padding-left: 30px;
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 2.8em;
    }
    p {
      margin: 0;
      // padding: 0;
      font-size: 1.55em;
    }
  }
  //1400
  @media (min-width: 1400px) {
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 2.9em;
    }
    p {
      margin: 0;
      // padding: 0;
      font-size: 1.77em;
    }
  }

  //1500
  @media (min-width: 1500px) {
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 3.5em;
    }
    p {
      margin: 0;
      // padding: 0;
      font-size: 1.8em;
    }
  }
  //1700
  @media (min-width: 1700px) {
    h3 {
      margin: 0;
      // padding: 0;
      line-height: 1.3em;
      font-size: 3.4em;
      // letter-spacing:0.1px;
    }
    p {
      margin: 0;
      padding-top: 1%;
      // padding: 1vh;
      font-size: 2.2em;
      line-height: 1.7em;
    }
  }
  //2000
  @media (min-width: 2000px) {
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 4em;
    }
    p {
      margin: 0;
      // padding: 1vh;
      font-size: 2.7em;
    }
  }
  //2400
  @media (min-width: 2400px) {
    h3 {
      margin: 0;
      // padding: 0;
      font-size: 4.3em;
    }
    p {
      margin: 0;
      // padding: 1vh;
      font-size: 3.3em;
    }
  }
}

//文字方塊
.textBox {
  width: 80vw;
  height: 10vh;
  margin: 3vw 10vw;
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 2.3rem;
    height: 30vh;
  }
}

.group {
  width: 80vw;
  // max-width:1024px;
  margin: 0vw 10vw 5vw 10vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    // width: 100vw;
    // max-width:1324px;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    width: 80vw;
    // padding: 5vw 10vw;
  }
}

.cardGroup {
  position: relative;
  overflow: hidden;
  // margin: 5px;
  //   width: 100%;
  // height: 50%;
  @media (min-width: 768px) {
    padding: 0 5px;
  }
  @media (min-width: 992px) {
    margin: 0;
    // padding: 7px 10px;
  }
}

.cardGroupContent {
  position: relative;
  img {
    transition: transform 0.2s; /* 滑鼠觸碰圖片放大效果 */
    width: 80vw;
    @media (min-width: 996px) {
      width: 100%;
    }
  }
}

.cardGroupContent:hover {
  transform: scale(1.1); /* 滑鼠觸碰圖片放大效果 */
  transition: 0.25s;
}

.cardGroupTitle {
  // position: absolute;
  // top: 50px;
  // left: 20px;
  color: white;
  background-color: rgba(255, 255, 255, 0);
  // padding: 5px;
  p {
    font-size: 1rem;
    margin: 0 0 1%;
  }
  h4 {
    margin: 1px;
    font-weight: 800;
    font-size: 2rem;
    width: 400px;
    //  height: 90px;
    span {
      font-weight: 300;
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    h4 {
      padding-top: 2%;
      font-size: 2.4rem;
      width: 400px;
      span {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 992px) {
    font-size: 28px;
    padding: 0;
    h4 {
      margin: 0 10px;
      width: 400px;
      font-size: 33px;
      span {
        font-size: 20px;
      }
    }
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 0;
    h4 {
      width: 400px;
      padding-top: 0.5%;
      //  padding-bottom: 1%;
      font-size: 2.3rem;
      span {
        font-size: 1.6rem;
      }
    }
  }
}

//圖片區
#overViewPhotoNews {
  overflow: hidden;
  width: 100%;
  height: auto;
  position: relative;

  .cont {
    display: flex; /* 卡片横向排列 */
    width: calc(800%);
    animation: move 15s linear infinite;

    @media (min-width: 568px) {
      width: calc(330%);
    }
    @media (min-width: 1200px) {
      width: calc(230%);
    }
  }
  //六大產業圖片區卡片
  .image-card {
    flex: 1; /* 卡片都有相等的 */
    width: 20%;
    height: auto;
    overflow: hidden;

    margin: 0 0.1%;
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

  //六大產業圖片區卡片文字
  .image-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 20%;
    // left: 10%;
    color: white;
    background: rgba(0, 0, 0, 0);
    padding: 0;
    z-index: 1;
    font-size: 30px;
    h5 {
      margin: 0;
      font-size: 30px;
    }
    p {
      margin: 0;
      font-size: 18px;
    }
    img {
      width: 140px;
    }
  }
}
</style>
