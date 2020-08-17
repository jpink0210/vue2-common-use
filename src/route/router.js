import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/index.vue'
import Demo from '@/pages/demo/index.vue'
import Mobile from '@/pages/mobile/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    },
  ]
})
