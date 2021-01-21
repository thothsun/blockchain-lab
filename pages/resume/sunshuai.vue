<template>
  <el-container direction="vertical">

    <transition name="fade">
      <div
        style="background-color: rgba(0,0,0,0.5);height: 100%;width: 100%;position: fixed;z-index: 99;display: flex;justify-content: center;align-items: center"
        v-show="show" @click="hideImg">
        <el-image :src="current_img" style="height: 640px;width: 640px;margin: 0 auto" fit="contain"></el-image>
      </div>
    </transition>


    <transition name="fade">
      <div
        style="background-color: rgba(0,0,0,0.5);height: 100%;width: 100%;position: fixed;z-index: 99;display: flex;justify-content: center;align-items: center"
        v-if="show_video" @click="hideVideo">
        <video width="640" height="480" autoplay="autoplay" loop="loop" preload="metadata">
          <source :src="'/sunshuai/xm3.mp4'" type="video/mp4">
        </video>
      </div>
    </transition>


    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="22" :sm="20" :md="18" :lg="14" :xl="14">

          <div style="border: #DCDFE6 solid 1px;border-radius:10px; padding: 30px;overflow: hidden;margin-top: 50px">


            <div style="height: 120px;display: flex;justify-content: space-between;">
              <div
                style="height: 100%; width: 100%; display: inline-flex;flex-direction: column;justify-content: space-between">

                <div style="width: 100%;height:30%;display: inline-flex;justify-content: space-between">

                  <div style="display: inline-flex;width: 50%;align-items: flex-end">
                    <p style="font-size: 2.4rem;font-weight: bold;">
                      孙帅
                    </p>
                  </div>

                  <div style="display: inline-flex;width: 50%;align-items: flex-end;padding: 0 5px">
                    <p style="text-shadow:#07C160 0 0 5px;font-size:1.8rem;font-weight: bold;color:white;">
                      万物之中，希望至美。
                    </p>
                  </div>

                </div>


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
                      <el-link :href="'https://github.com/thothsun'" target="_blank">https://github.com/thothsun
                      </el-link>
                    </div>
                  </div>

                  <div style="height: 50%;">
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      籍贯: 天津市
                    </div>
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      生日：1995 年 5 月
                    </div>
                  </div>


                </div>


              </div>

              <div
                style="height: 100%; display: inline-flex;align-items: center;border: #E4E7ED solid 1px">
                <el-image style="height: 120px;width: 88px" src="/avatar/sunshuai-1.jpg"></el-image>
              </div>
            </div>

            <el-divider><i class="el-icon-connection"></i></el-divider>

            <div>

              <p class="sub-title">教 育</p>

              <div class="inline-wrapper">
                <p>2018.8-2021.7</p>
                <p style="width: 150px">东北大学</p>
                <p style="width: 260px">软件学院（软件工程）</p>
                <p>硕士（全日制）</p>
              </div>

              <div class="inline-wrapper">
                <p>2014.9-2018.7</p>
                <p style="width: 150px">东北大学秦皇岛分校</p>
                <p style="width: 260px">计算机与通信工程学院（电子信息工程）</p>
                <p>本科（全日制）</p>
              </div>

            </div>

            <el-divider><i class="el-icon-school"></i></el-divider>

            <div>
              <p class="sub-title">实 习</p>

              <div class="inline-wrapper" @click="showImg('/sunshuai/sx2.jpg')" style="cursor: pointer;">
                <p>2020.8-2020.9</p>
                <p>深圳市腾讯计算机系统有限公司 - CSIG云与智慧产业事业群</p>
                <p>软件开发实习生</p>
              </div>

              <div class="inline-wrapper" @click="showImg('/sunshuai/sx1.jpg')" style="cursor: pointer;">
                <p>2018.1-2018.6</p>
                <p>中国科学院自动化研究所 - 数字内容技术与服务研究中心</p>
                <p>软件开发实习生</p>
              </div>

            </div>

            <el-divider><i class="el-icon-office-building"></i></el-divider>

            <div>
              <p class="sub-title">创 业</p>

              <div class="inline-wrapper" @click="showImg('/sunshuai/cy.jpg')" style="cursor: pointer;">
                <p>2016.1-2017.6</p>
                <p>河北驰凯科技有限公司</p>
                <p>联合创始人，负责软件开发</p>
              </div>
            </div>

            <el-divider><i class="el-icon-s-opportunity"></i></el-divider>

            <div>
              <p class="sub-title">学 术</p>

              <p class="subsub-title">硕士</p>
              <ul>
                <li @click="showImg('/sunshuai/xs3.jpg')">会议论文：Shuai Sun, Yuan Liu, Guibing Guo: A Privacy-Preserving
                  and Robust Reputation System based on
                  Blockchain. IEEE ISPA 2019（CCF C类会议，EI检索）
                </li>
              </ul>

              <p class="subsub-title">本科</p>
              <ul>
                <li @click="showImg('/sunshuai/xs1.jpg')">发明专利：智能手机闪光灯控制的光控防盗锁系统及开锁方法（CN105957208A）</li>
                <li @click="showImg('/sunshuai/xs2.jpg')">实用新型专利：智能手机闪光灯控制的光控防盗锁系统（CN206058319U）</li>
              </ul>

            </div>

            <el-divider><i class="el-icon-s-check"></i></el-divider>

            <div>
              <p class="sub-title">获 奖</p>

              <p class="subsub-title">硕士</p>
              <ul>
                <li @click="showImg('/sunshuai/hj16.jpg')">2020年中国高校计算机大赛微信小程序应用开发赛东北赛区三等奖</li>
                <li @click="showImg('/sunshuai/hj15.jpg')">2019年第三届辽宁省数学建模竞赛二等奖</li>
                <li @click="showImg('/sunshuai/hj14.jpg')">2018年第二届辽宁省数学建模竞赛三等奖</li>
              </ul>

              <p class="subsub-title">本科</p>
              <ul>
                <li @click="showImg('/sunshuai/hj13.jpg')">2018年科技创新奖学金</li>
                <li @click="showImg('/sunshuai/hj12.jpg')">2017年第十五届“挑战杯”大学生课外学术科技作品竞赛河北省特等奖</li>
                <li @click="showImg('/sunshuai/hj11.jpg')">2017年第八届蓝桥杯个人赛Java 软件开发大学 A 组河北省三等奖</li>
                <li @click="showImg('/sunshuai/hj10.jpg')">2016年第五届“中国软件杯”大学生软件设计大赛优秀奖</li>
                <li @click="showImg('/sunshuai/hj9.jpg')">2016年秦皇岛国际马拉松优秀志愿者</li>
                <li @click="showImg('/sunshuai/hj8.jpg')">2016年度“优秀创业年度人物”</li>
                <li @click="showImg('/sunshuai/hj7.jpg')">2016年科技创新奖学金</li>
                <li @click="showImg('/sunshuai/hj6.jpg')">2016年图灵杯neuq-acm程序设计大赛三等奖</li>
                <li @click="showImg('/sunshuai/hj5.jpg')">2015年第二届“创青春”中国青年创新创业大赛河北省二等奖</li>
                <li @click="showImg('/sunshuai/hj4.jpg')">2015年优秀团员</li>
                <li @click="showImg('/sunshuai/hj3.jpg')">2015年第二届京津冀大学生创新创业大赛一等奖</li>
                <li @click="showImg('/sunshuai/hj2.jpg')">2015年第五届全国大学生电子商务"创新、创意及创业"挑战赛全国一等奖</li>
                <li @click="showImg('/sunshuai/hj1.jpg')">2015年第五届全国大学生电子商务"创新、创意及创业"挑战赛河北省特等奖</li>

              </ul>

            </div>


            <el-divider><i class="el-icon-guide"></i></el-divider>

            <div>
              <p class="sub-title">项 目</p>

              <div style="padding: 0 20px">
                <div class="inline-wrapper">
                  <p style="width: 50%">腾讯课堂（腾讯实习）</p>
                  <p style="width: 40%">Java/Kotlin/Flutter</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm13.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">阿里天池大赛-工业蒸汽量预测（0.0199%）</p>
                  <p style="width: 40%">Python</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm12.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">课堂签到系统（服务端、web端、微信小程序）</p>
                  <p style="width: 40%">Java/Html/Css/JavaScript</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm11.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">双面镜（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm10.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">照片墙（微信小程序）</p>
                  <p style="width: 40%">JavaScript</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm9.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">个性字体（微信小程序）</p>
                  <p style="width: 40%">JavaScript</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm8.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">WeRobot（开源项目）</p>
                  <p style="width: 40%">Python</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm7.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">区块链研究组（web端）</p>
                  <p style="width: 40%">Html/Css/JavaScript</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm6.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">靶膳生命（服务端、web端、公众号端）</p>
                  <p style="width: 40%">Java/Html/Css/JavaScript/Python</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm5.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">扁鹊医疗（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm4.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">机器人控制器（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini" @click="showVideo('/sunshuai/xm3.mp4')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">拉曼光谱分析仪（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm2.jpg')">预览</el-button>
                </div>

                <div class="inline-wrapper">
                  <p style="width: 50%">智慧云联（Android 客户端）</p>
                  <p style="width: 40%">Java/Kotlin</p>
                  <el-button type="text" size="mini" @click="showImg('/sunshuai/xm1.jpg')">预览</el-button>
                </div>

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

import myfooter from '~/components/myfooter.vue'

export default {
  name: "sunshuai",
  data() {
    return {
      current_img: '',
      show: false,
      current_video: '',
      show_video: false
    }
  },
  components: {
    myfooter
  },
  methods: {
    showImg(src) {
      this.current_img = src
      this.show = true
    },
    hideImg() {
      this.show = false
      this.current_img = ''
    },
    showVideo(src) {
      this.current_video = src
      this.show_video = true
    },
    hideVideo() {
      this.show_video = false
      this.current_video = ''
    }
  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

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

li {
  cursor: pointer;
}


</style>
