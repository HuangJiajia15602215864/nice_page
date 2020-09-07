import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/dynamicParticle',
      name: 'dynamicParticle',
      component: () => import('@/views/login/dynamicParticle.vue'),
    },
    {
      path: '/newMimicry/one',
      name: 'newMimicryOne',
      component: () => import('@/views/newMimicry/one.vue'),
    },
    {
      path: '/newMimicry/two',
      name: 'newMimicryTwo',
      component: () => import('@/views/newMimicry/two.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/card/index.vue'),
    },
    {
      path: '/block',
      name: 'block',
      component: () => import('@/views/block/index.vue'),
    },
  ]
})
