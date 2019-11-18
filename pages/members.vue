<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="4" class="hidden-sm-and-down" style="min-width: 240px">
          <div
            style="position: fixed;display: flex;justify-content: center;align-items:center;width: 200px;height: 500px;">

            <ul style="line-height: 4;font-size: 1.5rem;font-weight: bold;color: #909399">
              <li>实验室负责人</li>
              <li>2016级硕士研究生</li>
              <li>2017级硕士研究生</li>
              <li>2018级硕士研究生</li>
              <li>2019级硕士研究生</li>
              <li>本科生</li>
              <li>留学生</li>
            </ul>

          </div>
        </el-col>


        <el-col :xs="18" :sm="16" :md="14" :lg="12" :xl="10"
                style="display: flex;justify-content: center;flex-wrap: wrap;">

          <h1>实验室负责人</h1>

          <member
            name="刘园"
            avatar="avatar/liuyuan.jpg"
            letter="L"
            position="副教授"
            email="liuyuan@swc.neu.edu.cn"
            description="1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。 2014年11月毕业于新加坡南洋理工大学计算机工程学院，获得博士学位，导师是 Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。"
          ></member>

          <el-divider></el-divider>

          <h1>2016级硕士研究生</h1>

          <member
            name="白金"
            avatar=""
            letter="B"
            position="2016级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="赵征"
            avatar=""
            letter="Z"
            position="2016级硕士研究生"
            email=""
            description=""
          ></member>

          <el-divider></el-divider>

          <h1>2017级硕士研究生</h1>

          <member
            name="杨天知"
            avatar=""
            letter="Y"
            position="2017级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="庄虔伟"
            avatar=""
            letter="Z"
            position="2017级硕士研究生"
            email=""
            description=""
          ></member>


          <el-divider></el-divider>


          <h1>2018级硕士研究生</h1>


          <member
            name="吕科"
            avatar=""
            letter="L"
            position="2018级硕士研究生"
            email=""
            description=""
          ></member>


          <member
            name="孙帅"
            avatar="avatar/sunshuai.jpg"
            letter="S"
            position="2018级硕士研究生"
            email="sunshuai.edu@gmail.com"
            description=""
          ></member>


          <member
            name="张双峰"
            avatar=""
            letter="Z"
            position="2018级硕士研究生"
            email=""
            description=""
          ></member>


          <el-divider></el-divider>


          <h1>2019级硕士研究生</h1>

          <member
            name="艾峥鹏"
            avatar="avatar/aizhengpeng.jpg"
            letter="A"
            position="2019级硕士研究生"
            email="im@aizhengpeng.cn"
            description="1998年出生于江西修水，工学学士，软硕1901班长。2019年9月通过推荐免试的方式攻读东北大学软件学院软件工程专业。2019年6月本科毕业于东北大学软件学院信息安全专业，获得学士学位，导师是刘园副教授。个人主页：小艾的技术栈（https://aizhengpeng.cn）。"
          ></member>

          <member
            name="田萌萌"
            avatar=""
            letter="T"
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="闫玉"
            avatar=""
            letter="Y"
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <member
            name="张闯"
            avatar=""
            letter="Z"
            position="2019级硕士研究生"
            email=""
            description=""
          ></member>

          <el-divider></el-divider>

          <h1>本科生</h1>

          <member
            name="Name"
            avatar=""
            letter=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            letter=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            letter=""
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <el-divider></el-divider>

          <h1>留学生</h1>

          <member
            name="Name"
            avatar=""
            letter=""
            position="2016级留学生"
            email=""
            description=""
          ></member>

          <member
            name="Name"
            avatar=""
            letter=""
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

  h1 {
    width: 100%;
  }
</style>
