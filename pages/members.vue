<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="4" style="min-width: 240px">
          <div
            style="position: fixed;display: flex;justify-content: center;align-items:center;width: 200px;height: 500px">

            <ul class="ul-navi">
              <li :class="{active: active===0}" @click="scrollTo('#h1-teacher')">实验室负责人</li>
              <li :class="{active: active===1}" @click="scrollTo('#h1-master-2018')">2018级硕士研究生</li>
              <li :class="{active: active===2}" @click="scrollTo('#h1-master-2019')">2019级硕士研究生</li>
              <li :class="{active: active===3}" @click="scrollTo('#h1-master-2020')">2020级硕士研究生</li>
              <li :class="{active: active===4}" @click="scrollTo('#h1-stu')">本科生</li>
              <li :class="{active: active===5}" @click="scrollTo('#h1-abroad')">留学生</li>
              <li :class="{active: active===6}" @click="scrollTo('#h1-old')">已毕业学生</li>
            </ul>

          </div>
        </el-col>


        <el-col :xs="18" :sm="16" :md="14" :lg="12" :xl="10"
                style="display: flex;justify-content: center;flex-wrap: wrap;" class="wrapper">

          <h1 id="h1-teacher">实验室负责人</h1>

          <member
            name="刘园"
            avatar="/avatar/liuyuan.jpg"
            letter="L"
            position="副教授"
            email="liuyuan@swc.neu.edu.cn"
            description="1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。 2014年11月毕业于新加坡南洋理工大学计算机工程学院，获得博士学位，导师是 Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。"
          ></member>

          <el-divider></el-divider>


          <h1 id="h1-master-2018">2018级硕士研究生</h1>


          <member
            name="吕科"
            avatar="/avatar/lvke.jpg"
            letter="L"
            position="2018级硕士研究生"
            email="lvke_neu@163.com"
            description="1996年出生于山东淄博。2018年毕业于鲁东大学信息与电气工程学院软件工程专业，获学士学位。现就读于东北大学软件工程专业，导师是刘园副教授。"
          ></member>


          <member
            name="孙帅"
            avatar="/avatar/sunshuai.jpg"
            letter="S"
            position="2018级硕士研究生"
            email="sunshuai.edu@gmail.com"
            description="1995 年出生于天津，工学学士。2014 年 9 月 - 2018 年 7 月就读于东北大学秦皇岛分校计算机与通信工程学院。2018 年 1 月 - 2018 年 6 月在中科院自动化所实习。2018 年 8 月至今在东北大学软件学院攻读硕士研究生，研究方向是区块链与社交物联网。2020 年 8 月 - 2020 年 9 月在腾讯实习。【<a href='/resume/sunshuai'>详细信息</a>】"
          ></member>

          <member
            name="张双峰"
            avatar="/avatar/zhangshuangfeng.jpg"
            letter="Z"
            position="2018级硕士研究生"
            email="1871161@stu.neu.edu.cn"
            description="1993年出生于辽宁本溪，工学学士，软硕1804班长。2018年9月开始攻读东北大学软件学院软件工程专业。2016年6月本科毕业于大连理工大学，获得学士学位，目前导师是刘园副教授。【<a href='/resume/zhangshuangfeng'>详细信息</a>】"
          ></member>


          <el-divider></el-divider>


          <h1 id="h1-master-2019">2019级硕士研究生</h1>

          <member
            name="艾峥鹏"
            avatar="/avatar/aizhengpeng.jpg"
            letter="A"
            position="2019级硕士研究生"
            email="im@aizhengpeng.cn"
            description="1998年出生于江西修水，工学学士，软硕1901班长。2019年9月通过推荐免试的方式攻读东北大学软件学院软件工程专业。2019年6月本科毕业于东北大学软件学院信息安全专业，获得学士学位，导师是刘园副教授。个人主页：小艾的技术栈（https://aizhengpeng.cn）。"
          ></member>

          <member
            name="田萌萌"
            avatar="/avatar/tianmengmeng.jpg"
            letter="T"
            position="2019级硕士研究生"
            email="tianmm866@163.com"
            description="1997年出生于山西太原，工学学士。2019年6月毕业于中北大学大数据学院物联网工程专业。目前就读于东北大学，研究方向契约理论。"
          ></member>

          <member
            name="闫玉"
            avatar="/avatar/yanyu.jpeg"
            letter="Y"
            position="2019级硕士研究生"
            email="944981514@qq.com"
            description="1997年出生于山东滕州，工学学士。2019年9月进入东北大学软件学院软件工程专业学习。主要研究领域：SIOV(Social Interent of Vehicle)"
          ></member>

          <member
            name="张闯"
            avatar="/avatar/zhangchuang.jpeg"
            letter="Z"
            position="2019级硕士研究生"
            email="1905874127@qq.com"
            description="1997年出生于辽宁朝阳。2019年毕业于东北电力大学计算机学院软件工程专业，获学士学位。现就读于东北大学软件工程专业，师从刘园副教授。"
          ></member>

          <el-divider></el-divider>

          <h1 id="h1-master-2020">2020级硕士研究生</h1>

          <member
            name="陈俣欣"
            avatar="/avatar/chenyuxin.jpg"
            letter="C"
            position="2020级硕士研究生"
            email="chenyuxin357@163.com"
            description="1997年出生于辽宁沈阳，工学学士。2020年6月毕业于内蒙古大学软件工程专业。目前就读于东北大学，研究方向联邦学习。"
          ></member>

          <member
            name="杜妍"
            avatar="/avatar/duyan.jpg"
            letter="D"
            position="2020级硕士研究生"
            email="2071272@stu.neu.edu.cn"
            description="1998年出生于安徽六安，工学学士。2020年6月毕业于安徽工业大学软件工程专业。目前就读于东北大学，研究方向联盟链，师从刘园副教授。"
          ></member>

          <member
            name="于汪源"
            avatar="/avatar/yuwangyuan.jpg"
            letter="Y"
            position="2020级硕士研究生"
            email="2071338@stu.neu.edu.cn"
            description="1998年出生于辽宁铁岭。2020年6月毕业于湘潭大学信息管理与信息系统专业，获管理学学士，经济学学士。目前就读于东北大学，师从刘园副教授。"
          ></member>

          <member
            name="张亚男"
            avatar=""
            letter="Z"
            position="2020级硕士研究生"
            email=""
            description=""
          ></member>

          <el-divider></el-divider>

          <h1 id="h1-stu">本科生</h1>

          <member
            name="陈杰南"
            avatar=""
            letter="C"
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="陈星任"
            avatar=""
            letter="C"
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <member
            name="张智昭"
            avatar=""
            letter="Z"
            position="2017级本科生"
            email=""
            description=""
          ></member>

          <el-divider></el-divider>

          <h1 id="h1-abroad">留学生</h1>

          <member
            name="Hazem"
            avatar=""
            letter="H"
            position="2017级硕士留学生"
            email=""
            description=""
          ></member>


          <el-divider></el-divider>

          <h1 id="h1-old">已毕业学生</h1>

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

          <member
            name="Shittu"
            avatar=""
            letter="S"
            position="2016级硕士留学生"
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
      return {
        active: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        // 获取所有锚点元素
        const navContents = document.querySelectorAll('.wrapper h1');
        // 所有锚点元素的 offsetTop
        const offsetTopArr = [];
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        });
        // 获取当前文档流的 scrollTop
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 定义当前点亮的导航下标
        let navIndex = 0;
        for (let n = 0; n < offsetTopArr.length; n++) {
          // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
          // 那么此时导航索引就应该是 n 了
          if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
          }
        }
        // 把下标赋值给 vue 的 data
        this.active = navIndex
      },
      // 跳转到指定索引的元素
      scrollTo(content_id) {
        // 获取目标的 offsetTop
        // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1

        const targetOffsetTop = document.querySelector(content_id).offsetTop
        // 获取当前 offsetTop
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉
        const STEP = 50
        // 判断是往下滑还是往上滑
        if (scrollTop > targetOffsetTop) {
          // 往上滑
          smoothUp()
        } else {
          // 往下滑
          smoothDown()
        }

        // 定义往下滑函数
        function smoothDown() {
          // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
          if (scrollTop < targetOffsetTop) {
            // 如果和目标相差距离大于等于 STEP 就跳 STEP
            // 否则直接跳到目标点，目标是为了防止跳过了。
            if (targetOffsetTop - scrollTop >= STEP) {
              scrollTop += STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
            // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
            requestAnimationFrame(smoothDown)
          }
        }

        // 定义往上滑函数
        function smoothUp() {
          if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
              scrollTop -= STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
          }
        }
      }

    }
  }
</script>

<style scoped>

  h1 {
    width: 100%;
  }

  .ul-navi {
    font-size: 1.3rem;
    font-weight: bold;
    color: #909399;
    width: 100%;
  }

  .ul-navi li {
    cursor: pointer;
    margin: 30px 0;
  }

  .ul-navi .active {
    font-size: 1.5rem;
    color: #303133;
  }
</style>
