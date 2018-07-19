<template>
  <div id="app">
    <h2>这里放导航</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import classify from './components/class-list/classify'
import detail from './components/class-detail/detail'
export default {
  name: 'App',
  components: {
    classify,
    detail
  }

}
</script>

<style>
  #app {
    width: 1250px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 25px;
  }
  ul,li,ol{
    list-style-type: none;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background: #ff6900 !important;
  }
</style>
