<template>
  <transition name="fade">
    <div id="loading" v-show="flag">
      <div class="loading-center">
        <div class="loading-center-absolute">
          <div class="object object_four"></div>
          <div class="object object_three"></div>
          <div class="object object_two"></div>
          <div class="object object_one"></div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "loading",
    data() {
      return {
        flag: true
      }
    },
    created() {
      setTimeout(() => {
        this.flag = false;
      }, 1000)
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

  #loading {
    background-color: #fff;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999;
    margin-top: 0;
    top: 0;
  }

  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 200px;
    width: 200px;
    margin-top: -100px;
    margin-left: -100px;
    -ms-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }


  .object {
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    -webkit-animation: animate 2s infinite;
    animation: animate 2s infinite;
  }

  .object_one {
    left: 75px;
    top: 75px;
    width: 50px;
    height: 50px;
    border-top: 5px solid #0063B1;
    border-left: 5px solid #0063B1;
  }

  .object_two {
    left: 65px;
    top: 65px;
    width: 70px;
    height: 70px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    border-top: 5px solid #6B69D6;
    border-left: 5px solid #6B69D6;
  }

  .object_three {
    left: 55px;
    top: 55px;
    width: 90px;
    height: 90px;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    border-top: 5px solid #C30052;
    border-left: 5px solid #C30052;
  }

  .object_four {
    left: 45px;
    top: 45px;
    width: 110px;
    height: 110px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    border-top: 5px solid #27AE5F;
    border-left: 5px solid #27AE5F;
  }


  @-webkit-keyframes animate {
    50% {
      -ms-transform: rotate(360deg) scale(0.8);
      -webkit-transform: rotate(360deg) scale(0.8);
      transform: rotate(360deg) scale(0.8);
    }
  }

  @keyframes animate {
    50% {
      -ms-transform: rotate(360deg) scale(0.8);
      -webkit-transform: rotate(360deg) scale(0.8);
      transform: rotate(360deg) scale(0.8);
    }
  }
</style>
