<template>
  <q-layout view="hHh lpR fff">

    <q-header reveal bordered class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
  <div class="titleLogo row" >
    <q-btn to="/">
    <img src="../assets/indexpic/logo.png"  to="/"></q-btn>
    <div class="gt-sm titleBtn row justify-center">
      <q-tabs align="left">
        <q-btn-dropdown class="titleBtns" auto-close stretch flat label="關於鼎泰勝"         @mouseenter="openDropdown"
  @mouseleave="closeDropdown"
  v-model="dropdownVisible"  :class="{ 'dropdown-hovered': dropdownHovered || dropdownVisible }">
          <q-list class="gt-sm" @mouseenter="keepDropdownOpen" @mouseleave="closeDropdown">
            <q-item clickable to="/overView">
              <q-item-section>集團概述</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '集團事紀'">
              <q-item-section>集團事紀</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '願景與宗旨'">
              <q-item-section>願景與宗旨</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown class="titleBtns" to="/page2" label="最新消息" flat auto-close stretch/>
        <q-btn-dropdown class="titleBtns" auto-close stretch flat  label="集團事業體" @mouseenter="openDropdown2"
  @mouseleave="closeDropdown2"
  v-model="dropdownVisible2"  :class="{ 'dropdown-hovered': dropdownHovered2 || dropdownVisible2 }">
          <q-list
          class="gt-sm" @mouseenter="keepDropdownOpen2" @mouseleave="closeDropdown2">
            <q-item clickable @click="tab = '飲用水事業'">
              <q-item-section>飲用水事業</q-item-section>
            </q-item>

            <q-item clickable @click="tab = '生技事業'">
              <q-item-section>生技事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '餐飲事業'">
              <q-item-section>餐飲事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '水酒事業'">
              <q-item-section >水酒事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '裝修工程事業'">
              <q-item-section style="font-size: 11px;">裝修工程事業</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown class="titleBtns" to="/page3" label="企業社會責任" />
        <q-btn-dropdown class="titleBtns" to="/page3" label="人才招募" />
        <q-btn-dropdown class="titleBtns" to="/page3" label="聯絡我們" />
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
        <div class="column">

        <q-btn-dropdown
        class="q-my-md drawerBtns"
        menu-self="top left"
        auto-close stretch flat label="關於鼎泰勝"  @mouseenter="openDropdown"
  @mouseleave="closeDropdown"
  v-model="dropdownVisible"  :class="{ 'dropdown-hovered': dropdownHovered || dropdownVisible }"
  >
          <q-list class="lt-md drawerBtns"
          align="left"
          @mouseenter="keepDropdownOpen" @mouseleave="closeDropdown">
            <q-item clickable to="/overView">
              <q-item-section>集團概述</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '集團事紀'">
              <q-item-section>集團事紀</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '願景與宗旨'">
              <q-item-section>願景與宗旨</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown
        class="q-my-md drawerBtns" to="/page2" label="最新消息" flat auto-close stretch/>
        <q-btn-dropdown
        class="q-my-md drawerBtns"
        menu-self="top left"
        auto-close stretch flat  label="集團事業體" @mouseenter="openDropdown2"
  @mouseleave="closeDropdown2"
  v-model="dropdownVisible2"  :class="{ 'dropdown-hovered': dropdownHovered2 || dropdownVisible2 }">
          <q-list
          class="lt-md" @mouseenter="keepDropdownOpen2" @mouseleave="closeDropdown2">
            <q-item clickable @click="tab = '飲用水事業'">
              <q-item-section>飲用水事業</q-item-section>
            </q-item>

            <q-item clickable @click="tab = '生技事業'">
              <q-item-section>生技事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '餐飲事業'">
              <q-item-section>餐飲事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '水酒事業'">
              <q-item-section >水酒事業</q-item-section>
            </q-item>
            <q-item clickable @click="tab = '裝修工程事業'">
              <q-item-section style="font-size: 11px;">裝修工程事業</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown         class="q-my-md drawerBtns" to="/page3" label="企業社會責任" />
        <q-btn-dropdown         class="q-my-md drawerBtns" to="/page3" label="人才招募" />
        <q-btn-dropdown         class="q-my-md drawerBtns" to="/page3" label="聯絡我們" />
        <q-btn class="drawerBtns"   @click="toggleRightDrawer" >關閉<i class="fa-sharp fa-light fa-x" style="color: #ffffff;"></i>
          </q-btn>

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
            <div class="contactUs  col-12 col-md-3 col-sm-6">
                <h5>關於鼎泰勝</h5>
                <ul>
                  <li><router-link to="/overView">集團概述</router-link></li>
                    <li><a href="#">集團事紀</a></li>
                    <li><a href="#">願景與宗旨</a></li>
                </ul>
            </div>
            <div class="contactUs col-12 col-md-3 col-sm-6">
                <h5>集團事業體</h5>
                <ul>
                    <li><a href="#">飲用水事業</a></li>
                    <li><a href="#">生技事業</a></li>
                    <li><a href="#">餐飲事業</a></li>
                    <li><a href="#">影視事業</a></li>
                    <li><a href="#">水酒事業</a></li>
                    <li><a href="#">裝修工程事業</a></li>
                </ul>
            </div>
            <div class="contactUs col-12 col-md-3 col-sm-6">
                <h5>企業社會責任</h5>
                <ul>
                    <li><a href="/overView">集團概述</a></li>
                    <li><a href="#">集團事紀</a></li>
                    <li><a href="#">願景與宗旨</a></li>
                </ul>
            </div>
            <div class="contactUs col-12 col-md-3 col-sm-6">
                <h5>人才招募</h5>

            </div>
            <div class="contactUs col-12 col-md-3 col-sm-6">
                <h5>聯絡我們</h5>

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
<div class="row">
   <div class="copyright col-12">
    <div class="copyrightLogo col-md-6 col-12">
  <img  src="../assets/indexpic/logo.png" ></div>
  <div class="copyrightText " style="max-width: 600px;margin-left: 3%;"><h6>
    Copyright© 2023 鼎泰勝國際股份有限公司著作權所有 <br>隱私權與政策| Cookie政策
  </h6>

  </div>
