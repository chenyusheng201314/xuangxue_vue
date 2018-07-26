<template>
  <div>case detail</div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
    console.log(this.$route.query.id)
  }
}
</script>

<style scoped>

</style>
