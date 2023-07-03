<template>
  <q-page>
        <!-- 大圖視差 -->

        <div class=" full-width " >
<q-parallax
  src="~assets/message/6-pic-1.jpg"
>
<div class="absolute-left-center custom-caption2">

        <div class="text-black text-h2 alight-center" >聯絡我們</div>
      <div class="text-grey text-h5 alight-center" >Contact us</div>
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
  <p>業務合作或其他事疑歡迎您透過連絡表單與我們聯繫</p>
<q-form @submit="onSubmit" class="q-gutter-md messageForm">
  <div class="formInput row items-center">
    <div class="formTitle">
    <p><span>*</span>主旨   </p></div><q-input outlined v-model="form.subject" lazy-rules :rules="[ val => !!val || '請填寫主旨']" /></div>

  <div class=" formInput2">    <div  class="formTitle">
    <p><span>*</span>聯絡姓名</p></div>
  <q-input outlined v-model="form.name"  lazy-rules :rules="[ val => !!val || '請填寫聯絡姓名']" />
    <div class="gender">
    <q-radio v-model="form.gender" val="1" label="先生" size="sm" />
                  <q-radio v-model="form.gender" val="2" size="sm" label="小姐" /></div>
                </div>

  <div class="row items-center formInput">    <div  class="formTitle">
    <p><span>*</span>連絡電話   </p></div>
   <q-input outlined v-model="form.phone"  lazy-rules :rules="[ val => !!val || '請填寫連絡電話']" /></div>

  <div class="row items-center formInput">    <div  class="formTitle">
    <p><span>*</span>聯絡信箱   </p></div>
  <q-input outlined v-model="form.email" lazy-rules :rules="[ val => !!val || '請填寫聯絡信箱']" /></div>

  <div class=" formInput3">    <div  class="formTitle">
    <p><span>*</span>問題內容   </p></div>
  <q-input outlined v-model="form.content" type="textarea"  lazy-rules :rules="[ val => !!val || '請填寫問題內容']" /></div>

    <div class="formInput4">
      <div class="formTitle">
        <p><span>*</span>輸入驗證碼</p></div>
      <q-input outlined v-model="form.captcha" label="驗證碼" lazy-rules :rules="[ val => val === captcha || '驗證碼不正確']" />
        <div class="bg-black text-white formCaptcha" @click="refreshCaptcha" :key="captcha">{{ captcha }}</div>
    </div>
    <div class=" messageBtn">
      <q-btn label="清除" @click="reset" type="reset" color="black"/>
      <q-btn label="送出" type="submit" color="red"/>
    </div>
  </q-form>
</q-card>
  </q-page>

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
  captcha: '',
  gender: '1'
})
function reset () {
  form.value = {
    subject: '',
    name: '',
    phone: '',
    email: '',
    content: '',
    captcha: '',
    gender: '1'
  }
}

const captcha = ref(generateCaptcha())

function generateCaptcha () {
  return Math.random().toString(36).substring(2, 8)
}
const refreshCaptcha = () => {
  captcha.value = generateCaptcha()
}

