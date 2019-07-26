import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
          path: 'menuSecond',
          name: 'menuSecond',
          children: [
            {
              path: 'menuThird',
              name: 'menuThird',
              component: () =>
                import(/* webpackChunkName: "about" */ './views/menuThird.vue')
            }
          ],
          component: () =>
            import(/* webpackChunkName: "about" */ './views/menuSecond.vue')
        }
      ]
    }
  ]
})
