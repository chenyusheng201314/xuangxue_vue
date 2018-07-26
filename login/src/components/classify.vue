<template>
 <div class="classify">
    <div class="classify-con">
      <div class="classify-close">
        <img src="../../static/images/colse-cover.png" alt="" width="16">
      </div>
      <div class="classify-tit">
          <h4>选择你的会员类型</h4>
      </div>
      <div class="classify-type" v-for="(item,index ) in classify_info" :class="{active:index === now_ind}" @mouseover="icon_change(index)" @click="to_login(item.login_type)">
        <img :src="item.show_icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      now_ind: 0,
      classify_info: [
        {
          name: '个人用户',
          show_icon: '../../static/images/user-icon2.png',
          mouseover_icon: '../../static/images/user-icon2.png',
          mouseleave_icon: '../../static/images/user-icon1.png',
          login_type: 1
        },
        {
          name: '机构用户',
          show_icon: '../../static/images/jigou-icon1.png',
          mouseover_icon: '../../static/images/jigou-icon2.png',
          mouseleave_icon: '../../static/images/jigou-icon1.png',
          login_type: 2
        },
        {
          name: '公司用户',
          show_icon: '../../static/images/com-icon1.png',
          mouseover_icon: '../../static/images/com-icon2.png',
          mouseleave_icon: '../../static/images/com-icon1.png',
          login_type: 3
        }
      ]
    }
  },
  methods: {
    icon_change (ind) {
      const that = this
      that.now_ind = ind
      $.each(that.classify_info, function (key, val) {
        if (key === ind) {
          val.show_icon = val.mouseover_icon
        } else {
          val.show_icon = val.mouseleave_icon
        }
      })
    },
    to_login (logintype) {
      this.$router.push({name: 'Login', params: {type: logintype}})
    }
  }
}
</script>

<style scoped>
.classify{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1000;
}
  .classify-con{
    width: 440px;
    height: auto;
    padding: 40px 30px;
    background: #fff;
    margin: 150px auto;
    position: relative;
  }
  .classify-close{
    position: absolute;
    right: 10px;
    top: 10px;
  }
.classify-con  .classify-tit{
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: 2px solid #e0e0e0;
}
.classify-con  .classify-tit h4{
  width: 200px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 20px;
  color: #ff6900;
  border-bottom: 3px solid #ff6900;
  margin: 0 auto;
}
.classify-con  .classify-type{
  width: 100%;
  height: 100px;
  border: 1px solid #e0e0e0;
  margin-top: 35px;
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  -ms-border-radius: 16px;
  -o-border-radius: 16px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
.classify-con  .classify-type img{
  vertical-align: text-bottom;
  margin-right: 10px;
}
.classify-con  .classify-type span{
  font-size: 20px;
  color: #666;
}
.classify-con  .classify-type:hover{
  background: #ff6900;
}
.classify-con  .classify-type:hover span{
  color: #fff;
}
.classify-con  .classify-type.active{
  background: #ff6900;
}
.classify-con  .classify-type.active span{
  color: #fff;
}
</style>
