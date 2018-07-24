import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/index'
import Forget from '@/components/forget'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
