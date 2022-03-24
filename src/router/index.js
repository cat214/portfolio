import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    }
  ]
})
