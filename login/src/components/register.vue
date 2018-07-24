<template>
  <div class="register">
    <div class="register-con">
    <span class="cover-close">
        <img src="../../static/images/colse-cover.png" alt="" width="16">
     </span>
      <div class="register-tit">
        <div class="register-tit-left active">
          <img src="../../static/images/register.png" alt="" width="13">
          账户登录
        </div>
      </div>
      <div class="register-inp">
        <img src="../../static/images/icon-phone.png" alt="" width="9">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="register-yzm">
        <div class="yzm-left">
          <img src="../../static/images/icon-yzm.png" alt="" width="15">
          <input type="text" placeholder="请输入验证码"  v-model="yzm">
        </div>
        <div class="yzm-right">
          <img src="../../static/images/yzm.png" alt="">
        </div>
      </div>
      <div class="register-duanxin">
        <img src="../../static/images/icon-duanxin.png" alt="" width="13">
        <input type="text" placeholder="输入短信码" v-model="duanxin">
        <span class="line">|</span>
        <span class="get_num" @click="get_yzm">{{duanxin_info}}</span>
      </div>
      <div class="register-inp">
        <img src="../../static/images/icon-pwd.png" alt="" width="13">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="register-inp">
        <img src="../../static/images/icon-pwd.png" alt="" width="13">
        <input type="password" placeholder="再次输入密码" v-model="pwd_again">
      </div>
      <p class="register-error" v-show="error_type">
        <img src="../../static/images/icon-error.png" alt="" width="12">
        {{error_info}}
      </p>
      <div class="register-btn" @click="user_register">注   册</div>
      <div class="login-type">
        <div class="login-type-left">
          <span class="box" @click="agree_change">
            <img src="../../static/images/icon-gou.png" alt="" width="12" v-show="agree">
          </span>
          <span class="f12 color-999">我同意</span>
          <a href="javascript:;" class="f12 color-999">《服务条款》</a>
          <span class="f12 color-999">和</span>
          <a href="javascript:;" class="f12 color-999">《享学隐私政策》</a>
        </div>
        <div class="login-type-right">
          <span class="go-zhuce">去登录 &gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      phone: '', // 注册手机号
      yzm: '', // 注册验证码
      duanxin: '', // 短信验证码
      pwd: '',
      pwd_again: '',
      error_type: false, // 错误信息提示
      error_info: '错误信息提示',
      agree: true, // 同意
      duanxin_info: '获取验证码',
      on_off: true, // 防恶意点击
      time: 60 // 60s后再次获取
    }
  },
  methods: {
    // 获取验证码
    get_yzm () {
      var that = this
      if (that.on_off) {
        console.log(that.on_off)
        that.on_off = false
        var set = setInterval(function () {
          if (that.time > 1) {
            that.time--
            that.duanxin_info = that.time + 's'
          } else {
            that.time = 60
            clearInterval(set)
            that.duanxin_info = '获取验证码'
            that.on_off = true
          }
        }, 500)
      }
    },
    //  同意或者不同意
    agree_change () {
      this.agree = !this.agree
    },
    user_register () {
      var that = this,
        Isphone = /^1[34578]\d{9}$/
      if (that.phone === '') {
        that.error_info = '手机号不能为空'
        that.error_type = true
      } else if (!Isphone.test(that.phone)) {
        that.error_info = '手机号格式不正确'
        that.error_type = true
      }
    }
  }
}
</script>

<style scoped>
  .f12 {
    font-size: 12px;
  }

  .color-999 {
    color: #999;
  }
  .register {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
  }

  .register-con {
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

  .register-con .cover-close {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 1000;
  }

  .register-tit {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .register-tit .register-tit-left {
    width: 50%;
    float: left;
    text-align: center;
    font-size: 20px;
    color: #333;
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #dcdcdc;
    cursor: pointer;
  }

  .register-tit .register-tit-left.active {
    color: #ff6900;
    border-bottom: 3px solid #ff6900;
  }
  .register-tit .register-tit-left img{
    vertical-align: text-top;
  }
  .register-inp,.register-yzm .yzm-left,.register-duanxin{
    margin-top: 15px;
    width: 358px;
    height: 50px;
    border: 1px solid #e0e0e0;
    font-size: 20px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding-left: 35px;
    background: #f9f9f9;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    line-height: 50px;
  }
  .register-inp span {
    display: inline-block;
    line-height: 50px;
  }
  .register-inp input,.yzm-left input,.register-duanxin input {
    width: 300px;
    height: 46px;
    border: none;
    font-size: 15px;
    outline: none;
    float: right;
    background: #f9f9f9;
  }
   .register-yzm{
    width: 100%;
    height: 50px;
    overflow: hidden;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .register-yzm .yzm-left{
    width: 210px;
    float: left;
    margin-top: 0;
  }
  .register-yzm .yzm-left input{
    width: 150px;
  }
  .register-yzm .yzm-right{
    float: right;
    width: 130px;
    height: 50px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    overflow: hidden;
  }
  .register-duanxin input {
    width: 170px;
    float: none;
    height:  40px;
  }
  .register-duanxin .line{
    font-size: 15px;
    color: #999;
  }
  .get_num{
    height: 50px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    float: right;
    cursor: pointer;
    width: 110px;
    text-align: center;
    font-size: 15px;
    color: #ff6900;
  }
  .register-error {
    width: 100%;
    height: auto;
    color: #ff5758;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 15px;
  }
  .register-btn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background: #ff6900;
    color: #fff;
    border-radius: 55px;
    -webkit-border-radius: 55px;
    -moz-border-radius: 55px;
    -ms-border-radius: 55px;
    -o-border-radius: 55px;
    margin-top: 15px;
    cursor: pointer;
  }
  .login-type {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 10px;
  }

  .login-type .login-type-left {
    float: left;
  }

  .login-type .login-type-left .box {
    width: 14px;
    height: 14px;
    border: 1px solid #ccc;
    float: left;
    cursor: pointer;
    text-align: center;
    line-height: 9px;
    margin-top: 3px;
    margin-right: 5px;
  }
  .login-type .login-type-left a{
    text-decoration: none;
    margin: 0;
  }
  .login-type .login-type-left .forget-pwd {
    cursor: pointer;
  }

  .login-type .login-type-right {
    float: right;
  }
  .login-type .login-type-right .go-zhuce {
    font-size: 12px;
    color: #ff6900;
    cursor: pointer;
  }
</style>
