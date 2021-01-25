import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Case from '../views/Case.vue'
import Login from '../views/Login.vue'
import Task from '../views/Task.vue'
import Admin from '../views/Admin.vue'
import Store  from '../store/index'
import Criminals from '../views/Criminals.vue'
import Report from '../views/Report.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    requiresAuth: true
   

    
  },
  {
    path: '/case',
    name: 'Case',
    component: Case,
    requiresAuth: true
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    requiresAuth: true
    
  },
  {
path: '/task',
name: 'Task',
component: Task,
requiresAuth: true
  },
  {
path: '/admin',
name: 'Admin',
component: Admin,
requiresAuth: true
  },
  {
    path: '/criminals',
    name: 'Criminals',
    component: Criminals,
    requiresAuth: true
      },
      {
        path: '/report',
        name: 'Report',
        component: Report,
        requiresAuth: true
          },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)

  if(Store.state.userName != 'Ívar yfirlögga' && to.path == '/login') {
    next({ name: 'login'})
  }
  if(Store.state.userName || to.path !== '/login')
  next();

else
  next({ name: 'Login' })

})

export default router
