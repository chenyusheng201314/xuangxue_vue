import Vue from 'vue'
import Router from 'vue-router'
import CaseList from '@/components/case-list/index'
import CaseDetail from '@/components/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: CaseList
    },
    {
      path: '/case-list',
      name: 'List',
      component: CaseList
    },
    {
      path: '/case-detail',
      name: 'Detail',
      component: CaseDetail
    }
  ]
})
