import MainLayout from 'layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: () => import('src/pages/IndexPage.vue'),
        meta: {
          title: '鼎泰勝集團',
          login: false,
          admin: false
        }
      },
      // {
      //   path: '/overView',
      //   component: () => import('src/pages/OverViewPage.vue'),
      //   meta: {
      //     title: '鼎泰勝集團概述',
      //     login: false,
      //     admin: false
      //   }
      // },
      {
        path: '/chronicle',
        component: () => import('src/pages/chroniclePage.vue'),
        meta: {
          title: '鼎泰勝集團紀事',
          login: false,
          admin: false
        }
      },
      {
        path: '/vision',
        component: () => import('src/pages/visionPage.vue'),
        meta: {
          title: '鼎泰勝集團願景',
          login: false,
          admin: false
        }
      },
      {
        path: '/newsContent1',
        component: () => import('src/pages/newsContent.vue'),
        meta: {
          title: '最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: '/newsContent2',
        component: () => import('src/pages/newsContent2.vue'),
        meta: {
          title: '最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: '/newsContent3',
        component: () => import('src/pages/newsContent3.vue'),
        meta: {
          title: '最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: '/privacy',
        component: () => import('src/pages/privacyPage.vue'),
        meta: {
          title: '鼎泰勝集團隱私權政策',
          login: false,
          admin: false
        }
      },
      {
        path: '/news',
        component: () => import('src/pages/newsPage.vue'),
        meta: {
          title: '鼎泰勝集團最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: '/social',
        component: () => import('src/pages/socialPage.vue'),
        meta: {
          title: '鼎泰勝集團企業社會責任',
          login: false,
          admin: false
        }
      },
      {
        path: '/recruit',
        component: () => import('src/pages/recruitPage.vue'),
        meta: {
          title: '鼎泰勝集團人才招募',
          login: false,
          admin: false
        }
      },
      {
        path: '/message',
        component: () => import('src/pages/sendMessage.vue'),
        meta: {
          title: '鼎泰勝集團聯絡我們',
          login: false,
          admin: false
        }
      },
      {
        path: '/business',
        component: () => import('src/pages/businessPage.vue'),
        meta: {
          title: '鼎泰勝集團集團事業體',
          login: false,
          admin: false
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
