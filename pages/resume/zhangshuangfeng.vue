<template>
  <el-container direction="vertical">

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="22" :sm="20" :md="18" :lg="10" :xl="10">

          <div style="border: #DCDFE6 solid 1px;border-radius:10px; padding: 30px;overflow: hidden;margin-top: 50px">


            <div style="height: 120px;display: flex;justify-content: space-between;">
              <div
                style="height: 100%; width: 100%; display: inline-flex;flex-direction: column;justify-content: space-between">
                <div style="height: 30%;font-size: 2.8rem;font-weight: bold;display: flex;align-items: center">张双峰</div>


                <div style="width: 100%;height: 50%;white-space: nowrap;overflow: hidden">

                  <div style="height: 50%">
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      <p style="display: inline">邮箱:&nbsp;</p>
                      <el-link :href="'mailto:1871161@stu.neu.edu.cn'"
                               target="_blank">1871161@stu.neu.edu.cn
                      </el-link>
                    </div>
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      <p style="display: inline">GitHub:&nbsp;</p>
                      <el-link :href="'https://github.com/zsfxtyceps'" target="_blank">https://github.com/zsfxtyceps
                      </el-link>
                    </div>
                  </div>

                  <div style="height: 50%;">
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      籍贯: 辽宁省宽甸
                    </div>
                    <div style="display: inline-flex;height: 100%;width: 50%;align-items: center">
                      生日：1993年 6月
                    </div>
                  </div>


                </div>


              </div>

              <div
                style="height: 100%; display: inline-flex;align-items: center;border: #E4E7ED dashed 1px">
                <el-image style="height: 140px;width: 100px" src="/avatar/zhangshuangfeng-1.jpg"></el-image>
              </div>
            </div>

            <el-divider><i class="el-icon-connection"></i></el-divider>

            <div>

              <p class="sub-title">教 育</p>

              <div class="inline-wrapper">
                <p>2012.9-2016.7</p>
                <p style="width: 150px">大连理工大学</p>
                <p style="width: 260px">船舶与海洋工程</p>
                <p>本科（全日制）</p>
              </div>

              <div class="inline-wrapper">
                <p>2018.8-2021.7</p>
                <p style="width: 150px">东北大学</p>
                <p style="width: 260px">软件学院（软件工程）</p>
                <p>硕士（全日制）</p>
              </div>


            </div>




            <el-divider><i class="el-icon-s-check"></i></el-divider>

            <div>
              <p class="sub-title">获 奖</p>


              <p class="subsub-title">硕士</p>
              <ul>
                <li>2018年第二届辽宁省数学建模竞赛三等奖</li>
                <li>2019年第三届辽宁省数学建模竞赛二等奖</li>
              </ul>
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


  .ul-cross li {
    float: left;
    width: 130px;
  }


  li {
    cursor: pointer;
  }


</style>
