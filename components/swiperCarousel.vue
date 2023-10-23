<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(slide, index) in imageSlides" :key="'imgSlide-' + index">
      <div id="overViewPhotoNews" class="wrap">
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
    </swiper-slide>
    <!-- <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper-bundle.css'

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
const swiperOptions = ref({
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
</script>
