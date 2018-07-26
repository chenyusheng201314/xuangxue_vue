<template>
  <div class="login-cover">
    <div class="login-cover-con">
       <span class="cover-close" @click="login_close">
        <img src="../../static/images/colse-cover.png" alt="" width="16">
      </span>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from './login'

export default {
  name: 'index',
  components: {
    Login
  },
  methods: {
    login_close () {
      console.log('登录弹窗关闭，应该跳转路由')
    }
  },
  mounted () {
    console.log(this.$route.params.type)
  }
}
</script>

<style scoped>
  .login-cover {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10001;
    background: rgba(0, 0, 0, 0.6);
  }

  .login-cover-con {
    width: 440px;
    background: #fff;
    height: auto;
    padding: 40px;
    margin: 150px auto 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    position: relative;
  }

  .cover-close {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 1000;
  }

</style>
