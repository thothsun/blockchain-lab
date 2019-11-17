<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12" style="display: flex;justify-content: center;flex-wrap: wrap">


          <div
            style="margin-top:50px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  园
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">刘园</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>副教授</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。 2014年11月毕业于新加坡南洋理工大学 计算机工程学院，获得博士学位，导师是
                  Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。</p>
              </div>
            </div>
          </div>


          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  S
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">孙帅</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  1995年出生于天津，............</p>
              </div>
            </div>
          </div>


          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
            </div>
          </div>

          <div
            style="margin-top:10px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
            <div style="height: 150px;width: 150px;">
              <div style="height: 100%;width: 100%">
                <el-avatar
                  style="width: 100%;height: 100%;font-size: 8rem;display: flex;justify-content: center;align-items: center">
                  A
                </el-avatar>
              </div>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div style="display: inline-block;height: 180px;width: 580px">

              <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
                <b style="font-size: 2rem">姓名</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>硕士研究生</b>
              </div>


              <div style="height: 60%;margin: 10px 0;overflow: auto">
                <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
                  简介
                </p>
              </div>
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
