import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import Forum from './components/forum/page/page.vue'
import Article from './components/article/page/page.vue'
import Register from './components/register/register.vue'
import Login from './components/login/login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '*',
      redirect: '/'
    }, {
      path: '/forum/:id',
      name: 'forum',
      component: Forum,
      props: true
    }, {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true
    }, {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    }, {
      path: '/login',
      name: 'login',
      component: Login,
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
