<template>
  <el-container>
    <myheader index="events"></myheader>
    <el-main>
      <h1 style="margin-top: 100px">新闻活动</h1>
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
