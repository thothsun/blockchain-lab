<template>
  <el-container direction="vertical">

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="22" :sm="20" :md="18" :lg="10" :xl="10">

          <div style="border: #DCDFE6 solid 1px;border-radius:10px; padding: 30px;overflow: hidden;margin-top: 50px">


            <div style="height: 120px;display: flex;justify-content: space-between;">
              <div
                style="height: 100%; width: 100%; display: inline-flex;flex-direction: column;justify-content: space-between">
                <div style="height: 30%;font-size: 2.8rem;font-weight: bold;display: flex;align-items: center">孙帅</div>


                <div style="width: 100%;height: 50%;white-space: nowrap;overflow: hidden">

                  <div style="height: 50%">
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      <p style="display: inline">邮箱:&nbsp;</p>
                      <el-link :href="'mailto:sunshuai.edu@gmail.com'"
                               target="_blank">sunshuai.edu@gmail.com
                      </el-link>
                    </div>
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      <p style="display: inline">GitHub:&nbsp;</p>
                      <el-link :href="'https://github.com/Sun-Shuai'" target="_blank">https://github.com/Sun-Shuai
                      </el-link>
                    </div>
                  </div>

                  <div style="height: 50%;">
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      籍贯: 天津市静海区
                    </div>
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      QQ: 438819781
                    </div>
                  </div>


                </div>


              </div>

              <div
                style="height: 100%; display: inline-flex;align-items: center;border: #E4E7ED dashed 1px">
                <el-image style="height: 140px;width: 100px" src="/avatar/sunshuai-1.jpg"></el-image>
              </div>
            </div>

            <el-divider><i class="el-icon-connection"></i></el-divider>

            <div>

              <p class="sub-title">教 育</p>

              <div class="inline-wrapper">
                <p>2014.9-2018.7</p>
                <p style="width: 150px">东北大学秦皇岛分校</p>
                <p style="width: 260px">计算机与通信工程学院（电子信息工程）</p>
                <p>本科（全日制）</p>
              </div>

              <div class="inline-wrapper">
                <p>2018.8-2021.7</p>
                <p style="width: 150px">东北大学</p>
                <p style="width: 260px">软件学院（软件工程）</p>
                <p>硕士（全日制）</p>
              </div>


            </div>

            <el-divider><i class="el-icon-school"></i></el-divider>

            <div>
              <p class="sub-title">实 习</p>

              <div class="inline-wrapper">
                <p>2018.1-2018.6</p>
                <p>中国科学院自动化研究所（北京）</p>
                <p>Android客户端研发工程师</p>
              </div>
            </div>

            <el-divider><i class="el-icon-office-building"></i></el-divider>

            <div>
              <p class="sub-title">创 业</p>

              <div class="inline-wrapper">
                <p>2016.1-2017.6</p>
                <p>河北驰凯科技有限公司</p>
                <p>联合创始人，负责软件开发</p>
              </div>
            </div>

            <el-divider><i class="el-icon-s-opportunity"></i></el-divider>

            <div>
              <p class="sub-title">学 术</p>
              <p class="subsub-title">本科</p>
              <ul>
                <li>发明专利：智能手机闪光灯控制的光控防盗锁系统及开锁方法（CN105957208A）</li>
                <li>实用新型专利：智能手机闪光灯控制的光控防盗锁系统（CN206058319U）</li>
              </ul>

              <p class="subsub-title">硕士</p>
              <ul>
                <li>会议论文：Shuai Sun, Yuan Liu, Guibing Guo: A Privacy-Preserving and Robust Reputation System based on
                  Blockchain. ISPA 2019: XXX-XXX（CCF C类会议，EI检索）
                </li>
              </ul>
            </div>

            <el-divider><i class="el-icon-s-check"></i></el-divider>

            <div>
              <p class="sub-title">获 奖</p>
              <p class="subsub-title">本科</p>
              <ul>
                <li>2015年第五届全国大学生电子商务"创新、创意及创业"挑战赛河北省特等奖</li>
                <li>2015年第五届全国大学生电子商务"创新、创意及创业"挑战赛全国一等奖</li>
                <li>2015年第二届京津冀大学生创新创业大赛一等奖</li>
                <li>2015年优秀团员</li>
                <li>2015年第二届“创青春”中国青年创新创业大赛河北省二等奖</li>
                <li>2016年图灵杯neuq-acm程序设计大赛三等奖</li>
                <li>2016年科技创新奖学金</li>
                <li>2016年度“优秀创业年度人物”</li>
                <li>2016年秦皇岛国际马拉松优秀志愿者</li>
                <li>2016年第五届“中国软件杯”大学生软件设计大赛优秀奖</li>
                <li>2017年第八届蓝桥杯个人赛Java 软件开发大学 A 组河北省三等奖</li>
                <li>2017年第十五届“挑战杯”大学生课外学术科技作品竞赛河北省特等奖</li>
                <li>2018年科技创新奖学金</li>
              </ul>

              <p class="subsub-title">硕士</p>
              <ul>
                <li>2018年第二届辽宁省数学建模竞赛三等奖</li>
                <li>2019年第三届辽宁省数学建模竞赛二等奖</li>
              </ul>
            </div>


            <el-divider><i class="el-icon-guide"></i></el-divider>

            <div>
              <p class="sub-title">项 目</p>
              <!-- 项目名称（类型）——  语言 ——  组织 ——  截图 ——  使用链接 -->
              <p class="subsub-title">本科</p>

              <div style="padding: 0 20px">

                <div class="inline-wrapper">
                  <p style="width: 40%">智慧云联（Android 客户端）</p>
                  <p style="width: 25%">Java/Kotlin</p>
                  <p style="width: 25%">驰凯科技</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 40%">拉曼光谱分析仪（Android 客户端）</p>
                  <p style="width: 25%">Java/Kotlin</p>
                  <p style="width: 25%">中科院自动化所</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 40%">机器人控制器（Android 客户端）</p>
                  <p style="width: 25%">Java/Kotlin</p>
                  <p style="width: 25%">中科院自动化所</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 40%">扁鹊医疗（Android 客户端）</p>
                  <p style="width: 25%">Java/Kotlin</p>
                  <p style="width: 25%">中科院自动化所</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

              </div>

              <p class="subsub-title">硕士</p>

              <div style="padding: 0 20px">
                <div class="inline-wrapper">
                  <p style="width: 50%">靶膳生命（服务端、web端、公众号端）</p>
                  <p style="width: 40%">Java/Html/Css/JavaScript/Python</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">区块链研究组（静态网站）</p>
                  <p style="width: 40%">Html/Css/JavaScript</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">WeRobot（开源项目）</p>
                  <p style="width: 40%">Python</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">个性字体（微信小程序）</p>
                  <p style="width: 40%">JavaScript</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">照片墙（微信小程序）</p>
                  <p style="width: 40%">JavaScript</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">双面镜（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">课堂签到系统（服务端、web端、微信小程序）</p>
                  <p style="width: 40%">Java/Html/Css/JavaScript</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">阿里天池大赛-工业蒸汽量预测（0.0189%）</p>
                  <p style="width: 40%">Python</p>
                  <el-button type="text" size="mini">预览</el-button>
                </div>


              </div>
            </div>


            <el-divider></el-divider>


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

  .sub-title {
    color: #67C23A;
    font-weight: bold;
    font-size: 2rem;;
    margin: 10px 0;
  }

  .subsub-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .inline-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .inline-wrapper p {
    display: inline;
  }



  .ul-cross li {
    float: left;
    width: 130px;
  }


</style>
