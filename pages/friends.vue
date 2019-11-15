<template>
  <el-container direction="vertical">
    <myheader index="friends"></myheader>
    <el-main class="main-content">
      <h1>开发中.</h1>
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'

  export default {
    name: "friends",
    components: {
      myheader
    }
  }
</script>

<style scoped>

</style>
