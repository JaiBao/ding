<template>

  <q-page>
        <!-- 大圖視差 -->

        <div class=" full-width " >
<q-parallax
  src="~assets/message/6-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center"  >聯絡我們</div>
      <div class="text-grey text-h6 alight-center" >Contact us</div>
    </div>
  </q-parallax>
</div>
<!-- 聯絡資訊 -->
<q-card class="contactusCard">
  <p>如果您對我們有任何建議或諮詢，歡迎您與我們聯繫!</p><br>
  <p>電話：(02) 2278-2325<br>
  周一至周五 09:00-18:00</p>
</q-card>
<!-- 聯絡表單 -->
<q-card class="messageCard ">
  <h3>聯絡表單</h3>
  <p>業務合作或其他事宜歡迎您透過連絡表單與我們聯繫</p>
<q-form @submit="onSubmit" class="q-gutter-md messageForm row">
  <div class="row formContent">
  <div class="formInput row col-md-6 col-12">
    <div class="formTitle">
    <p><span>*</span>問題主旨</p></div><q-input outlined v-model="form.subject" lazy-rules  /></div>

  <div class=" formInput row col-md-6 col-12">    <div  class="formTitle">
    <p><span>*</span>聯絡姓名</p></div>
  <q-input outlined v-model="form.name"  lazy-rules  />
    <!-- <div class="gender">
    <q-radio v-model="form.gender" val="1" label="先生" size="sm" style="font-size: 18px;"/>
                  <q-radio v-model="form.gender" val="2" size="sm" label="小姐"  style="font-size: 18px;"/></div> -->
                </div>

  <div class="row items-center formInput col-md-6 col-12">    <div  class="formTitle">
    <p><span>*</span>連絡電話   </p></div>
   <q-input outlined v-model="form.phone"  lazy-rules  /></div>

  <div class="row items-center formInput col-md-6 col-12">    <div  class="formTitle">
    <p><span>*</span>聯絡信箱   </p></div>
  <q-input outlined v-model="form.email" lazy-rules  /></div>

  <div class=" formInput3 col-12 col-md-12">    <div  class="formTitle">
    <p><span>*</span>問題內容   </p></div>
  <q-input outlined v-model="form.content" type="textarea"  lazy-rules  /></div>

  <div class="row  formInput2 col-md-8 col-12">    <div  class="formTitle">
    <p><span>*</span>輸入驗證碼</p></div>
  <q-input  outlined v-model="form.captcha" label="驗證碼" lazy-rules :rules="[ val => val === captcha || '驗證碼不正確']" />

    <div class="bg-black text-white formCaptcha col-4" @click="refreshCaptcha" :key="captcha">{{ captcha }}</div>
  </div>

    <div class=" messageBtn">
      <q-btn label="清除" @click="reset" type="reset" color="black" style="margin-right: 0.5%;"/>
      <q-btn label="送出" type="submit" color="red" style="margin-left: 0.5%;"/>
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
function reset () {
  form.subject = ''
  form.name = ''
  form.phone = ''
  form.email = ''
  form.content = ''
  form.captcha = ''
  // form.gender = '1'
}

const captcha = ref(generateCaptcha())

function generateCaptcha () {
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
      message: '請填寫連絡電話'
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

const sendDataToAppsScript = async (formData) => {
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
<style lang="scss">

</style>
