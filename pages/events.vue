<template>
  <el-container direction="vertical">
    <myheader index="events"></myheader>
    <el-main class="main-content">
      <h1>新闻活动</h1>
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'

  export default {
    name: "events",
    components: {
      myheader
    }
  }
</script>

<style scoped>

</style>
