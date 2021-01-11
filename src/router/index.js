import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Criminals from '../views/Criminal.vue'
import Task from '../views/Task.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/criminals',
    name: 'Criminals',
    component: Criminals
  },
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
path: '/task',
name: 'Task',
component: Task
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
