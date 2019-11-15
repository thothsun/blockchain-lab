<template>
  <el-container direction="vertical">
    <myheader index="/friends"></myheader>
    <el-main class="main-content">
      <h1>开发中.</h1>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'
  import myfooter from '~/components/footer.vue'

  export default {
    name: "friends",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

</style>
