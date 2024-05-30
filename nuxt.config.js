// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtagId: 'G-21QYJDYDRE',
      gtmId: 'GTM-KJ4MKZSG' //  GTM ID
    }
  },
  head: {
    title: '鼎泰勝集團',
    meta: [
      {
        name: 'description',
        content:
          '鼎泰勝集團深耕經營連鎖產業，業務橫跨食品原物料、餐飲品牌、瓶裝水生產、影視製作、室內裝修以及水酒代理行銷，同時跨足生技產業等領域，致力成為台灣連鎖品牌的首選。'
      },

      { name: 'google-site-verification', content: '5j6K_dFtD3LNzCJ42rR_OSpfv1rmneTcTEXsdRASwU0' }
    ]
  },
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', 'nuxt-simple-sitemap', '@nuxt/image'],
  css: ['~/assets/global.scss'],

  quasar: {
    plugins: ['Notify']
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/business', '/chronicle', '/message', '/news', '/privacy', '/recruit', '/partner', '/social', '/vision', 'sitemap.xml'],
      ignore: ['']
    }
  },

  site: {
    url: 'https://www.dtstw.com'
  }
})
