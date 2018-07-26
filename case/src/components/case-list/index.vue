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
            {
              cover: '../../../static/images/list/li1.png',
              id: 1
            },
            {
              cover: '../../../static/images/list/li1.png',
              id: 2
            },
            {
              cover: '../../../static/images/list/li1.png',
              id: 3
            },
            {
              cover: '../../../static/images/list/li1.png',
              id: 4
            },
            {
              cover: '../../../static/images/list/li1.png',
              id: 5
            },
            {
              cover: '../../../static/images/list/li1.png',
              id: 6
            }
          ]
        },
        {
          title: '餐饮/食品/快消品',
          list: [
            {
              cover: '../../../static/images/list/li2.png',
              id: 1
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 2
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 3
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 4
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 5
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 6
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 7
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 8
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 9
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 10
            }
          ]
        },
        {
          title: '电工/电器/通讯',
          list: [
            {
              cover: '../../../static/images/list/li2.png',
              id: 1
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 2
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 3
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 4
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 5
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 6
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 7
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 8
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 9
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 10
            }
          ]
        },
        {
          title: '电商/零售',
          list: [
            {
              cover: '../../../static/images/list/li2.png',
              id: 1
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 2
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 3
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 4
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 5
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 6
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 7
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 8
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 9
            },
            {
              cover: '../../../static/images/list/li2.png',
              id: 10
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
