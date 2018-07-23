<template>
  <div>
    <img src="../../../static/images/list/banner.png" alt="" width="1200" height="150">
    <ListAddress></ListAddress>
    <CaseList :case_list="case_list"></CaseList>
  </div>
</template>

<script>
import ListAddress from './list-address'
import CaseList from './list'
export default {
  name: 'index',
  components: {
    ListAddress,
    CaseList
  },
  data () {
    return {
      case_list: [
        {
          title: '精选案例',
          list: [
            '../../../static/images/list/li1.png',
            '../../../static/images/list/li1.png',
            '../../../static/images/list/li1.png',
            '../../../static/images/list/li1.png',
            '../../../static/images/list/li1.png',
            '../../../static/images/list/li1.png'
          ]
        },
        {
          title: '餐饮/食品/快消品',
          list: [
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
          ]
        },
        {
          title: '电工/电器/通讯',
          list: [
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
          ]
        },
        {
          title: '电商/零售',
          list: [
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
            '../../../static/images/list/li2.png',
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
