<template>
  <q-page>
    <!-- 大圖視差 -->
    <!-- 大圖視差 -->
    <div class="full-width recruitSection1">
      <img class="section1Img" src="/message/6-pic-1.jpg" />
      <div class="section1Title">
        <div class="titleContent">
          <h2>聯絡我們</h2>
          <div class="whiteHr"></div>
          <h6>Contact us</h6>
        </div>
        <div class="titleContent2 gt-sm">
          <h5>如果您對我們有任何建議或諮詢，歡迎您與我們聯繫!</h5>

          <p>電話：(02) 2278-2325</p>
          <p>上班時間：周一至周五 09:00-18:00</p>
        </div>
      </div>
      <!-- <div class="section1Title2">
        <div class="titleContent2 gt-sm">
          <h6>如果您對我們有任何建議或諮詢，歡迎您與我們聯繫!</h6>

          <p>電話：(02) 2278-2325</p>
          <p>周一至周五 09:00-18:00</p>
        </div>
      </div> -->
    </div>

    <!-- 聯絡資訊 -->
    <q-card class="contactusCard lt-md">
      <p>如果您對我們有任何建議或諮詢，歡迎您與我們聯繫!</p>

      <p>電話：(02) 2278-2325</p>
      <p>周一至周五 09:00-18:00</p>
    </q-card>
    <!-- 聯絡表單 -->
    <q-card class="messageCard">
      <div class="cardTitle">
        <h3>業務合作or其他事宜</h3>
        <p>歡迎您透過聯絡表單與我們聯繫</p>
      </div>
      <q-form @submit="onSubmit" class="q-gutter-md messageForm row">
        <div class="row formContent">
          <div class="formInput row col-md-6 col-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                問題主旨
              </p>
            </div>
            <q-input v-model="form.subject" lazy-rules />
          </div>

          <div class="formInput row col-md-6 col-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡姓名
              </p>
            </div>
            <q-input v-model="form.name" lazy-rules />
            <!-- <div class="gender">
    <q-radio v-model="form.gender" val="1" label="先生" size="sm" style="font-size: 18px;"/>
                  <q-radio v-model="form.gender" val="2" size="sm" label="小姐"  style="font-size: 18px;"/></div> -->
          </div>

          <div class="row items-center formInput col-md-6 col-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡電話
              </p>
            </div>
            <q-input v-model="form.phone" lazy-rules />
          </div>

          <div class="row items-center formInput col-md-6 col-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡信箱
              </p>
            </div>
            <q-input v-model="form.email" lazy-rules />
          </div>

          <div class="formInput3 col-12 col-md-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                問題內容
              </p>
            </div>
            <q-input v-model="form.content" type="textarea" lazy-rules />
          </div>

          <div class="row formInput2 col-12">
            <div class="formTitle">
              <p>
                <span>*</span>
                輸入驗證碼
              </p>
            </div>
            <div class="right">
              <q-input v-model="form.captcha" label="驗證碼" lazy-rules :rules="[val => val === captcha || '驗證碼不正確']" />

              <div class="text-white formCaptcha col-4" @click="refreshCaptcha" :key="captcha">{{ captcha }}</div>
            </div>
            <div class="messageBtn">
              <q-btn label="清除訊息" @click="reset" type="reset" style="margin-right: 0.5%; color: rgba(46, 46, 46, 1)" />
              <q-btn label="發送訊息" type="submit" style="margin-left: 0.5%; color: rgba(230, 1, 19, 1); border: 2px solid #e60113" />
            </div>
          </div>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'

useHead({
  title: '鼎泰勝集團 - 聯絡我們',
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
      content: '/indexpic/0-pic-13.png' // 使用你的圖片路徑
    },
    {
      property: 'og:image:alt',
      content: '鼎泰勝圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.dtstw.com/message'
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

const $q = useQuasar()

const form = reactive({
  subject: '',
  name: '',
  phone: '',
  email: '',
  content: '',
  captcha: ''
  // gender: '1'
})
function reset() {
  form.subject = ''
  form.name = ''
  form.phone = ''
  form.email = ''
  form.content = ''
  form.captcha = ''
  // form.gender = '1'
}

const captcha = ref(generateCaptcha())

function generateCaptcha() {
  return Math.random().toString(36).substring(2, 8)
}
const refreshCaptcha = () => {
  captcha.value = generateCaptcha()
}

const onSubmit = async () => {
  if (!form.subject) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫主旨'
    })
    return
  }
  if (!form.name) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡姓名'
    })
    return
  }
  if (!form.phone) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡電話'
    })
    return
  }
  if (!form.email) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡信箱'
    })
    return
  }
  if (!form.content) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫問題內容'
    })
    return
  }
  const isValid = Object.values(form).every(value => value)
  if (!isValid || form.captcha !== captcha.value) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '驗證碼錯誤'
    })
  } else {
    try {
      await sendDataToAppsScript(form)
      // 清空表單
      reset()

      // 刷新驗證碼
      refreshCaptcha()

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'check',
        message: '郵件已成功寄出'
      })
    } catch (error) {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'error',
        message: '郵件發送失敗'
      })
    }
  }
}