const onSubmit = async () => {
  const isValid = Object.values(form.value).every(value => value)
  if (!isValid || form.value.captcha !== captcha.value) {
    console.error('Form is not valid')
  } else {
    try {
      await sendDataToAppsScript(form.value)
      // 清空表單
      reset()

      // 刷新驗證碼
      refreshCaptcha()

      alert('郵件已成功寄出')
    } catch (error) {
      alert('郵件發送失敗')
    }
  }
}
const sendDataToAppsScript = async (formData) => {
  const scriptUrl = 'https://www.dtstw.com:3000/data' // 替换为您的 Google Apps Script 项目的脚本 URL
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
.contactusCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2%;
  background: linear-gradient(to right, rgb(248, 244, 244), #bdbdbd);
  width: 80vw;
  margin: 5vw 10vw;
}
.messageCard{
  width: 80vw;
  margin: 5vw 10vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // text-align: center;
  border: 0.5px solid #bdbdbd;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2);
  }

  // 飄起來~~
  transform: translateY(0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
  h3{
    color: #e60012;
  }
  p{
    font-size: 11px;
  }
// 表單
  .messageForm {
    width: 80vw;
  margin: 5vw 10vw;
    span{
      color: #e60012;
    }
    // font-size: 0.8rem;
    .formInput{
      display: flex;
    flex-direction: row;
flex-wrap: wrap;
    .q-field{
      width: 70%;
      margin: 1px;
    }
    .formTitle{
      width:20%;
      display: flex;
      flex: row;
      justify-content: center;
    }
  }
  .formInput3{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .q-field{
      width: 70%;
      margin: 2px;
    }
    .formTitle{
      width:20%;
      display: flex;
      flex: row;
      justify-content: center;
    }

  }
  .formInput2{
    display: flex;
    flex-direction: row;
    // justify-content: start;
    align-items: center;

    .gender{
      display: flex;
      flex-direction: column;
      // flex-wrap: wrap;
      font-size: 5px;
    }
    .q-field{
      width: 55%;
      margin: 2px;
    }
    .formTitle{
      width:23%;
      display: flex;
      flex: row;
      justify-content: center;
      @media(min-width: 768px){
        width: 20%;
      }
    }

  }
  .formInput4{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  width: 100%;
  margin: 20px;
    .q-field{
      width: 60%;
      margin: 2px;
    }
    .formTitle{
      width:100%;
      display: flex;
      flex: row;
      flex-wrap: wrap;
      justify-content: start;
      @media (min-width: 768px){
        width:10%;
      justify-content: center;
      align-items: center;
      }
    }
    .formCaptcha{
      width: 20%;
      height: 60px;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 0.5rem;
      font-weight: bold;

    }
  }
  .messageBtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2%;

    .q-btn{
      margin: 2%;
      width: 200px;
      span{
        color: #fff;
      }
    }
  }

  @media(min-width: 992px){
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
font-size: 1.5rem;
.formInput{
  width: 48%;
    .q-field{
      width: 70%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      justify-content: center;
    }
    .formCaptcha{
      width: 20%;
      height: 100%;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
  }

.formInput2{
    display: flex;
    flex-direction: row;
    width: 48%;
    // align-items: center;
    justify-content: start;

    p{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .gender{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: start
    }
    .q-field{
      width: 58%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      justify-content: center;
    }
  }
  .formInput3{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    margin: 2%;
    .q-field{
      width: 82%;
      // margin: 2px;
    }
    .formTitle{
      width:10%;
      display: flex;
      flex: row;
      justify-content: center;
      margin: 0;
    padding: 0;
    }

  }
  .formInput4{
    display: flex;
    flex-direction: row;
    justify-content: start;
  width: 100%;
  margin: 20px;
    .q-field{
      width: 20%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      // justify-content: center;
    }
    .formCaptcha{
      width: 10%;
      // height: 100%;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;

    }
  }
  .messageBtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2%;

    .q-btn{
      margin: 2%;
      width: 300px;
      height: 50px;
      span{
        color: #fff;
      }
    }
  }
    }

    @media(min-width: 1400px){
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
font-size: 1.5rem;
.formInput{
  width: 48%;
    .q-field{
      width: 70%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      justify-content: center;
    }
    .formCaptcha{
      width: 20%;
      height: 100%;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
  }

.formInput2{
    display: flex;
    flex-direction: row;
    width: 48%;
    // align-items: center;
    justify-content: start;

    p{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .gender{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: start
    }
    .q-field{
      width: 58%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      justify-content: center;
    }
  }
  .formInput3{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    margin: 2%;
    .q-field{
      width: 82%;
      // margin: 2px;
    }
    .formTitle{
      width:10%;
      display: flex;
      flex: row;
      justify-content: center;
      margin: 0;
    padding: 0;
    }

  }
  .formInput4{
    display: flex;
    flex-direction: row;
  width: 100%;
  margin: 20px;
    .q-field{
      width: 20%;
      margin: 2px;
    }
    .formTitle{
      width:15%;
      display: flex;
      flex: row;
      // justify-content: center;
    }
    .formCaptcha{
      width: 10%;
      // height: 100%;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;

    }
  }
  .messageBtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2%;

    .q-btn{
      margin: 2%;
      width: 500px;
      height: 50px;
      span{
        color: #fff;
      }
    }
  }
    }

  }
}

</style>
