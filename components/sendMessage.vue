<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input filled v-model="form.subject" label="主旨" lazy-rules :rules="[ val => !!val || '請填寫主旨']" />
    <q-input filled v-model="form.name" label="聯絡姓名" lazy-rules :rules="[ val => !!val || '請填寫聯絡姓名']" />
    <q-input filled v-model="form.phone" label="連絡電話" lazy-rules :rules="[ val => !!val || '請填寫連絡電話']" />
    <q-input filled v-model="form.email" label="聯絡信箱" lazy-rules :rules="[ val => !!val || '請填寫聯絡信箱']" />
    <q-input filled v-model="form.content" type="textarea" label="問題內容" lazy-rules :rules="[ val => !!val || '請填寫問題內容']" />
    <div class="row items-center q-gutter-sm">

      <!-- <q-btn label="刷新驗證碼" @click="refreshCaptcha" /> -->
      <div class="col col-10 justify-end">
      <q-input filled v-model="form.captcha" label="驗證碼" lazy-rules :rules="[ val => val === captcha || '驗證碼不正確']" /></div>
        <div class="col col-2 bg-black text-white" @click="refreshCaptcha" :key="captcha">{{ captcha }}</div>
    </div>
    <div>
      <q-btn label="Submit" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  subject: '',
  name: '',
  phone: '',
  email: '',
  content: '',
  captcha: ''
})

const captcha = ref(generateCaptcha())

function generateCaptcha () {
  return Math.random().toString(36).substring(2, 8)
}

const refreshCaptcha = () => {
  captcha.value = generateCaptcha()
}

const onSubmit = async () => {
  // 檢查驗證碼是否正確
  if (form.value.captcha !== captcha.value) {
    alert('驗證碼不正確')
    return
  }

  // 建立郵件內容
  const emailContent = `
    主旨: ${form.value.subject}
    聯絡姓名: ${form.value.name}
    連絡電話: ${form.value.phone}
    聯絡信箱: ${form.value.email}
    問題內容: ${form.value.content}
  `

  try {
    // 使用 axios 發送 POST 請求，將郵件內容發送到指定郵箱
    await axios.post('https://api.example.com/send-email', {
      to: 'dtsmkt@dts.com.tw',
      subject: '聯絡我們表單提交',
      content: emailContent
    })

    // 清空表單
    form.value = {
      subject: '',
      name: '',
      phone: '',
      email: '',
      content: '',
      captcha: ''
    }

    // 刷新驗證碼
    refreshCaptcha()

    alert('郵件已成功寄出')
  } catch (error) {
    console.error(error)
    alert('郵件發送失敗')
  }
}
</script>