const sendDataToAppsScript = async formData => {
  const scriptUrl = 'https://www.dtstw.com:3000/data/dtstw' // 替换为您的 Google Apps Script 项目的脚本 URL
  const data = {
    subject: formData.subject,
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    content: formData.content
  }

  try {
    await axios.post(scriptUrl, data)
    console.log('Data sent to Google Apps Script')
  } catch (error) {
    console.error('Error sending data to Google Apps Script:', error)
  }
}
</script>
<style lang="scss" scoped>
.recruitSection1 {
  margin-bottom: 3%;
  position: relative;
  // height: 800px;
  .section1Img {
    width: 100%;

    object-fit: contain;
  }
  .titleContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      align-items: flex-start;
      margin-bottom: 5%;
    }
  }
  .titleContent2 {
    p {
      margin: 1% 0;
      color: #222;
    }
    h5 {
      font-size: 28px;
      font-style: normal;
      font-weight: 900;
      margin: 0;
      margin-bottom: 3%;
      color: #222;
    }
  }
  .section1Title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    // width: 100%;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    h2 {
      margin: 0;
      color: #222;
      text-align: center;

      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h6 {
      color: #5f5f5f;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: 0;
    }
    .whiteHr {
      width: 180px;
      height: 2px;
      flex-shrink: 0;
      border-radius: 99px;
      background: #5f5f5f;
      text-align: center;
      margin: 16px 0;
      @media (min-width: 1024px) {
        width: 321px;
      }
    }
  }
  @media (min-width: 992px) {
    .section1Title {
      top: 10%;
      left: 40%;
      @media (min-width: 1200px) {
        left: 36%;
      }
      @media (min-width: 1400px) {
        left: 33.5%;
      }
      @media (min-width: 1500px) {
        left: 30.5%;
      }
      @media (min-width: 1700px) {
        left: 27.5%;
      }
      h2 {
        margin: 1% 0;
        font-size: 3rem;
        font-weight: 700;
        line-height: 28px; /* 58.333% */
      }
      h6 {
        margin: 0;
        font-weight: 500;
        line-height: 28px; /* 100% */
        font-size: 1.75rem;
        margin-bottom: 3%;
      }
    }
  }
}
.contactusCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // padding: 2%;
  // background: linear-gradient(to right, rgb(248, 244, 244), #bdbdbd);
  background: #fff;
  // width: 80vw;
  // margin: 5vw 5vw;
  // p {
  //   // margin: 0;
  // }
}
.messageCard {
  // width: 80vw;
  // margin: 5vw 10vw;
  display: flex;
  background: url('/test/bgsocial.png') no-repeat center -5% / cover;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    align-items: flex-start;
  }
  .cardTitle {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    @media (min-width: 992px) {
      align-items: flex-start;
      padding: 0 13%;
    }
  }
  h3 {
    color: #222;
    font-size: 1.5rem;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 28px;
      padding: 0;
      font-weight: 900;
      margin: 0;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #222;
    @media (min-width: 768px) {
      font-size: 1rem;
      padding: 0;
      font-weight: 400;
      margin: 0;
    }
  }
  // 表單
  .messageForm {
    .q-field__native,
    .q-field__input {
      width: 100%;
      min-width: 0;
      /* outline: 0 !important; */
      -webkit-user-select: auto;
      user-select: auto;
      opacity: 0.5;
      background: #fff;
    }
    display: flex;
    // flex-direction: column;
    // align-items: center;
    width: 100%;
    // justify-content: flex-end;

    .formContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      @media (min-width: 1024px) {
        // width: 60%;
        padding: 2% 13%;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5%;
      }
    }

    .formInput {
      display: flex;
      flex-direction: row;
      // align-items: center;
      flex-wrap: wrap;
      font-size: 1rem;
      span {
        color: red;
      }

      .q-field {
        width: 100%;
        margin: 2px;
      }
      .q-field__control {
        color: var(--q-primary);
        height: 41px;
        max-width: 100%;
        outline: none;
      }
      .formTitle {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        // align-items: center;
        p {
          margin: 10px 0 0 0;
        }
      }
    }
    .formInput2 {
      display: flex;
      flex-direction: row;
      // align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      .q-field {
        width: 59%;
        margin: 2px;
      }
      .formTitle {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        // align-items: center;
        span {
          color: red;
        }
        p {
          margin: 10px 0 0 0;
        }
      }
    }
    .messageBtn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 2% 0;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }

      .q-btn {
        border-radius: 999px;
        border: 2px solid #2e2e2e;
        width: 192px;
        padding: 10px 0;
        background: transparent;
        // span {
        //   color: #fff;
        // }
      }
    }
    .formCaptcha {
      width: 40%;
      height: 38px;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: rgba(68, 68, 68, 1);
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
}
.formInput3 {
  span {
    color: red;
  }
}
</style>
