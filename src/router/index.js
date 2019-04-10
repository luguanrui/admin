import Vue from 'vue'
import Router from 'vue-router'
import {lazyLoadPage} from '@/utils/common'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: lazyLoadPage('login/index')
    },
    {
      path: '/personal-center',
      name: 'personal-center',
      component: lazyLoadPage('personal-center/index')
    }
  ]
})
