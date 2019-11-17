<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12"
                style="display: flex;justify-content: center;flex-wrap: wrap;">

          <h1>实验室负责人</h1>

          <member
            name="刘园"
            avatar="avatar/liuyuan.jpg"
            position="副教授"
            email="liuyuan@swc.neu.edu.cn"
            description="1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。 2014年11月毕业于新加坡南洋理工大学计算机工程学院，获得博士学位，导师是 Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。"
          ></member>

          <h1>2016级硕士研究生</h1>

          <member
            name="白金"
            avatar=""
            position="2016级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="赵征"
            avatar=""
            position="2016级硕士研究生"
            email=""
            description=""
          ></member>


          <h1>2017级硕士研究生</h1>

          <member
            name="杨天知"
            avatar=""
            position="2017级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="庄虔伟"
            avatar=""
            position="2017级硕士研究生"
            email=""
            description=""
          ></member>


          <h1>2018级硕士研究生</h1>


          <member
            name="吕科"
            avatar=""
            position="2018级硕士研究生"
            email=""
            description=""
          ></member>


          <member
            name="孙帅"
            avatar=""
            position="2018级硕士研究生"
            email="sunshuai.edu@gmail.com"
            description=""
          ></member>


          <member
            name="张双峰"
            avatar=""
            position="2018级硕士研究生"
            email=""
            description=""
          ></member>


          <h1>2019级硕士研究生</h1>

          <member
            name="艾铮鹏"
            avatar=""
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="田萌萌"
            avatar=""
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="闫玉"
            avatar=""
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="张闯"
            avatar=""
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <h1>本科生</h1>


          <member
            name="Name"
            avatar=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <h1>留学生</h1>

          <member
            name="Name"
            avatar=""
            position="2016级留学生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            position="2017级留学生"
            email=""
            description=""
          ></member>


        </el-col>
      </el-row>
    </el-main>
    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/myheader.vue'
  import myfooter from '~/components/myfooter.vue'
  import Member from "../components/member.vue";

  export default {
    name: "members",
    components: {
      Member,
      myheader,
      myfooter
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
