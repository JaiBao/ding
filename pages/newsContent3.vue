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
        <h3>集團總部 | 鼎泰勝集團總部喬遷，進駐群光大樓</h3>
      </div>
      <div class="newsContentContent row justify-center">
        <h5>
          鼎泰勝集團旗總部團隊擴編，同時因應未來市場的擴充需求，於本2022年10月7日正式進駐群光大樓。總部辦公室全面整合各事業體的後勤團隊，將集團部門團隊整合，讓夥伴們更能團結一致，創造總部團隊價值！
        </h5>

        <h5>
          鼎泰勝集團為台灣全方位整合連鎖體系的服務總部，集團跨足多方位與各領域，完整的後續支援團隊是鼎泰勝的總部價值，為提升更好的後勤服務與環境。鼎泰勝於10月正式搬遷進駐群光大樓。未來將預期發展更多事業體，同時招聘一流人才，來達成總部最高服務價值！
        </h5>
      </div>
      <div class="newsContentFooter">
        <p>
          (02) 2278-2325
          <br />
          新北市三重區光復路二段69號18樓
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
