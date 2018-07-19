import Vue from 'vue'
import Router from 'vue-router'
import ClassList from '../components/class-list/classify'
import ClassDetail from '../components/class-detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'class-list',
      component: ClassList
    },
    {
      path: '/class-list',
      name: 'ClassList',
      component: ClassDetail
    },
    {
      path: '/class-detail',
      name: 'class-detail',
      component: ClassDetail
    }
  ]
})
