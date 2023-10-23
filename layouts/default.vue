<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-black text-white" height-hint="100">
      <q-toolbar>
        <q-toolbar-title>
          <div class="titleLogo row">
            <q-btn to="/">
              <img src="/indexpic/0-pic-13.png" to="/" />
            </q-btn>
            <div class="gt-sm titleBtn">
              <q-tabs align="left" v-model="$route.path" class="my-tabs">
                <q-btn-dropdown
                  :class="{ active: isActiveAbout, titleBtns: true, isList: dropdownVisible }"
                  auto-close
                  stretch
                  flat
                  label="關於鼎泰勝"
                  @mouseenter="openDropdown"
                  @mouseleave="closeDropdown"
                  v-model="dropdownVisible"
                  to="/chronicle">
                  <q-list class="gt-sm" @mouseenter="keepDropdownOpen" @mouseleave="closeDropdown">
                    <q-item clickable to="/chronicle">
                      <q-item-section>集團紀事</q-item-section>
                    </q-item>
                    <q-item clickable to="/vision">
                      <q-item-section>願景與宗旨</q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown :class="{ active: isActiveNews }" class="titleBtns" to="/news" label="最新消息" flat auto-close stretch />
                <q-btn-dropdown :class="{ active: isActiveBusiness }" class="titleBtns" to="/business" label="集團事業體" flat auto-close stretch />
                <q-btn-dropdown :class="{ active: isActivePartner }" class="titleBtns" to="/partner" label="合作夥伴" flat auto-close stretch />
                <q-btn-dropdown :class="{ active: isActiveSocial }" class="titleBtns" to="/social" label="企業社會責任" flat auto-close stretch />
                <q-btn-dropdown :class="{ active: isActiveRecruit }" class="titleBtns" to="/recruit" label="人才招募" flat auto-close stretch />
                <q-btn-dropdown :class="{ active: isActiveMessage }" class="titleBtns" to="/message" label="聯絡我們" flat auto-close stretch />
                <a href="https://www.facebook.com/dingtaisheng?locale=zh_TW" target="_bank" style="cursor: pointer">
                  <img src="/indexpic/facebook.svg" style="width: 45px; height: 45px" />
                </a>
              </q-tabs>
            </div>
          </div>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="lt-md" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered class="bg-black text-white" :width="200">
      <q-list>
        <q-expansion-item label="關於鼎泰勝" caption="2 Items">
          <q-item clickable to="/chronicle" @click="rightDrawerOpen = false">
            <q-item-section>集團紀事</q-item-section>
          </q-item>
          <q-item clickable to="/vision" @click="rightDrawerOpen = false">
            <q-item-section>願景與宗旨</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/news">
          <q-item-section>最新消息</q-item-section>
        </q-item>
        <q-item clickable to="/business">
          <q-item-section>集團事業體</q-item-section>
        </q-item>
        <q-item clickable to="/partner">
          <q-item-section>合作夥伴</q-item-section>
        </q-item>
        <q-item clickable to="/social">
          <q-item-section>企業社會責任</q-item-section>
        </q-item>
        <q-item clickable to="/recruit">
          <q-item-section>人才招募</q-item-section>
        </q-item>
        <q-item clickable to="/message">
          <q-item-section>聯絡我們</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

    <!-- 頁尾 -->
    <q-footer bordered class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer_area">
            <div class="contactUs col-12 col-sm-6">
              <router-link to="/chronicle"><h5>關於鼎泰勝</h5></router-link>

              <!-- <li><router-link to="/overView">集團概述</router-link></li> -->
              <!-- <li><router-link to="/chronicle">集團紀事</router-link></li>
              <li><router-link to="/vision">願景與宗旨</router-link></li> -->
            </div>

            <div class="contactUs col-12 col-sm-6">
              <router-link to="/news"><h5>最新消息</h5></router-link>
            </div>
            <div class="contactUs col-12 col-sm-6">
              <router-link to="/business"><h5>集團事業體</h5></router-link>
            </div>
            <div class="contactUs col-12 col-sm-6">
              <router-link to="/partner"><h5>合作夥伴</h5></router-link>
            </div>

            <div class="contactUs col-12 col-sm-6">
              <router-link to="/social"><h5>企業社會責任</h5></router-link>
            </div>
            <div class="contactUs col-12 col-sm-6">
              <router-link to="/recruit"><h5>人才招募</h5></router-link>
            </div>
            <div class="contactUs col-12 col-sm-6">
              <router-link to="/message"><h5>聯絡我們</h5></router-link>
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
          <div class="footerBusiness">
            <div class="contactUs">
              <!-- <router-link to="/business"><h5>集團事業體</h5></router-link> -->
              <div class="businessIcon">
                <a href="https://www.springwater.tw" target="_bank">
                  <img src="/test/02-Logo.png" />
                </a>
                <div class="l-line gt-xs"></div>
                <a href="https://www.facebook.com/iamsxb/?locale=zh_TW" target="_bank">
                  <img src="/test/05-Logo.png" />
                </a>
                <div class="l-line gt-xs"></div>

                <img src="/test/04-Logo.png" />

                <div class="l-line"></div>

                <img src="/test/01-Logo.png" />

                <div class="l-line gt-xs"></div>
                <a href="https://www.instagram.com/staysolid4fam">
                  <img src="/test/06-Logo.png" />
                </a>
                <div class="l-line gt-xs"></div>
                <a href="https://www.chinabing.net" target="_bank">
                  <img src="/test/03-Logo.png" />
                </a>
                <!-- <div class="bottom xs">
                  <a href="https://www.instagram.com/staysolid4fam">
                    <img src="/test/06-Logo.png" />
                  </a>

                  <img src="/test/01-Logo.png" />
                </div> -->
              </div>
            </div>
          </div>

          <div class="row q-mt-md">
            <div class="copyright col-12">
              <div class="copyrightLogo col-md-6 col-12">
                <img src="/indexpic/0-pic-13.png" />
              </div>
              <div class="copyrightText">
                <p>
                  Copyright© 2023 鼎泰勝國際股份有限公司著作權所有
                  <span class="gt-xs">|</span>
                  <router-link to="/privacy" class="custom-link">隱私權政策</router-link>
                  <br />
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
const route = useRoute()
const dropdownHovered = ref(false)
const dropdownVisible = ref(false)
const rightDrawerOpen = ref(false)
// const showSubmenu = ref(false)
// const isArrowVisible = ref(false)

