export default ({app: {router}, store}) => {
  /* 路由变更时进行pv统计 */
  router.afterEach((to, from) => {
    /* 增加一个PV */
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}
