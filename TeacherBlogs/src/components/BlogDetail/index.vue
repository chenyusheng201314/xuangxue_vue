<template>
<div class="blog-detail">
  <img src="../../../static/images/banner.png" alt="" width="1200">.
  <DetailAddress :now_address="now_address"></DetailAddress>
  <Article :article_info="article_info"></Article>
</div>
</template>

<script>
import DetailAddress from './detail-adddress'
import Article from './article'
export default {
  name: 'index',
  components: {
    DetailAddress,
    Article
  },
  data () {
    return {
      // 当前地址
      now_address: '营销管理',
      article_info: {
        id: 1,
        tit: '童装店的营销策划案例 ——20平米的小店一天现金成交14.8万',
        teacher: '某某某',
        see_times: 111,
        introduce: '童装店的营销策划案例20平米的小店一天现金成交14.8万2016-09-13麦吉安琪何凯华一次偶遇，成为一个让人津津乐童装店的营销策划案例20平米的小店一天现金成交14.8万2016-09-13麦吉安琪何凯华一次偶遇，成为一个让人津津乐童装店的营销策划案例20平米的小店一天现金成交14.8万2016-09-13麦吉安琪何凯华一次偶遇，成为一个让人津津乐',

      }
    }
  }
}
</script>

<style scoped>
  .blog-detail {
    width: 1200px;
  }
  ul {
    padding: 0 !important;
    margin: 0 !important;
  }
  ul, li, ol {
    list-style-type: none;
  }
</style>
