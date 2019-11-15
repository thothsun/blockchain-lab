<template>
  <el-container direction="vertical">
    <myheader index="members"></myheader>
    <el-main class="main-content">
      <h1>团队成员</h1>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'
  import myfooter from '~/components/footer.vue'

  export default {
    name: "members",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

</style>
