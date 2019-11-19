<template>
  <el-container direction="vertical">
    <myheader index="/join"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">

          <p>
            如果你认为自己很优秀，实验室会让你学会独立思考成就思辨的人生，如果你认为自己不够优秀，实验室会让你自信地走向优秀
          </p>

          <el-divider><i class="el-icon-user"></i></el-divider>

          <h1>招收对象</h1>

          <p>硕士研究生和高年级本科生.</p>

          <ul>
            <li>
              <h4>科研类</h4>
              <p> 采用1+1+1的模式：为每1位优秀的研究生配备1位校外导师（国外优秀的研究学者，或企业研究人员，或校内高校优秀学者）和1位高年级的本科生</p>
            </li>

            <li>
              <h4>竞赛项目类</h4>
              <p>科研培预，以赛促研：本组每年5月份和11月份面向大二大三本科生招募，经过遴选后，按照能力和兴趣进入科研型课题组，培育0.5-1年，开始申报项目或组队参加比赛.</p>
            </li>
          </ul>

          <el-divider><i class="el-icon-message"></i></el-divider>

          感兴趣的同学请发送简历至

          <el-link href="mailto:liuyuan@swc.neu.edu.cn" target="_blank">liuyuan@swc.neu.edu.cn</el-link>

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
    name: "about",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  h4 {
    margin: 20px 0 10px 0;
  }

  p {
    text-indent: 2em
  }


</style>
