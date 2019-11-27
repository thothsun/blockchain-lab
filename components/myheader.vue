<template>
  <el-container class="navi navi-outside-wrapper">
    <div class="navi-wrapper">
      <div class="navi-background">


        <div class="content">
          <el-row :gutter="0" type="flex" justify="center">

            <el-col :xs="11" :sm="10" :md="9" :lg="8" :xl="7">
              <div v-for="item in titles1"
                   v-bind:class="{'selected':index===item.key,'mousein':mouseindex===item.key}"
                   @mouseenter="mouseenter(item.key)" @mouseleave="mouseleave()" class="title-item">
                <nuxt-link v-bind:to="item.key" class="title-item-link">
                  <p class="c-title">{{item.name_cn}}</p>
                  <p class="e-title">{{item.name_en}}</p>
                </nuxt-link>
              </div>
            </el-col>

            <el-col :span="2" class="hidden-xs-only">
              <div class="logo">
                <p style="">B&R</p>
              </div>
            </el-col>

            <el-col :xs="11" :sm="10" :md="9" :lg="8" :xl="7">
              <div v-for="item in titles2"
                   v-bind:class="{'selected':index===item.key,'mousein':mouseindex===item.key}"
                   @mouseenter="mouseenter(item.key)" @mouseleave="mouseleave()" class="title-item">
                <nuxt-link v-bind:to="item.key" class="title-item-link">
                  <p class="c-title">{{item.name_cn}}</p>
                  <p class="e-title">{{item.name_en}}</p>
                </nuxt-link>
              </div>
            </el-col>

          </el-row>
        </div>


      </div>
    </div>
  </el-container>


</template>


<script>
  export default {
    name: 'myheader',
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


<style scoped src="~/assets/navi.css"/>

<style scoped>


  .el-row, .el-col {
    height: 100%;
  }


  .el-col {
    display: flex;
    justify-content: center;
  }


  .content {
    font-weight: 500;
    height: 100%;
    width: 100%;
  }

  .logo {
    height: 100%;
    min-width: 120px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-family: 'Times New Roman', serif;
    color: purple;
    overflow: hidden;
  }


  .title-item {
    display: table;
    width: 33%;
    height: 100%;
    text-align: center;
  }

  .title-item-link {
    color: #303133;
    letter-spacing: 0;
    line-height: 1.3;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
  }

  .c-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .e-title {
    font-size: 1rem;
    color: #909399;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .selected {
    border-bottom: 1px solid purple;
  }

  .mousein {
    border-bottom: 1px solid purple;
  }


</style>
