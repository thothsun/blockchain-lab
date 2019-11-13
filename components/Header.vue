<template>
  <div class="header_bg">
    <div class="header">
      <div class="logo">
        <img src="~/static/logo.png" alt=""/>
      </div>
      <nav class="navbar-default">
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li>
              <a href="http://baidu.com">
                <p class="c-title">首页</p>
                <p class="e-title">Home</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="c-title">加入我们</p>
                <p class="e-title">Join Us</p>
              </a>
            </li>
            <li></li>
            <li>
              <a href="#">
                <p class="c-title">新闻动态</p>
                <p class="e-title">Events</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="c-title">友情链接</p>
                <p class="e-title">Link</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header_bg {
    width: 100%;
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
    width: 20%;
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

</style>
