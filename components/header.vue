<template>
  <el-container>
    <el-header class="header_bg" height="100px">
      <div class="header">
        <div class="logo">
          <img src="/logo.png" alt=""/>
        </div>
        <nav class="navbar-default">
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li v-for="item in titles"
                  v-bind:class="{'selected':index===item.key,'mousein':mouseindex===item.key}"
                  @mouseenter="mouseenter(item.key)" @mouseleave="mouseleave()">
                <nuxt-link v-bind:to="item.key">
                  <p class="c-title">{{item.name_cn}}</p>
                  <p class="e-title">{{item.name_en}}</p>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </el-header>
  </el-container>
</template>

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
        titles: [
          {
            key: '/',
            name_cn: '简介',
            name_en: 'introduction'
          },
          {
            key: 'achievements',
            name_cn: '学术成果',
            name_en: 'achievements'
          },
          {
            key: 'members',
            name_cn: '团队成员',
            name_en: 'members'
          },
          {
            // todo logo的key是/，首页时会有border。使用elementui修改布局，修改后应该不存在这个问题了
            key: '/',
            name_cn: ' ',
            name_en: ' '
          },
          {
            key: 'join',
            name_cn: '加入我们',
            name_en: 'join us'
          },
          {
            key: 'events',
            name_cn: '新闻活动',
            name_en: 'events'
          },
          {
            key: 'friends',
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
    background-color: rgba(237, 237, 237, 0.8);
    backdrop-filter: blur(10px);
  }

  .header {
    font-weight: 500;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }

  .logo {
    min-width: 1200px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    height: 100%;
    pointer-events: none;
  }

  .logo img {
    width: 128px;
    height: 50px;
    margin-top: 25px;
  }

  .navbar-default {
    display: block;
    height: 100%;
    background: none;
    border: none;
    margin-bottom: 0;
    padding: 0;
  }

  .navbar-collapse {
    display: block;
    height: 100%;
  }

  .navbar-nav {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .navbar-nav li {
    float: left;
    display: table;
    list-style: none;
    width: 14.2857142%;
    height: 100%;
    text-align: center;
  }

  .navbar-nav li a {
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
