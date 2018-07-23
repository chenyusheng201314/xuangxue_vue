<template>
  <div id="app">
    <h2>这里放导航</h2>
    <List></List>
    <h2>这里放底部</h2>
  </div>
</template>

<script>
import List from './components/case-list/index'
export default {
  name: 'App',
  components: {
    List
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
  ul,li,ol{
    list-style-type: none;
  }
</style>
