<template>
  <div class="now-site">
    <span>当前位置：</span>
    <span class="m-l-5">享学科技网</span>
    <span class="m-l-5"> &gt;</span>
    <span class="m-l-5">课程分类</span>
    <span class="m-l-5"> &gt;</span>
    <span class="m-l-5">{{now_class_list}}</span>
  </div>
</template>

<script>
export default {
  name: 'NowSite',
  props: {
    now_class_list: String
  }
}
</script>

<style scoped>
  .m-l-5 {
    margin-left: 5px;
  }

  .now-site {
    margin-top: 45px;
    margin-bottom: 45px;
  }

  .now-site span {
    font-size: 15px;
    color: #333;
  }
</style>
