<template>
  <div>
    <loading/>
    <nuxt/>
    <a href="https://github.com/thothsun/blockchain-lab" target="_blank">
      <el-image style="position: fixed; top: 0; right: 0; border: 0;z-index: 9999;height: 100px;width: 100px"
                src="/github.png"
                alt="Fork me on GitHub"></el-image>
    </a>
    <el-backtop :visibility-height="10" :right="100" :bottom="50">Top</el-backtop>
  </div>
</template>

<script>
  import Loading from '~/components/loading.vue'

  export default {
    components: {
      Loading
    }
  }
</script>
<style>
  html {
    font-size: 62.5%;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }


  body {
    overflow-y: scroll;
    min-height: 100vh;
    font-size: 1.4rem;
    background-color: white;
  }

  .main-content {
    min-height: calc(100vh - 130px) /* 160px = header 70px + footer 60px */
  }

  h1 {
    color: #303133;
    margin: 20px 0 10px 0;
    font-size: 2rem;
  }

  h4 {
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
