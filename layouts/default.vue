<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
  html {
    font-size: 62.5%;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    /*todo 修改字体，美化*/
    font-family: 'Source Sans Pro', PingFang SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  }


  body {
    overflow-y: scroll;
    min-height: 100vh;
    font-size: 1.6rem;
  }

  .main-content {
    min-height: calc(100vh - 160px) /* 160px = header 100px + footer 60px */
  }

  h1 {
    color: #1B2B4F;
    margin: 20px 0 10px 0;
  }

  hr {
    border: none;
    height: 1px;
    background-color: lightgray;
    margin: 30px 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

</style>
