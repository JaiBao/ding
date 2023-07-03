<template>
  <q-page>
      <!-- 大圖視差 -->

      <div class=" full-width " >
<q-parallax
  src="~assets/recruit/5-pic-1.jpg"
>
<div class="absolute-left-center custom-caption3">

        <div class="text-black text-h2 alight-center" >加入鼎泰勝<span>Join us</span></div>
      <div class="text-grey text-h2 alight-center" >成就你的職涯舞台</div>
    </div>
  </q-parallax>
</div>
    <!-- 卡片第一層 -->

    <q-card data-aos="fade-up" data-aos-duration="2000" class="jobCard01  row">
      <img src="~assets/recruit/5-pic-2l.jpg" class="col-12 col-md-7">

      <q-card-section class=" col-12 col-md-5 jobText bg-white text-grey"><p>
        鼎泰勝各事業體需要不同人才<br>
展現最好的自己 才能成就不凡的自己<br>
與我們同行 發揮你的才能 揮灑你的汗水<br>
努力、認真，一起打拚我們的新未來！</p>
      </q-card-section>
    </q-card>
<!-- 職務類別 -->
<div class="jobContainer row">
<div class="jobRectangle ">
    <div class="text">熱門職務類別</div>
  </div>

  <q-card class=" col-md-10 col-sm-12 jobGroup">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|集團總部|
          <h4>高階主管</h4>Senior executive
          <q-btn rounded @click="openLink">目前職缺 <i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-3.jpg" alt="飲用水事業" >
        </div>
      </q-card>
<div class="col col-md-12 col-sm-12  row jobGroup">
    <q-card class="    col-md-6 col-sm-12">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|餐飲事業|
          <h4>門市儲備幹部/廚助/兼職人員</h4>Store staff
          <q-btn rounded @click="openLink">目前職缺 <i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-4.jpg" alt="裝修工程事業" >
        </div>
      </q-card>
    <q-card class="    col-md-6 col-sm-12">
        <div class="jobGroupContent">
            <div class="jobGroupTitle absolute-center text-subtitle2 text-center q-pa-none ">|飲用水事業|
          <h4>生產線作業員</h4>Production operator
          <q-btn rounded  @click="openLink">目前職缺 <i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>
            </div>
            <img src="~assets/recruit/5-pic-5.jpg" alt="影視創意事業" >
        </div>
      </q-card>
      </div>
</div>

<!-- 員工福利 -->
<div class="jobContainer2 row">
  <div class="container2Left col-md-7 q-pa-xs">
    <div class="jobRectangle  ">
      <div class="text">員工福利</div>
    </div>
    <div class="jobIconArea row">
      <div class="iconLeft col-md-6">
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-6.png" alt="勞保健保" >勞保健保</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-7.png" alt="勞退提撥金" >勞退提撥金</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-8.png" alt="就業保險" >就業保險</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-9.png" alt="職災保險" >職災保險</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-10.png" alt="員工團體保險" >員工團體保險</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-11.png" alt="三節獎金禮品" >三節獎金禮品</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-12.png" alt="特殊節日獎金禮品" >特殊節日獎金禮品</div>
</div>
<div class="iconRight col-md-6">
<div class="jobIcon">
<img src="~assets/recruit/5-pic-13.png" alt="勞保健保" >咖啡吧</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-14.png" alt="旅遊補助" >旅遊補助</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-15.png" alt="免費下午茶" >免費下午茶</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-16.png" alt="伙食津貼" >伙食津貼</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-17.png" alt="員購優惠" >員購優惠</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-18.png" alt="員工制服" >員工制服</div>
<div class="jobIcon">
<img src="~assets/recruit/5-pic-19.png" alt="員工餐" >員工餐</div>
</div>
</div>
</div>
<div class="container2Right col-md-5 q-pa-xs">
<div class="jobRectangle ">
    <div class="text">學習成長</div>
  </div>
  <div class="jobIconArea">
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-20.png" alt="員工教育訓練" >員工教育訓練</div>
  <div class="jobIcon">
