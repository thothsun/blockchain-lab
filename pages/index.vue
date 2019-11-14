<template>

  <el-container>
    <myheader></myheader>

    <el-main>
      <div class="main">

      </div>

      <nuxt-link to="/about">关于</nuxt-link>


      <div class="container">

      </div>
    </el-main>


  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'

  export default {
    components: {
      myheader
    }
  }
</script>

<style>
  html, body {
    /*background: #fff;*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*font-size: 16px;*/
    /*font-family: Roboto, PingFang SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;*/
    /*line-height: 20px;*/
  }



  .main {

  }


</style>
