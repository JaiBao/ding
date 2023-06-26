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
          title: '首頁',
          login: false,
          admin: false
        }
      },
      {
        path: '/overView',
        component: () => import('src/pages/OverViewPage.vue'),
        meta: {
          title: '概述',
          login: false,
          admin: false
        }
      },
      {
        path: '/chronicle',
        component: () => import('src/pages/chroniclePage.vue'),
        meta: {
          title: '紀事',
          login: false,
          admin: false
        }
      },
      {
        path: '/vision',
        component: () => import('src/pages/visionPage.vue'),
        meta: {
          title: '願景',
          login: false,
          admin: false
        }
      },
      {
        path: '/news',
        component: () => import('src/pages/newsPage.vue'),
        meta: {
          title: '最新消息',
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
