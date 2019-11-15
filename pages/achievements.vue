<template>
  <el-container direction="vertical">
    <myheader index="achievements"></myheader>
    <el-main>
      <h1>学术成果</h1>
    </el-main>
  </el-container>
</template>
<script>
  import myheader from '~/components/header.vue'

  export default {
    name: "achievements",
    components: {
      myheader
    }
  }
</script>

<style scoped>

</style>


