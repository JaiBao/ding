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
        <h3>集團總部 | 中秋有愛，攜手支持蒙恩聽障烘焙坊</h3>
      </div>
      <div class="newsContentContent row justify-start">
        <h5>
          取之社會，回饋社會是集團努力的目標。在2023年中秋前夕，鼎泰勝集團與蒙恩聽障烘焙坊相遇，令人驚奇的是，鼎泰勝的企業特色色彩恰好出現在蒙恩烘焙坊的禮盒上。這樣的偶然巧合彷彿象徵著一種連結與共鳴，進而共同支持並推進社會責任使命。
        </h5>

        <h5>
          今年中秋，鼎泰勝總裁邀請夥伴們一起透過行動來支持「蒙恩聽障烘焙坊」，因為在蒙恩裡，我們發現這群無聲鬥士們有著努力奮鬥不懈的精神，值得我們效仿與學習。而傳遞到手中的這份禮盒，是鬥士的努力、希望和夢想的結晶。
        </h5>
        <h5 style="font-weight: 800">Dare To Shine 勇於發光</h5>
        <h5>生命中，每一刻都能發光發熱，讓我們不僅為自己閃耀，也為他人點亮希望之光，讓我們一起做那位勇於發光的自己，也成為照亮別人的那道光！</h5>
      </div>
      <div class="newsContentFooter">
        <p>鼎泰勝集團敬祝大家 中秋節快樂</p>
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
