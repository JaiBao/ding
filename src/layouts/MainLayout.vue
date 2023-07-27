<template>
  <q-layout view="hHh lpR fff">

    <q-header reveal bordered class="bg-black text-white" height-hint="100">
      <q-toolbar>
        <q-toolbar-title>
  <div class="titleLogo row" >
    <q-btn to="/">
    <img src="../assets/indexpic/0-pic-13.png"  to="/"></q-btn>
    <div class="gt-sm titleBtn row justify-center">
      <q-tabs align="left" v-model="$route.path" class="my-tabs">
        <q-btn-dropdown class="titleBtns" auto-close stretch flat label="關於鼎泰勝"         @mouseenter="openDropdown"
  @mouseleave="closeDropdown"
  v-model="dropdownVisible"  :class="{ 'dropdown-hovered': dropdownHovered || dropdownVisible }">
          <q-list class="gt-sm" @mouseenter="keepDropdownOpen" @mouseleave="closeDropdown">
            <q-item clickable to="/chronicle"
            :class="{'selected': $route.path === '/chronicle'}">
              <q-item-section>集團紀事</q-item-section>
            </q-item>
            <q-item clickable to="/vision">
              <q-item-section>願景與宗旨</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown class="titleBtns" to="/news" label="最新消息" flat auto-close stretch/>
        <q-btn-dropdown class="titleBtns" to="/business" label="集團事業體" flat auto-close stretch/>
        <q-btn-dropdown class="titleBtns" to="/social" label="企業社會責任" flat auto-close stretch />
        <q-btn-dropdown class="titleBtns" to="/recruit" label="人才招募" flat auto-close stretch />
        <q-btn-dropdown class="titleBtns" to="/message" label="聯絡我們" flat auto-close stretch/>
      </q-tabs>
    </div>
  </div>
</q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="lt-md" />
      </q-toolbar>

    </q-header>
<!-- 漢堡 -->
    <q-drawer  v-model="rightDrawerOpen" side="right" behavior="mobile" bordered class="bg-black text-white"  width="200">
      <q-tabs vertical align="left" >
        <div class="column ">

          <q-btn
        class="q-my-md drawerBtns"
        stretch flat
        label="關於鼎泰勝"
        @click="showSubmenu = !showSubmenu"
        style="line-height: 1.15em;min-height: 0.572em;">
       <q-icon  style="color:white" :name="showSubmenu ? 'expand_more' : 'chevron_right'"/>
      </q-btn>

        <q-collapse class="bg-grey column items-center justify-center" v-if="showSubmenu">

          <q-btn
          class="q-my-md drawerBtns"
          clickable to="/chronicle"
          stretch flat label="集團紀事"
          @click="showSubmenu = false"
          style="line-height: 1.15em;min-height: 0.572em;" />

          <q-btn
          class="q-my-md drawerBtns"
          clickable to="/vision"
          auto-close stretch flat label="願景與宗旨"
          @click="showSubmenu = false"
          style="line-height: 1.15em;min-height: 0.572em;" />

        </q-collapse>

        <q-btn
        class="q-my-md drawerBtns" to="/news" label="最新消息" flat auto-close stretch style="line-height: 1.15em;min-height: 0.572em;"/>
        <q-btn
        class="q-my-md drawerBtns" to="/business" label="集團事業體" flat auto-close stretch style="line-height: 1.15em;min-height: 0.572em;"/>

        <q-btn       class="q-my-md drawerBtns" to="/social" label="企業社會責任" style="line-height: 1.15em;min-height: 0.572em;" />
        <q-btn        class="q-my-md drawerBtns" to="/recruit" label="人才招募" style="line-height: 1.15em;min-height: 0.572em;" />
        <q-btn        class="q-my-md drawerBtns" to="/message" label="聯絡我們" style="line-height: 1.15em;min-height: 0.572em;" />

    </div></q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- 頁尾 -->
    <q-footer  bordered class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer_area ">
            <div class="contactUs  col-12 col-md-2 col-sm-6">
                <h5>關於鼎泰勝</h5>

                  <!-- <li><router-link to="/overView">集團概述</router-link></li> -->
                    <li><router-link to="/chronicle">集團紀事</router-link></li>
                    <li><router-link to="/vision">願景與宗旨</router-link></li>

            </div>

            <div class="contactUs col-12 col-md-2 col-sm-6">
              <router-link to="/news"> <h5>最新消息</h5></router-link>

            </div>
            <div class="contactUs col-12 col-md-2 col-sm-6">
              <router-link to="/business"><h5>集團事業體</h5></router-link>
                <!-- <h5>集團事業體</h5>
                <ul>
                    <li><a href="#">飲用水事業</a></li>
                    <li><a href="#">生技事業</a></li>
                    <li><a href="#">餐飲事業</a></li>
                    <li><a href="#">影視事業</a></li>
                    <li><a href="#">水酒事業</a></li>
                    <li><a href="#">裝修工程事業</a></li>
                </ul> -->
            </div>
            <div class="contactUs col-12 col-md-2 col-sm-6">
              <router-link to="/social"><h5>企業社會責任</h5></router-link>
            </div>
            <div class="contactUs col-12 col-md-2 col-sm-6">
              <router-link to="/recruit"> <h5>人才招募</h5></router-link>

            </div>
            <div class="contactUs col-12 col-md-2 col-sm-6">
              <router-link to="/message"> <h5>聯絡我們</h5></router-link>

            </div>
            <!-- <div class="popularNews">
                <h5 >
                  <q-avatar round size="48px">
                 <i class="fa-brands fa-facebook" style="font-size: 32px; color: #dc1a04;"></i>
                  </q-avatar>
                  <q-avatar round size="48px">
                  <i class="fa-brands fa-square-youtube" style="font-size: 32px; color: #dc1a04;"></i>
                  </q-avatar>
                  <q-avatar rounde size="48px">
                  <i class="fa-brands fa-instagram" style="font-size: 32px; color: #dc1a04;"></i>
                  </q-avatar>
                </h5>
            </div> -->

        </div>
