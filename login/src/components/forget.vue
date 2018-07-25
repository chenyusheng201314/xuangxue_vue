<template>
  <div class="forget">
    <div class="forgrt-con">
      <span class="forget-close" @click="forget_close">
          <img src="../../static/images/colse-cover.png" alt="" width="16">
      </span>
      <div class="forget-tit">
        <div class="forget-tit-left active">
          <img src="../../static/images/forget.png" alt="" width="16">
          忘记密码
        </div>
      </div>
      <div class="forget-inp">
        <img src="../../static/images/icon-phone.png" alt="" width="9">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="forget-duanxin">
        <img src="../../static/images/icon-duanxin.png" alt="" width="13">
        <input type="text" placeholder="输入短信码" v-model="yzm">
        <span class="line">|</span>
        <span class="get_num" @click="get_yzm">{{yzm_info}}</span>
      </div>
      <div class="forget-inp">
        <img src="../../static/images/icon-pwd.png" alt="" width="13">
        <input type="password" placeholder="设置新密码" v-model="pwd">
      </div>
      <div class="forget-inp">
        <img src="../../static/images/icon-pwd.png" alt="" width="13">
        <input type="password" placeholder="再次输入新密码" v-model="pwd_again">
      </div>
      <p class="forget-error" v-show="error_show">
        <img src="../../static/images/icon-error.png" alt="" width="12">
        {{error_info}}
      </p>
      <div class="forget-btn" @click="user_forget">完 成</div>
      <div class="login-type">
        <div class="login-type-right">
          <span class="go-zhuce" @click="go_login">去登录 &gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forget',
  data () {
    return {
      phone: '',
      yzm: '',
      pwd: '',
      pwd_again: '',
      error_show: false,
      error_info: '错误信息',
      Isphone: /^1[34578]\d{9}$/,
      on_off: true,
      time: 60,
      yzm_info: '获取验证码',
      cover_show: true
    }
  },
  methods: {
    user_forget () {
      var that = this
      if (that.phone === '') {
        that.error_show = true
        that.error_info = '手机号码不能为空'
      } else if (that.Isphone.test(that.phone)) {
        that.error_show = true
        that.error_info = '手机号码格式不正确'
      } else if (that.yzm === '') {
        that.error_show = true
        that.error_info = '验证码不能为空'
      } else if (that.pwd === '') {
        that.error_show = true
        that.error_info = '新密码不能为空'
      } else if (that.pwd_again !== that.pwd) {
        that.error_show = true
        that.error_info = '两次密码不一致'
      }
    },
    go_login () {
      this.$router.push({path: '/login'})
    },
    //  获取验证码
    get_yzm () {
      var that = this
      if (that.on_off) {
        that.on_off = false
        let set = setInterval(function () {
          if (that.time > 1) {
            that.time--
            that.yzm_info = that.time + 's'
          } else {
            that.time = 60
            that.yzm_info = '获取验证码'
            that.on_off = true
            clearInterval(set)
          }
        }, 1000)
      }
    },
    //  弹窗关闭
    forget_close () {
      console.log('弹窗关闭，应该跳转路由')
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

  .forget {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
  }

  .forgrt-con {
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

  .forget-close {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 1000;
  }

  .forget-tit {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .forget-tit .forget-tit-left {
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

  .forget-tit .forget-tit-left.active {
    color: #ff6900;
    border-bottom: 3px solid #ff6900;
  }

  .forget-inp, .forget-duanxin {
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

  .forget-inp span {
    display: inline-block;
    line-height: 50px;
  }

  .forget-inp input, .forget-duanxin input {
    width: 300px;
    height: 46px;
    border: none;
    font-size: 15px;
    outline: none;
    float: right;
    background: #f9f9f9;
  }

  .forget-duanxin input {
    width: 170px;
    float: none;
    height: 40px;
  }

  .forget-duanxin .line {
    font-size: 15px;
    color: #999;
  }

  .forget-duanxin .get_num {
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

  .forget-error {
    width: 100%;
    height: auto;
    color: #ff5758;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 15px;
  }

  .forget-btn {
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

  .login-type .login-type-right {
    float: right;
  }

  .login-type .login-type-right .go-zhuce {
    font-size: 12px;
    color: #ff6900;
    cursor: pointer;
  }
</style>
