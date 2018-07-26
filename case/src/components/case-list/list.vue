<template>
  <ul class="case-list">
    <li v-for="item in case_list">
      <h2>● {{item.title}}</h2>
      <div class="img-all">
        <img v-for="src in item.list" :src="src.cover" alt="" @click="go_detail(src.id)">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['case_list'],
  methods: {
    go_detail (id) {
      this.$router.push({path: '/case-detail', query: {id}})
    }
  }
}
</script>

<style scoped>
  .case-list {
    width: 1200px;
    height: auto;
    padding: 45px;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    margin-bottom: 50px;
  }

  .case-list li {
    margin-top: 45px;

  }

  .case-list li:first-child {
    margin-top: 0;
  }

  .case-list li h2 {
    font-size: 20px;
    color: #ff6900;
  }

  .case-list li .img-all {
    margin-top: 22px;
  }
  .case-list li .img-all img{
    margin-right: 8px;
    margin-top: 8px;
    cursor: pointer;
  }
</style>
