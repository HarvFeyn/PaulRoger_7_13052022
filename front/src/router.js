import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import oneArticle from './components/article/page/oneArticle.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '*',
      redirect: '/'
    }, {
      path: '/article/:id',
      name: 'oneArticle',
      component: oneArticle,
      props: true
    }
  ]
})

// Adding global verification for all
router.beforeEach((to, from, next) => {
//   const path = to.path
  console.log('router.beforeEach')
  next()
})

export default router
