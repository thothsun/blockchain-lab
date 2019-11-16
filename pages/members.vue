<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>团队成员</h1>


        </el-col>
      </el-row>
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
