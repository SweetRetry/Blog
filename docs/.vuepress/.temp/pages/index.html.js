import comp from "E:/Code/retry-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Sweet Retry\",\"tagline\":\"By Retry\",\"actions\":[{\"text\":\"InterView\",\"link\":\"/interview/\"},{\"text\":\"Plugins\",\"link\":\"/plugins/Vue3_Plugins\"},{\"text\":\"Nginx\",\"link\":\"/nginx/\"}],\"features\":[{\"title\":\"Vue\",\"details\":\"Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。\"},{\"title\":\"React\",\"details\":\"React 是一个用于构建用户界面的JAVASCRIPT库。React 主要用于构建UI，很多人认为React 是MVC 中的V（视图）。\"},{\"title\":\"Nginx\",\"details\":\"Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Retry\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
