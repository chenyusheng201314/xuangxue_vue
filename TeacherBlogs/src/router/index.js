import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/BlogList/index'
import BlogDetail from '../components/BlogDetail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog-detail',
      name: 'Blog',
      component: BlogDetail
    }
  ]
})
