<template>
  <el-container direction="vertical">
    <myheader index="/events"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">

          <h1>小组讨论</h1>
          <div style="width: 80%;margin: 0 auto">
            <el-divider></el-divider>
            <img src="http://b-ssl.duitang.com/uploads/item/201507/27/20150727155835_kWfur.jpeg"/>
            <el-divider></el-divider>
            <img src="http://img.zcool.cn/community/014146554332d30000019ae935ad6b.jpg"/>
            <el-divider></el-divider>
            <img src="http://clubimg.club.vmall.com/data/attachment/forum/201901/29/1720164hfdfiqntsewh9og.png"/>
            <el-divider></el-divider>
            <img src="http://attach.bbs.miui.com/forum/201811/19/072123rjmrmsjnuv3msepw.jpeg"/>
            <el-divider></el-divider>
            <img src="http://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201910/06/201006fdl7kesx7fm7j5sk.jpg"/>
            <el-divider></el-divider>
            <img src="http://p.qpic.cn/dnfbbspic/0/dnfbbs_dnfbbs_dnf_gamebbs_qq_com_forum_201910_17_082503ztpxsgizux3qwxsk.jpg/0"/>
            <el-divider></el-divider>
            <img src="http://b-ssl.duitang.com/uploads/item/201412/06/20141206031537_XhAR2.jpeg"/>
          </div>

          <h1>团队建设</h1>
          <div style="width: 80%;margin: 0 auto">
            <el-divider></el-divider>
            <img src="http://b-ssl.duitang.com/uploads/item/201507/27/20150727155835_kWfur.jpeg"/>
            <el-divider></el-divider>
            <img src="http://img.zcool.cn/community/014146554332d30000019ae935ad6b.jpg"/>
            <el-divider></el-divider>
            <img src="http://clubimg.club.vmall.com/data/attachment/forum/201901/29/1720164hfdfiqntsewh9og.png"/>
            <el-divider></el-divider>
            <img src="http://attach.bbs.miui.com/forum/201811/19/072123rjmrmsjnuv3msepw.jpeg"/>
            <el-divider></el-divider>
            <img src="http://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201910/06/201006fdl7kesx7fm7j5sk.jpg"/>
            <el-divider></el-divider>
            <img src="http://p.qpic.cn/dnfbbspic/0/dnfbbs_dnfbbs_dnf_gamebbs_qq_com_forum_201910_17_082503ztpxsgizux3qwxsk.jpg/0"/>
            <el-divider></el-divider>
            <img src="http://b-ssl.duitang.com/uploads/item/201412/06/20141206031537_XhAR2.jpeg"/>
          </div>


        </el-col>
      </el-row>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/header.vue'
  import myfooter from '~/components/footer.vue'

  export default {
    name: "events",
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  img{
    margin: 0 auto;
    width: 100%;
  }

</style>