<div class="row q-mt-md">
   <div class="copyright col-12">
    <div class="copyrightLogo col-md-6 col-12">
  <img  src="../assets/indexpic/0-pic-13.png" >
</div>
  <div class="copyrightText " ><p>
    Copyright© 2023 鼎泰勝國際股份有限公司著作權所有<span class="gt-xs"> | </span> <router-link to="/privacy" class="custom-link">隱私權政策</router-link> <br>
    241新北市三重光復路二段69號18樓 | (02) 2278-2325
  </p>

  </div>
</div>
</div>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { onMounted, onUpdated, nextTick, ref } from 'vue'

import AOS from 'src/boot/aos'

const dropdownHovered = ref(false)
const dropdownVisible = ref(false)
// const dropdownHovered2 = ref(false)
// const dropdownVisible2 = ref(false)
const rightDrawerOpen = ref(false)
const showSubmenu = ref(false)

// const showSubmenu2 = ref(false)
let closeDropdownTimeout = null
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
function openDropdown () {
  if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
  dropdownVisible.value = true
}

function closeDropdown () {
  closeDropdownTimeout = setTimeout(() => {
    dropdownVisible.value = false
    dropdownHovered.value = false
  }, 200) // 延遲 200 毫秒
}

function keepDropdownOpen () {
  if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
  dropdownVisible.value = true
  dropdownHovered.value = true
}

// function openDropdown2 () {
//   if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
//   dropdownVisible2.value = true
// }
// function keepDropdownOpen2 () {
//   if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
//   dropdownVisible2.value = true
//   dropdownHovered2.value = true
// }
// function closeDropdown2 () {
//   closeDropdownTimeout = setTimeout(() => {
//     dropdownVisible2.value = false
//     dropdownHovered2.value = false
//   }, 200) // 延遲 200 毫秒
// }

onMounted(async () => {
  await nextTick()
  AOS.init()
  AOS.refresh()
})

onUpdated(async () => {
  await nextTick()
  AOS.refresh()
})

</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  padding: 50px 0;
  background: #162e44;
}

.footer_area {
  // max-width: 1440px;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
  @media (max-width:996px){
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
}

.footer_area .contactUs ul {
  padding: 0;
  list-style: none;

}

.footer_area .contactUs a {
  text-decoration: none;
  color: #fff;
  font-family: 'Montserrat', sans-serif, Arial, sans-serif;
  font-size: 1rem;
  text-align: center;
  // margin-left: 22px;

  display: block;
}

.footer_area .contactUs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width:996px){

  margin: auto;
}

h5{
  margin-bottom:5px;
  font-size: 1rem;
  font-weight: 500;
  i{
    margin: 5px;
  }

}
li {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    max-width: 100%;
    font-size: 1rem;
    @media(min-width:996px){
      align-items: flex-start;
    }
  }
}

.copyright {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width:996px){
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  img{
    width:230px;

    @media (min-width:996px){
      width:300px;

      padding-right: 7%;

}

}
.copyrightLogo{
  @media (max-width:996px){
    padding-bottom: 2%;
    img{
      max-width:100%;
    }

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}}
.copyrightText{
  // max-width: 600px;
  height: 100%;
  p{
    padding-left: 4%;
    font-size: 0.9rem;
    line-height: 1rem;
    border-left: #dc1a04 3px solid;
    margin: 0;
  }
  @media (max-width:996px){
    p{
      font-size: 14px;
      white-space:pre-wrap;
      width:100%;
      border-left:none

    }
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

  }
}
.q-dropdown-list-left {
  right: auto;
  left: 0;
}

//標題logo
.titleLogo{
  display: flex;margin-left: 5%; align-items: center;
  img{
    width: 220px;
  }
  .titleBtn{
    margin-left: 20%;
        .titleBtns{
        font-size: 1rem;
      }
  }
  @media (max-width: 1440px){
    img{
    width: 210px;
  }
    .titleBtn{
    margin-left: 9%;
        .titleBtns{
        font-size: 1rem;
      }
  }

  }
@media (max-width: 1227px){
    img{
    width: 200px;
  }
    .titleBtn{
    margin-left: 2%;
        .titleBtns{
        font-size: 1rem;
      }
  }

  }
@media (max-width: 1113px){
    img{
    width: 200px;
  }
    .titleBtn{
    margin-left: 2%;
        .titleBtns{
        font-size: 0.9rem;
      }
  }

  }

}
.drawerBtns{
  font-size: 1rem;
  font-weight: 100;
  // text-align: center;
}

.custom-link {
  color: inherit; /* 使用父元素的顏色 */
  text-decoration: none; /* 取消下劃線 */
}

</style>
