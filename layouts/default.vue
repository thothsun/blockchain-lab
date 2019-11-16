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
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }


  body {
    overflow-y: scroll;
    min-height: 100vh;
    font-size: 1.4rem;
  }

  .main-content {
    min-height: calc(100vh - 160px) /* 160px = header 100px + footer 60px */
  }

  h1 {
    color: #303133;
    margin: 20px 0 10px 0;
    font-size: 2rem;
  }

  h4{
    font-size: 1.6rem;
    color: #606266;
  }


  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

</style>
