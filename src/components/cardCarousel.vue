<template>
  <Carousel  v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <q-card class="readCard">
          <img :src="slide.image" alt="">
          <q-card-section>
            <div class="text-p text-red">{{slide.time}}</div>
            <div class="text-h6">{{slide.text}}</div>
            <hr class="hr-solid-content" data-content="觀看更多">
          </q-card-section>
        </q-card>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = ref([
  {
    image: '/indexpic/read1.jpg',
    time: '2023/05/15',
    text: '餐飲事業|香臨食品南部分公司正式成立'
  }, {
    image: '/indexpic/read2.jpg',
    time: '2023/04/20',
    text: '飲用水事業|森淋泉生技飲用水設備全面化升級、熱銷水產品新裝登場'
  }, {
    image: '/indexpic/read3.jpg',
    time: '2022/10/17',
    text: '集團總部|鼎泰勝集團總部喬遷，進駐群光大樓'
  }

])
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center'

})
const breakpoints = ref({
  576: {
    itemsToShow: 1,
    snapAlign: 'left'
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'left'
  },
  992: {
    itemsToShow: 2,
    snapAlign: 'left'
  },
  1200: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1920: {
    itemsToShow: 4,
    snapAlign: 'left'
  }
})

</script>