let closeDropdownTimeout = null

const isActiveAbout = computed(() => {
  return ['/chronicle', '/vision'].includes(route.path)
})

const isActiveNews = computed(() => route.path === '/news')
const isActiveBusiness = computed(() => route.path === '/business')
const isActiveSocial = computed(() => route.path === '/social')
const isActiveRecruit = computed(() => route.path === '/recruit')
const isActiveMessage = computed(() => route.path === '/message')
const isActivePartner = computed(() => route.path === '/partner')

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

function openDropdown() {
  if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
  dropdownVisible.value = true
}

function closeDropdown() {
  closeDropdownTimeout = setTimeout(() => {
    dropdownVisible.value = false
    dropdownHovered.value = false
  }, 200) // 延遲 200 毫秒
}

function keepDropdownOpen() {
  if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout)
  dropdownVisible.value = true
  dropdownHovered.value = true
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  padding: 50px 0;
  background: #162e44;
}

.footer_area {
  // max-width: 1440px;
  width: 83%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  // gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 200px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
}

.footer_area .contactUs ul {
  padding: 0;
  list-style: none;
}
.l-line {
  width: 240px;
  height: 1px;
  margin: 18px 0;
  background: linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, #d9d9d9 57.29%, rgba(217, 217, 217, 0) 100%);
  @media (min-width: 768px) {
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #d9d9d9 49.48%, rgba(217, 217, 217, 0) 100%);
    width: 1px;
    height: 50px;
  }
}
.contactUs a {
  text-decoration: none;
  color: #fff;
  font-family: 'Montserrat', sans-serif, Arial, sans-serif;
  font-size: 1rem;
  text-align: center;
  // margin-left: 22px;

  display: block;
}
.footerBusiness {
  .contactUs {
    h5 {
      font-size: 1rem;
      margin-top: 0;
      opacity: 0.6;
      // @media (min-width: 768px) {
      //   font-size: 1.5rem;
      // }
    }
  }
}
.businessIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 5%;
  margin: 5% 0 15% 0;
  flex-wrap: wrap;
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      margin: 0 10%;
    }
  }

  img {
    width: 70px;
    // height: 68.108px;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    margin: 2% 0 3% 0;
    padding: 0 20%;
    justify-content: space-between;
    img {
      width: 70px;
      height: 70px;
    }
  }
}

.footer_area .contactUs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 2%;

  @media (max-width: 996px) {
    // width: 24%;
    margin: auto;
  }

  h5 {
    margin-bottom: 5px;
    margin-right: 15px;
    font-size: 0.75rem;
    font-weight: 500;

    i {
      margin: 5px;
    }
    @media (min-width: 768px) {
      font-size: 1rem;
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
    @media (min-width: 996px) {
      align-items: flex-start;
    }
  }
}

.copyright {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 996px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 230px;

    @media (min-width: 996px) {
      width: 300px;
      margin-bottom: 5%;
      padding-right: 7%;
    }
  }
  .copyrightLogo {
    @media (max-width: 996px) {
      padding-bottom: 2%;
      img {
        max-width: 100%;
      }

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .copyrightText {
    // max-width: 600px;
    height: 100%;
    p {
      padding-left: 4%;
      font-size: 0.9rem;
      line-height: 1rem;
      border-left: #dc1a04 3px solid;
      margin: 0;
    }
    @media (max-width: 996px) {
      p {
        font-size: 14px;
        white-space: pre-wrap;
        width: 100%;
        border-left: none;
      }
      display: flex;
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
.titleLogo {
  display: flex;
  flex-direction: row;
  padding: 0 7% 0 9%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 220px;
  }
  .titleBtn {
    // margin-left: 36%;
    .titleBtns {
      font-size: 1rem;
    }
  }
  @media (max-width: 1440px) {
    img {
      width: 210px;
    }
    .titleBtn {
      // margin-left: 12%;
      .titleBtns {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 1227px) {
    img {
      width: 200px;
    }
    .titleBtn {
      // margin-left: 2%;
      .titleBtns {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 1113px) {
    img {
      width: 200px;
    }
    .titleBtn {
      // margin-left: 2%;
      .titleBtns {
        font-size: 0.9rem;
      }
    }
  }
}
.drawerBtns {
  font-size: 1rem;
  font-weight: 100;
  // text-align: center;
}

.custom-link {
  color: inherit; /* 使用父元素的顏色 */
  text-decoration: none; /* 取消下劃線 */
}

// .isList::after {
//   content: '';
//   position: absolute;
//   border-right: 15px solid transparent;
//   border-left: 15px solid transparent;
//   border-bottom: 10px solid #cc66bc;
//   top: 35px;
//   left: 50%;
//   -webkit-transform: translateX(-50%);
//   transform: translateX(-50%);
//   opacity: 1;
//   pointer-events: none;
// }

// .isList:hover::after {
//   opacity: 1;
// }
</style>
