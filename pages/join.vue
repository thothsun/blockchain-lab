<template>
  <el-container direction="vertical">
    <myheader index="join"></myheader>
    <el-main>
      <h1 style="margin-top: 100px">加入我们</h1>
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'

  export default {
    name: "about",
    components: {
      myheader
    }
  }
</script>

<style scoped>

</style>
