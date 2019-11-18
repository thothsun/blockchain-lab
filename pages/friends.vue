<template>
  <el-container direction="vertical">
    <myheader index="/friends"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>常用链接</h1>
          <div style="padding: 10px">
            <ul>
              <li> <el-link href="http://faculty.neu.edu.cn/swc/guogb/docs/ccf-2019.pdf" target="_blank">中国计算机学会推荐国际学术会议和期刊目录 - 2019</el-link></li>
              <li> <el-link href="http://www.letpub.com.cn/index.php?page=journalapp" target="_blank">中科院分区查询</el-link></li>
              <li> <el-link href="http://www.letpub.com.cn/index.php?page=grant" target="_blank">国家自然基金项目查询</el-link></li>
              <li> <el-link href="http://faculty.neu.edu.cn/sites.htm" target="_blank">东北大学教师列表</el-link></li>
              <li> <el-link href="http://faculty.neu.edu.cn/swc/guogb/docs/cal2018-2019.jpg" target="_blank">东北大学2018 - 2019学年校历查询</el-link></li>
            </ul>
          </div>
          <h1>合作交流</h1>
          <div style="padding: 10px">
            <ul>
              <li> <el-link href="https://www.ntu.edu.sg/home/zhangj/" target="_blank">Jie Zhang</el-link></li>
              <li> <el-link href="https://www.ntu.edu.sg/home/boan/" target="_blank">Bo An</el-link></li>
              <li> <el-link href="http://l1apc2.ens.utulsa.edu/~sandip/" target="_blank">Sandip Sen</el-link></li>
              <li> <el-link href="http://www.ntulily.org/ascymiao/" target="_blank">Miao Chun Yan</el-link></li>
            </ul>
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
    name: "friends",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  li{
    font-size: 1.3rem;
    line-height: 1.7;
  }

  a{
    text-decoration: none;
  }
</style>
