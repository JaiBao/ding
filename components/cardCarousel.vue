<template>
<Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" >
  <Slide v-for="(slide, index) in imageSlides" :key="'imgSlide-' + index">
    <div id="overViewPhotoNews" class="wrap">
    <div class="row cont">
    <q-card class="news col-md-4 col-sm-6 image-card txt">
      <div class="image-title">
        <h5>{{slide.title}}</h5>
        <p>{{slide.subTitle}}</p>
        <br>
        <img :src="slide.titleImage" :alt="slide.title">
      </div>
      <div class="image-content">
        <img :src="slide.contentImage" :alt="slide.title + ' Image'">
      </div>
    </q-card>
    </div>
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

const imageSlides = ref([
  {
    title: '飲用水事業',
    subTitle: 'Drinking Water Business',
    titleImage: '/overView/0-pic-13.png',
    contentImage: '/overView/0-pic-7.jpg'
  },
  {
    title: '食品製造業',
    subTitle: 'Food Manufacturing',
    titleImage: '/overView/0-pic-14.png',
    contentImage: '/overView/0-pic-8.jpg'
  },
  {
    title: '餐飲事業',
    subTitle: ' Foodservice Business',
    titleImage: '/overView/0-pic-15.png',
    contentImage: '/overView/0-pic-9.jpg'
  },
  {
    title: '影視事業',
    subTitle: ' Media Studio',
    titleImage: '/overView/0-pic-16.png',
    contentImage: '/overView/0-pic-10.jpg'
  },
  {
    title: '裝修工程事業',
    subTitle: 'Decoration Engineering Business',
    titleImage: '/overView/0-pic-18.png',
    contentImage: '/overView/0-pic-12.jpg'
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
