<template>
  <el-footer class="footer">

    <div class="content">
      <p>辽宁省沈阳市浑南区创新路195号 | 东北大学 | 软件学院 | Powered by sunshuai.</p>
      <p>ICP备案网站信息: <a href="http://www.beian.miit.gov.cn/">辽ICP备19018516号-1</a> | Copyright © 2019 R&B research lab. All Rights Reserved.</p>
    </div>


  </el-footer>
</template>

<script>
  export default {
    name: "myfooter"
  }
</script>

<style scoped>

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #909399;
    font-size: 1.2rem;
    background-color: rgba(237, 237, 237);;
  }

  .content{
    text-align: center;
  }

</style>
