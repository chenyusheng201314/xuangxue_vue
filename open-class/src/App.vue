<template>
  <div id="app">
    <h2>主导航</h2>
    <h3>banner页</h3>
    <h4>地址</h4>
    <Detail></Detail>
  </div>
</template>

<script>
import Detail from './components/detail/index'
export default {
  name: 'App',
  components: {
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
  ul,li,ol{
    list-style-type: none;
  }
</style>
