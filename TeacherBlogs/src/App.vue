<template>
  <div id="app">
    <h2>这里放导航</h2>
    <router-view></router-view>
    <h2>底部</h2>
  </div>
</template>

<script>
import List from './components/BlogList/index'
import Detail from './components/BlogDetail/index'

export default {
  name: 'App',
  components: {
    List,
    Detail
  }
}
</script>

<style>
  #app {
    width: 1200px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }
</style>
