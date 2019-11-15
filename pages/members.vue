<template>
  <el-container direction="vertical">
    <myheader index="members"></myheader>
    <el-main>
      <h1>团队成员</h1>
    </el-main>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'

  export default {
    name: "members",
    components: {
      myheader
    }
  }
</script>

<style scoped>

</style>
