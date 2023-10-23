<template>
  <q-page>
    <!-- 大圖視差 -->

    <div class="full-width pageParallax">
      <q-parallax src="/news/2-pic-1.jpg">
        <div class="absolute-left-center custom-caption2">
          <div class="text-black text-h2 alight-center">最新消息</div>
          <div class="text-grey text-h5 alight-center">News</div>
        </div>
      </q-parallax>
    </div>
    <!-- table區 -->
    <q-card class="column newsContentCard">
      <div class="newsContentTitle row justify-center text-red">
        <h3>餐飲事業 | 中華一餅服務據點搬遷，新門市占地大，服務產能增！</h3>
      </div>
      <div class="newsContentContent row justify-center">
        <h5>鼎泰勝集團旗下香臨食品所經營之「中華一餅」，六月門市正式搬遷。新門市坐落於成功國宅附近，占地坪數大，加上作業動線流暢，預計將提高兩成的生產量能。</h5>

        <h5>
          以台灣傳統潤餅發展出創意口味潤餅的中華一餅，自成立以來深受許多消費者喜愛，從門市零售到現在以企業團體訂餐的服務模式，獨到的口味加上盒餐的貼心設計，讓拿到餐盒的消費者們都讚譽有加，現在儼然已成為是外送盒餐的第一首選品牌。
        </h5>

        <h5>
          即日起中華一餅門市正式搬遷至台北市大安區和平東路二段311巷43弄26號，成功國宅旁，搬遷至新門市後的中華一餅生產動線更加寬廣，服務量能大大提升，未來將能夠服務更多喜愛中華一餅的好朋友們！歡迎喜歡中華一餅的您，立即來電預訂，預訂專線
          (02) 2301-5331
        </h5>
      </div>
      <div class="newsContentFooter">
        <p>
          中華一餅 和平店
          <br />
          預訂專線 (02) 2301-5331
          <br />
          台北市大安區和平東路二段311巷43弄26號
          <br />
        </p>
      </div>
    </q-card>
  </q-page>
</template>
<style lang="scss" scoped>
.newsContentCard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  p {
    font-size: 20px;
  }
}
</style>
