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
   

    
  },
  {
    path: '/case',
    name: 'Case',
    component: Case
  },
  {
    path: '/',
    name: 'Login',
    component: Login
    
  },
  {
path: '/task',
name: 'Task',
component: Task
  },
  {
path: '/admin',
name: 'Admin',
component: Admin
  },
  {
    path: '/criminals',
    name: 'Criminals',
    component: Criminals
      },
      {
        path: '/report',
        name: 'Report',
        component: Report
          },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)

  if(Store.state.userName != 'admin' && to.path == '/admin') {
    next({ name: 'login'})
  }
  if(Store.state.userName || to.path !== '/login')
  next();
  else
  next({name: 'Login'})

})

export default router
