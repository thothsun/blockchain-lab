<template>
  <el-container>
    <el-header class="header_bg" height="100px">
      <nav class="navbar">

        <div v-for="item in titles1"
             v-bind:class="{'selected':index===item.key,'mousein':mouseindex===item.key}"
             @mouseenter="mouseenter(item.key)" @mouseleave="mouseleave()" class="title-item">
          <nuxt-link v-bind:to="item.key" class="title-item-link">
            <p class="c-title">{{item.name_cn}}</p>
            <p class="e-title">{{item.name_en}}</p>
          </nuxt-link>
        </div>

        <div class="logo">
          <p style="font-size: 70px;font-family: 'Times New Roman',serif;color: purple">B&R</p>
        </div>

        <div v-for="item in titles2"
             v-bind:class="{'selected':index===item.key,'mousein':mouseindex===item.key}"
             @mouseenter="mouseenter(item.key)" @mouseleave="mouseleave()" class="title-item">
          <nuxt-link v-bind:to="item.key" class="title-item-link">
            <p class="c-title">{{item.name_cn}}</p>
            <p class="e-title">{{item.name_en}}</p>
          </nuxt-link>
        </div>

      </nav>
    </el-header>
    <el-header height="100px"></el-header> <!--placeholder-->
  </el-container>
</template>

<!--todo 鼠标进入字体变色-->

<script>
  export default {
    props: {
      index: {
        type: String,
        default: 'introduction'
      }
    },
    data() {
      return {
        titles1: [
          {
            key: '/',
            name_cn: '简介',
            name_en: 'introduction'
          },
          {
            key: '/achievements',
            name_cn: '学术成果',
            name_en: 'achievements'
          },
          {
            key: '/members',
            name_cn: '团队成员',
            name_en: 'members'
          }],
        titles2: [
          {
            key: '/join',
            name_cn: '加入我们',
            name_en: 'join us'
          },
          {
            key: '/events',
            name_cn: '新闻活动',
            name_en: 'events'
          },
          {
            key: '/friends',
            name_cn: '友情链接',
            name_en: 'friends'
          }],
        mouseindex: ''
      }
    },
    methods: {
      mouseenter(index) {
        this.mouseindex = index
      },
      mouseleave() {
        this.mouseindex = null
      }
    }
  }
</script>

<style scoped>

  .header_bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(237, 237, 237);
  }

  .navbar {
    font-weight: 500;
    width: 1200px;
    height: 100%;
    margin: 0 auto 0 auto;
    display: block;
    background: none;
    border: none;
    padding: 0;
  }

  .logo {
    height: 100%;
    width: 12%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    float: left;
  }


  .title-item {
    float: left;
    display: table;
    list-style: none;
    width: 14%;
    height: 100%;
    text-align: center;
  }

  .title-item-link {
    font-size: 16px;
    color: #051027;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
  }

  .c-title {
    margin-bottom: 10px;
  }

  .e-title {
    line-height: 11px;
    font-size: 10px;
    color: #797c81;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .selected {
    border-bottom: 1px solid purple;
  }

  .mousein {
    border-bottom: 1px solid purple;
  }


</style>
