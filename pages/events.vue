<template>
  <el-container direction="vertical">
    <myheader index="/events"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">


          <div style="width: 80%;margin: 0 auto">
            <el-divider></el-divider>
            <el-image class="animated fadeInRight" src="/event/20190915benxiteambuilding.jpg"/>
            <el-divider></el-divider>
            <el-image class="animated fadeInRight" src="/event/20200103groupmeeting.jpg"/>
            <el-divider></el-divider>
            <el-image class="animated fadeInRight" src="/event/20200118.jpg"/>
            <el-divider></el-divider>
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
    name: "events",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  el-image{
    margin: 0 auto;
    width: 100%;
  }

</style>
