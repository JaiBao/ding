import AOS from 'aos'
import 'aos/dist/aos.css'

export default async ({ app }) => {
  app.config.globalProperties.$aos = AOS

  await new Promise((resolve) => {
    AOS.init({
      // 在这里设置AOS的全局选项
    })
    resolve()
  })
}
