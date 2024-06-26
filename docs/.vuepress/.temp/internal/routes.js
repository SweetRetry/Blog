export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/git/", { loader: () => import(/* webpackChunkName: "git_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/git/index.html.js"), meta: {"title":"Git"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "interview_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试题"} }],
  ["/nginx/", { loader: () => import(/* webpackChunkName: "nginx_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/nginx/index.html.js"), meta: {"title":"Nginx 配置文件详解"} }],
  ["/other/", { loader: () => import(/* webpackChunkName: "other_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/other/index.html.js"), meta: {"title":"Other"} }],
  ["/node.Js/", { loader: () => import(/* webpackChunkName: "node.Js_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/node.Js/index.html.js"), meta: {"title":"Node.Js"} }],
  ["/plugins/Eslint.html", { loader: () => import(/* webpackChunkName: "plugins_Eslint.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/plugins/Eslint.html.js"), meta: {"title":"Eslint"} }],
  ["/plugins/React_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_React_Plugins.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/plugins/React_Plugins.html.js"), meta: {"title":"React Plugins"} }],
  ["/plugins/Vite_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_Vite_Plugins.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/plugins/Vite_Plugins.html.js"), meta: {"title":"Vite Plugins"} }],
  ["/plugins/Vue3_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_Vue3_Plugins.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/plugins/Vue3_Plugins.html.js"), meta: {"title":"Vue Plugins"} }],
  ["/typeScript/", { loader: () => import(/* webpackChunkName: "typeScript_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/typeScript/index.html.js"), meta: {"title":"TypeScript"} }],
  ["/vite/", { loader: () => import(/* webpackChunkName: "vite_index.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/vite/index.html.js"), meta: {"title":"Vite"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Code/retry-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