<img src="~assets/recruit/5-pic-21.png" alt="培訓課程" >培訓課程</div>
  </div>
</div>
  <q-btn @click="openLink2" class="jobIconBtn">職缺應徵<i class="fa-solid fa-circle-arrow-right fa-bounce" style="color: white;"></i></q-btn>

</div>
  </q-page>
</template>
<script setup>
const openLink = () => {
  window.open('https://www.104.com.tw/company/1a2x6bkiyq', '_blank')
}
const openLink2 = () => {
  window.open('https://www.104.com.tw/company/1a2x6bkiyq?jobsource=company_job#info06', '_blank')
}
</script>
<style lang="scss" scoped>
.jobContainer {
  position: relative;
  display: inline-block;
  width: 80vw;
  margin: 2vw 10vw;
}

.jobRectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  .text {
  color: white;
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
}
}

.jobRectangle::after {
  content: "";
  background-color: red;
  width: 40px;
  height: 100%;
}

.jobContainer2{
  // position: relative;
  // display: inline-block;
  width: 80vw;
  margin: 2vw 10vw;
  display: flex;
  flex-direction: row;
  .jobIconArea{
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content: space-around;
    @media(max-width: 768px){
      flex-direction: row;
    }
  }
  .jobIcon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 10px 5px;
    padding: 5px 10px;
    font-size: 20px;
    img{
      width: 40px;
      height: 40px;
    }
    @media(max-width: 768px){
      font-size: 14px;
       img{
      width: 30px;
      height: 30px;
    }
    }
  }
  .jobIconBtn{
    width: 100%;
    background: #e60012;
    color: white;
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
}
.jobRectangleLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 40px;
  width: 60%;
  // margin-bottom: 10px;
  margin:5px  5px 10px 5px;
  .text {
  color: white;
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
}
}

.jobRectangleLeft::after {
  content: "";
  background-color: red;
  width: 40px;
  height: 100%;
}
.jobRectangleRight {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 40px;
  width: 38%;
  margin:5px  5px 10px 5px;
  .text {
  color: white;
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
}
}

.jobRectangleRight::after {
  content: "";
  background-color: red;
  width: 40px;
  height: 100%;
}

.jobCard01{
  width: 80vw;
  margin: 5vw 10vw;
  .jobText{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
   }

  display: flex;
  flex-direction: column;
  @media (min-width:768px){
    display: flex;
   flex-direction: row;
   width: 80vw;

   .jobText{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 28px;

  }
  }
  @media (min-width:992px){
    display: flex;
   flex-direction: row;
   width: 80vw;

   .jobText{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  font-size: 25px;
}
  }

}

.jobGroup {
  position: relative;
  overflow: hidden;
  margin: 5px;
  width: 100%;
  // height: 50%;
  @media(min-width:768px){
   padding: 0 5px;
  }
  @media(min-width:992px){
margin: 0;
padding: 7px 10px;
  }

}

.jobGroupContent {
  position: relative;
  img{
  transition: transform .2s; /* 滑鼠觸碰圖片放大效果 */
  width: 100%;
  @media(max-width:996px){
    height: 400px;
  }
  @media(max-width:768px){
    height: 300px;

  }
}
}

.jobGroupContent:hover {
  transform: scale(1.1); /* 滑鼠觸碰圖片放大效果 */
  transition: 0.25s;
}

.jobGroupTitle {
  // position: absolute;
  // top: 50px;
  // left: 20px;
  color: black;
  padding: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  button{
    background: #e60012;
    color: white;
    width: 50%;
    @media (min-width:768px){
      width: 30%;
    }
    @media (min-width:992px){
      width: 30%;
    }
    @media (min-width:1500px){
      width: 20%;
    }

  }

  h4{
        margin: 1px;
       font-weight: 800;
       font-size: 30px;
       width: 100%;

      }
      @media(min-width:768px){
        font-size: 15px;
        padding: 0;
        h4{
              margin:0 10px;
             font-weight: 800;
             width: 400px;
             font-size: 30px;

            }
      }
}

</style>
