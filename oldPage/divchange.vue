<template>
  <!-- 主要容器 -->
  <div class="container">
    <!-- 黏附容器 -->
    <div
      class="bg"
      :style="{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }"
      ref="stickyDiv">
      <!-- 使用q-avatar顯示圖像，並動態改變邊框顏色 -->

      <NuxtImg format="webp" :src="currentImage" alt="scroll" class="containedImage" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger)

// 圖片和邊框顏色數據
const images = ['/test/water.png', '/test/work.png', '/test/bing.png', '/test/note.png', '/test/photo.png']
const borderColors = ['red', 'green', 'blue']
const backgroundImages = ['/test/bgwater.png', '/test/bgwork.png', '/test/bgbing.png', '/test/bgnote.png', '/test/bgphoto.png']
const background = ref(backgroundImages[0])

// 定義ref值
const currentImage = ref(images[0])
const currentBorderColor = ref(borderColors[0])
const stickyDiv = ref(null)
const currentImageIndex = ref(0)

onMounted(() => {
  // 創建滾動觸發器
  ScrollTrigger.create({
    trigger: stickyDiv.value,
    start: 'top-=120px',
    end: () => `+=${window.innerHeight * (images.length - 1)}`,
    pin: true,
    scrub: true,
    onUpdate: self => {
      const index = Math.floor(self.progress * (images.length - 1))
      if (currentImageIndex.value !== index) {
        // 減少透明度
        gsap.to(stickyDiv.value, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            // 更新圖片、背景和邊框顏色
            currentImageIndex.value = index
            currentImage.value = images[currentImageIndex.value]
            currentBorderColor.value = borderColors[currentImageIndex.value]
            background.value = backgroundImages[currentImageIndex.value]

            // 恢復透明度
            gsap.to(stickyDiv.value, {
              opacity: 1,
              duration: 0.3
            })
          }
        })
      }
    }
  })
  console.log(window.innerHeight * (images.length - 1))
})

// 組件銷毀時，清除所有滾動觸發器
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style lang="scss" scoped>
.container {
  height: 482vh;
  // background: black;
}

.bg {
  height: 113vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  // height: 100%;
  // position: sticky;
  top: -200px;
}

.avatarContainer {
  display: flex; // 啟用flexbox
  align-items: center; // 垂直居中
  justify-content: center; // 水平居中
  border-width: 10px !important;
  border-style: solid !important;
  border-radius: 50% !important;
  width: 30vw;
  height: 30vw;
  background-color: pink;
}

.containedImage {
  width: 30%;
  object-fit: contain;
  position: absolute;
  top: 100px;
  right: 10%;
  // border-radius: 50%;
}
</style>
