<template>
  <div class="blog-list-add">
    <strong>当前位置：</strong>
    <span>享学科技网</span>
    <span>&gt;</span>
    <span>名师博客</span>
    <span>&gt;</span>
    <span>{{now_address}}</span>
  </div>
</template>

<script>
export default {
  name: 'detail-adddress',
  props: {
    now_address: String
  }
}
</script>

<style scoped>
  .blog-list-add{
    margin: 45px 0;
  }
  .blog-list-add strong,.blog-list-add span{
    font-size: 15px;
    color: #333;
  }
</style>
