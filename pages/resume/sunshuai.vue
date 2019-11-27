<template>
  <el-container direction="vertical">

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="18" :sm="16" :md="14" :lg="10" :xl="10">

          <div style="border: #7F828B dashed 1px;border-radius:10px; padding: 30px">


            <div style="height: 150px;display: flex;justify-content: space-between;padding: 0 5px">
              <div style="height: 100%;display: inline">
                <div style="font-size: 2.8rem">姓名</div>
                <div>籍贯: 天津市静海区</div>
                <div>邮箱: sunshuai.edu@gmail.com</div>
                <div>github: https://github.com/Sun-Shuai</div>
              </div>

              <div style="height: 100%; display: inline-flex;align-items: center">
                <el-image style="height: 140px;width: 100px" src="/avatar/sunshuai-1.jpg"></el-image>
              </div>
            </div>

            <el-divider></el-divider>

            <div style="background-color: #6B69D6;height: 800px;padding: 0 5px">

            </div>


          </div>

        </el-col>
      </el-row>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>

<script>

  import myfooter from '~/components/myfooter.vue'

  export default {
    name: "sunshuai",
    components: {
      myfooter
    }
  }
</script>

<style scoped>

  .main-content {
    min-height: calc(100vh - 60px) /* 60px = footer 60px */
  }

</style>
