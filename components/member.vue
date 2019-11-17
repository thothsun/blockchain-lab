<template>

  <div
    style="margin-top:50px; height: 200px;width: 800px;display: flex;justify-content: space-around;align-items: center;border: 1px #DCDFE6 solid; border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px">
    <div style="height: 150px;width: 150px;">
      <div style="height: 100%;width: 100%">
        <el-avatar
          style="width: 100%;height: 100%;font-size: 10rem;display: flex;justify-content: center;align-items: center" :src="avatar">
          S
        </el-avatar>
      </div>
    </div>

    <div style="width: 1px;height:80%;background-color: purple;"></div>

    <div style="display: inline-block;height: 180px;width: 580px">

      <div style="height: 20%;display: flex;align-items: center;margin: 10px 0">
        <b style="font-size: 2rem">{{name}}</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>{{position}}</b> {{email}}
      </div>


      <div style="height: 60%;margin: 10px 0;overflow: auto">
        <p style="text-indent: 2em;font-size: 1.3rem; text-align: justify;text-justify: inter-ideograph">
          {{description}}</p>
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
      position: String,
      email: String,
      description: String
    }
  }
</script>

<style scoped>

</style>
