// plugins/plyr.client.js
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('plyr', {
    mounted(el, binding) {
      const options = binding.value || {}
      const player = new Plyr(el, options)
      el.player = player // 將 player 實例存儲在 DOM 元素上，以便可以重新訪問
    },
    unmounted(el) {
      el.player?.destroy()
    }
  })
})
