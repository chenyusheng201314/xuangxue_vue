<template>
  <div class="case-detail-con">
      <div class="case-detail-tit">
        <a href="javascript:;" v-for="(item,index) in nav" :class="{active:index === now_ind}" @click="tab_change(index)">{{item}}</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      now_ind: 0, // 默认选择第一个
      nav: ['客户介绍', '项目背景和需求', '项目解决方案及成果展示', '项目收益', '项目参与人员', '客户证言和体会']
    }
  },
  methods: {
    // 导航切换
    tab_change (ind) {
      this.now_ind = ind
    }
  },
  mounted () {
    // 获取ID
    console.log(this.$route.query.id)
  }
}
</script>

<style scoped>
.case-detail-tit{
  width: 1200px;
  height: 45px;
  background: #eee;
  padding: 0 45px;
}
.case-detail-tit a{
  float: left;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  color: #333;
  margin-right: 55px;
  text-decoration: none;
}
.case-detail-tit a:last-child{
  margin-right: 0;
}
.case-detail-tit a.active{
  height: 50px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-bottom: 2px solid #ff6900;
  margin-top: -5px;
  line-height: 50px;
}
</style>
