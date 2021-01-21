<template>

  <div class="container  animated flipInX">


    <div style="height: 150px;width: 150px;display:flex;justify-content:center;align-items:center">
      <el-avatar
        style="font-size: 10rem;border: 1px solid darkgrey"
        :size="148"
        shape="square"
        fit="contain"
        :src="avatar"
      >{{letter}}
      </el-avatar>
    </div>


    <div style="width: 1px;height:80%;background-color: purple;margin: 0 10px"></div>


    <div style="display: inline-block;height: 150px;width: 580px">

      <div style="height: 20%;display: flex;justify-content: space-between;align-items: center;margin: 10px 0">

        <div>
          <b style="font-size: 2rem;white-space: nowrap">{{name}}</b>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <b style="white-space: nowrap">{{position}}</b>
        </div>

        <div>
          <el-link :href="'mailto:'+email" target="_blank"><i class="el-icon-message" style="color: #909399"></i> {{email}}</el-link>
        </div>
      </div>


      <div style="height: 60%;margin: 10px 0;overflow: auto">
        <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "member",
    props: {
      name: String,
      avatar: String,
      letter: String,
      position: String,
      email: String,
      description: String
    }
  }
</script>

<style scoped>

  .container {
    margin: 10px 0;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px #DCDFE6 solid;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    overflow: hidden;
  }

</style>