</div>
</div>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const dropdownHovered = ref(false)
const dropdownVisible = ref(false)
const dropdownHovered2 = ref(false)
const dropdownVisible2 = ref(false)
const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
function openDropdown () {
  dropdownVisible.value = true
}
function keepDropdownOpen () {
  dropdownVisible.value = true
  dropdownHovered.value = true
}
function closeDropdown () {
  dropdownVisible.value = false
  dropdownHovered.value = false
}
function openDropdown2 () {
  dropdownVisible2.value = true
}
function keepDropdownOpen2 () {
  dropdownVisible2.value = true
  dropdownHovered2.value = true
}
function closeDropdown2 () {
  dropdownVisible2.value = false
  dropdownHovered2.value = false
}

</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  padding: 50px 0;
  background: #162e44;
}

.footer_area {
  max-width: 1170px;
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
  font-size: 14px;
  margin-left: 22px;

  display: block;
}

.footer_area .contactUs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0 60px 40px 60px;
  @media (max-width:996px){

  margin: auto;
}

h5{
  margin-bottom:5px;
  i{
    margin: 5px;
  }

}
li {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
  }
}

.copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:996px){
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  img{
    width:400px;
    @media (min-width:768px){
      border-right: #dc1a04 5px solid;padding-right: 3%;
}

}
.copyrightLogo{
  @media (max-width:996px){
    img{
      max-width:100%;
    }

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}}
.copyrightText{
  @media (max-width:996px){
    h6{
      font-size: 14px;
      white-space:pre-wrap;
      width:100%;

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
    width: 300px;
  }
  .titleBtn{
    margin-left: 7%;
        .titleBtns{
        font-size: 20px;
      }
  }
  @media (min-width: 1120px){
    .titleBtn{
    margin-left: 8%;
        .titleBtns{
        font-size: 17px;
      }
  }
  }
}
.drawerBtns{
  font-size: 20px;
}

</style>
