import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout:'empty'},
    component: ()=>import('../views/Registration.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Todo.vue')
  },
  {
    path: '/',
    name: 'Login',
    meta: {layout:'empty'},
    component: ()=>import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const requireUser = to.matched.some(record => record.meta.auth)
  // console.log(token)
  if (requireUser && !token ){
    next('/')
  }
  else next()
})

export default router
