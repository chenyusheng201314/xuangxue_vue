<template>
  <div>
    <img src="../../../static/images/class/banner.png" alt="" width="1200">
    <Nowsite :now_class_list="now_class_list"></Nowsite>
    <ClassFiltrate :class_list="class_list" :choose_now_list="choose_now_list" :discounts_list="discounts_list" :price_list="price_list"></ClassFiltrate>
    <DetailList :lesson_list="lesson_list"></DetailList>
    <el-pagination  class="class-paging" background layout="prev, pager, next" :total="paging_info.total" @current-change="now_page" :page-size="paging_info.page_size"    :current-page="paging_info.current_page"></el-pagination>
  </div>
</template>

<script>

import Nowsite from './NowSite'
import ClassFiltrate from './Filtrate'
import DetailList from './DetailList'

export default {
  name: 'classify',
  data () {
    return {
      // 现在位置
      now_class_list: '全部',
      // 条件筛选课程分类
      class_list: [
        {con: '领导力学习', type: false},
        {con: '内训师', type: false},
        {con: '绩效改进', type: false},
        {con: '企业管理', type: false},
        {con: '公开课', type: false},
        {con: '企业内训TDF', type: false}
      ],
      // 条件筛选活动
      discounts_list: [
        {con: '限时免费', type: false},
        {con: '买一赠一', type: false},
        {con: '特价课程', type: false},
        {con: '最新课程', type: false},
        {con: '积分购', type: false}
      ],
      // 条件筛选价格
      price_list: [
        {con: '100以下', type: false},
        {con: '100-300', type: false},
        {con: '300-500', type: false},
        {con: '500-1000', type: false},
        {con: '1000以上', type: false}
      ],
      // 课程详细列表
      lesson_list: [
        {
          id: 1,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        },
        {
          id: 2,
          cover: '../../static/images/class/class-cover.png',
          tit: '中国培训行业发展趋势解读',
          teacher: '崔连斌',
          position: '留美人力资源开发博士',
          num: '6课时',
          time: '1.6小时',
          now_price: 299,
          old_price: 599,
          src: 'javascript:;'
        }
      ],
      // 分页信息
      paging_info: {
        total: 5, // 总数
        page_size: 1, // 每页显示条目个数  和total配合使用
        current_page: 1 // 当前页
      }
    }
  },
  methods: {
    choose_now_list: function (val) {
      this.now_class_list = val
    },
    now_page: function (val) {
      console.log('当前' + val + '页')
    }
  },
  components: {
    Nowsite,
    ClassFiltrate,
    DetailList
  }
}
</script>

<style scoped>
  .class-paging{
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: right;
  }

</style>
