import Vue from 'vue'
import Router from 'vue-router'
import personalCenter from '@/pages/personal-center/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personal-center',
      component: personalCenter
    }
  ]
})
