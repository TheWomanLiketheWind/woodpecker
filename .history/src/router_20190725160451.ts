import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import menuSecond from './views/menuSecond.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/menuSecond',
          name: 'menuSecond',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/menuSecond.vue')
        }
      ]
    }
  ]
})
