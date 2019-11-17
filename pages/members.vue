<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>团队成员</h1>




          <div style="background-color: #7f828b;height: 200px;width: 800px;display: flex;justify-content: center;align-items: center">
            <div style="display: inline-block;background-color: gold;height: 180px;width: 180px">
123
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;background-color: deepskyblue;height: 180px;width: 580px">
123

            </div>
          </div>


        </el-col>
      </el-row>
    </el-main>
    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/myheader.vue'
  import myfooter from '~/components/myfooter.vue'

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
